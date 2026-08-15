/* ----------------------------------------------------
   TKA SOSIOLOGI — APPLICATION LOGIC (VANILLA JS)
   Offline Single-Page Application (SPA) Engine
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // APP STATE STORE
  const state = {
    data: window.TKA_DATA || { materiSections: [], flashcards: [], contohSoal: [], latihanSoal: [], quickReview: [] },
    currentView: 'dashboard',
    completedMateri: JSON.parse(localStorage.getItem('tka_completed_materi') || '[]'),
    bookmarks: JSON.parse(localStorage.getItem('tka_bookmarks') || '[]'),
    bestScore: parseInt(localStorage.getItem('tka_best_score') || '0', 10),
    theme: localStorage.getItem('tka_theme') || 'light',
    
    // Active Materi State
    activeMateriId: null,
    
    // Flashcard State
    fcCategory: 'all',
    fcList: [],
    fcIndex: 0,
    fcFlipped: false,

    // Quiz State
    quizActive: false,
    quizDifficulty: 'all',
    quizQuestions: [],
    quizIndex: 0,
    quizAnswers: [],
    quizTimerInterval: null,
    quizSecondsLeft: 900 // 15 mins
  };

  // UI ELEMENTS CACHE
  const el = {
    body: document.body,
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    sidebar: document.getElementById('sidebar'),
    openSidebarBtn: document.getElementById('openSidebarBtn'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    quickThemeBtn: document.getElementById('quickThemeBtn'),
    themeToggleText: document.getElementById('themeToggleText'),
    navItems: document.querySelectorAll('.nav-item, .b-nav-item'),
    viewPanels: document.querySelectorAll('.view-panel'),

    // Dashboard
    statMateriCount: document.getElementById('statMateriCount'),
    statFlashcardCount: document.getElementById('statFlashcardCount'),
    statSoalCount: document.getElementById('statSoalCount'),
    dashboardProgressText: document.getElementById('dashboardProgressText'),
    dashboardProgressFill: document.getElementById('dashboardProgressFill'),
    dashboardCompletedCount: document.getElementById('dashboardCompletedCount'),
    dashboardBestScore: document.getElementById('dashboardBestScore'),
    sidebarProgressPercent: document.getElementById('sidebarProgressPercent'),
    sidebarProgressFill: document.getElementById('sidebarProgressFill'),
    dashboardSectionsGrid: document.getElementById('dashboardSectionsGrid'),

    // Materi
    materiListContainer: document.getElementById('materiListContainer'),
    materiDetailContainer: document.getElementById('materiDetailContainer'),
    materiAccordionList: document.getElementById('materiAccordionList'),
    materiFilterInput: document.getElementById('materiFilterInput'),
    backToMateriList: document.getElementById('backToMateriList'),
    materiDetailCard: document.getElementById('materiDetailCard'),
    toggleBookmarkBtn: document.getElementById('toggleBookmarkBtn'),
    toggleCompleteBtn: document.getElementById('toggleCompleteBtn'),
    prevMateriBtn: document.getElementById('prevMateriBtn'),
    nextMateriBtn: document.getElementById('nextMateriBtn'),

    // Flashcards
    fcCategoryTabs: document.getElementById('flashcardCategoryTabs'),
    flashcardBox: document.getElementById('flashcardBox'),
    flashcardInner: document.getElementById('flashcardInner'),
    fcFrontContent: document.getElementById('fcFrontContent'),
    fcBackContent: document.getElementById('fcBackContent'),
    fcPrevBtn: document.getElementById('fcPrevBtn'),
    fcFlipBtn: document.getElementById('fcFlipBtn'),
    fcNextBtn: document.getElementById('fcNextBtn'),
    fcShuffleBtn: document.getElementById('fcShuffleBtn'),
    fcCounterText: document.getElementById('fcCounterText'),

    // Contoh Soal
    contohSoalList: document.getElementById('contohSoalList'),

    // Latihan Soal
    quizSetupCard: document.getElementById('quizSetupCard'),
    quizActiveContainer: document.getElementById('quizActiveContainer'),
    quizResultContainer: document.getElementById('quizResultContainer'),
    quizDifficultySelect: document.getElementById('quizDifficultySelect'),
    quizTimerCheck: document.getElementById('quizTimerCheck'),
    quizBestScoreVal: document.getElementById('quizBestScoreVal'),
    startQuizBtn: document.getElementById('startQuizBtn'),
    quizProgressNum: document.getElementById('quizProgressNum'),
    quizProgressFill: document.getElementById('quizProgressFill'),
    quizTimerBox: document.getElementById('quizTimerBox'),
    quizTimerText: document.getElementById('quizTimerText'),
    quizDiffBadge: document.getElementById('quizDiffBadge'),
    quizQuestionText: document.getElementById('quizQuestionText'),
    quizOptionsList: document.getElementById('quizOptionsList'),
    quizPembahasanBox: document.getElementById('quizPembahasanBox'),
    quizPembahasanText: document.getElementById('quizPembahasanText'),
    quizQuitBtn: document.getElementById('quizQuitBtn'),
    quizNextBtn: document.getElementById('quizNextBtn'),
    quizFinalScore: document.getElementById('quizFinalScore'),
    quizCorrectCount: document.getElementById('quizCorrectCount'),
    quizWrongCount: document.getElementById('quizWrongCount'),
    quizEvalText: document.getElementById('quizEvalText'),
    restartQuizBtn: document.getElementById('restartQuizBtn'),

    // Quick Review
    quickReviewGrid: document.getElementById('quickReviewGrid'),

    // Progress
    progressSectionList: document.getElementById('progressSectionList'),

    // Bookmarks
    bookmarksGrid: document.getElementById('bookmarksGrid'),

    // Global Search
    openSearchModal: document.getElementById('openSearchModal'),
    searchModalOverlay: document.getElementById('searchModalOverlay'),
    closeSearchModal: document.getElementById('closeSearchModal'),
    globalSearchInput: document.getElementById('globalSearchInput'),
    globalSearchResults: document.getElementById('globalSearchResults'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  // HELPER: Flatten all materi items
  function getAllMateriItems() {
    let items = [];
    state.data.materiSections.forEach(sec => {
      if (sec.items) {
        items = items.concat(sec.items);
      }
    });
    return items;
  }

  // HELPER: Toast notifications
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i data-lucide="info"></i> <span>${message}</span>`;
    el.toastContainer.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // TEMA & DARK MODE ENGINE
  function applyTheme(themeName) {
    state.theme = themeName;
    el.body.setAttribute('data-theme', themeName);
    localStorage.setItem('tka_theme', themeName);
    if (themeName === 'dark') {
      if (el.themeToggleText) el.themeToggleText.textContent = 'Mode Gelap';
    } else {
      if (el.themeToggleText) el.themeToggleText.textContent = 'Mode Terang';
    }
  }

  function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    showToast(`Mode tampilan diubah ke ${newTheme === 'dark' ? 'Gelap' : 'Terang'}`);
  }

  // ROUTING & NAVIGATION SYSTEM
  function navigateTo(viewName, params = {}) {
    state.currentView = viewName;

    // Update active nav buttons
    el.navItems.forEach(item => {
      const target = item.getAttribute('data-view');
      if (target === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active view panel
    el.viewPanels.forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // Close mobile sidebar if open
    el.sidebar.classList.remove('open');
    if (el.sidebarOverlay) el.sidebarOverlay.classList.remove('active');

    // Trigger View Specific Renderers
    if (viewName === 'dashboard') {
      renderDashboard();
    } else if (viewName === 'materi') {
      if (params.materiId) {
        renderMateriDetail(params.materiId);
      } else {
        renderMateriList();
      }
    } else if (viewName === 'flashcard') {
      initFlashcards();
    } else if (viewName === 'contoh-soal') {
      renderContohSoal();
    } else if (viewName === 'latihan-soal') {
      resetQuizToSetup();
    } else if (viewName === 'quick-review') {
      renderQuickReview();
    } else if (viewName === 'progress') {
      renderProgressView();
    } else if (viewName === 'bookmarks') {
      renderBookmarksView();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // PROGRESS CALCULATOR & STORAGE
  function updateProgressStats() {
    const allMateri = getAllMateriItems();
    const totalCount = allMateri.length || 30;
    const completedCount = state.completedMateri.length;
    const percent = Math.round((completedCount / totalCount) * 100);

    // Save to localStorage
    localStorage.setItem('tka_completed_materi', JSON.stringify(state.completedMateri));

    // Update Dashboard UI
    if (el.dashboardProgressText) el.dashboardProgressText.textContent = `${percent}%`;
    if (el.dashboardProgressFill) el.dashboardProgressFill.style.width = `${percent}%`;
    if (el.dashboardCompletedCount) el.dashboardCompletedCount.textContent = `${completedCount} dari ${totalCount} Materi Selesai`;
    if (el.sidebarProgressPercent) el.sidebarProgressPercent.textContent = `${percent}%`;
    if (el.sidebarProgressFill) el.sidebarProgressFill.style.width = `${percent}%`;
  }

  // 1. RENDER DASHBOARD
  function renderDashboard() {
    const allMateri = getAllMateriItems();
    if (el.statMateriCount) el.statMateriCount.textContent = allMateri.length || 30;
    if (el.statFlashcardCount) el.statFlashcardCount.textContent = state.data.flashcards.length || '60+';
    const totalSoal = (state.data.contohSoal.length || 0) + (state.data.latihanSoal.length || 0);
    if (el.statSoalCount) el.statSoalCount.textContent = totalSoal || '80+';

    if (el.dashboardBestScore) {
      el.dashboardBestScore.textContent = `Skor Latihan Terbaik: ${state.bestScore}/100`;
    }

    updateProgressStats();

    // Render Section Cards Grid
    if (el.dashboardSectionsGrid) {
      el.dashboardSectionsGrid.innerHTML = state.data.materiSections.map(sec => {
        const itemCount = sec.items ? sec.items.length : 0;
        const completedInSec = sec.items ? sec.items.filter(item => state.completedMateri.includes(item.id)).length : 0;
        return `
          <div class="sec-card" onclick="window.app.navigate('materi', { sectionId: '${sec.id}' })">
            <div>
              <span class="sec-code">${sec.code}</span>
              <h3 class="sec-title">${sec.title}</h3>
              <p class="sec-desc">${sec.description}</p>
            </div>
            <div class="sec-footer">
              <span>${itemCount} Topik</span>
              <span>Selesai ${completedInSec}/${itemCount}</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 2. RENDER MATERI LIST & ACCORDIONS
  function renderMateriList() {
    el.materiListContainer.classList.remove('hidden');
    el.materiDetailContainer.classList.add('hidden');

    const filterTerm = el.materiFilterInput ? el.materiFilterInput.value.toLowerCase().trim() : '';

    el.materiAccordionList.innerHTML = state.data.materiSections.map((sec, index) => {
      const filteredItems = (sec.items || []).filter(item => {
        if (!filterTerm) return true;
        const inTitle = item.title.toLowerCase().includes(filterTerm);
        const inOverview = item.overview.toLowerCase().includes(filterTerm);
        const inKeywords = (item.keywords || []).some(k => k.toLowerCase().includes(filterTerm));
        return inTitle || inOverview || inKeywords;
      });

      if (filterTerm && filteredItems.length === 0) return '';

      const itemsHtml = filteredItems.map(item => {
        const isDone = state.completedMateri.includes(item.id);
        const isBookmarked = state.bookmarks.includes(item.id);
        return `
          <div class="materi-item-row" onclick="window.app.openMateriDetail(${item.id})">
            <div class="materi-item-left">
              <span class="materi-badge-code">${item.code}</span>
              <span class="materi-title-text">${item.title}</span>
              ${isBookmarked ? '<i data-lucide="bookmark" style="width:14px; color:var(--accent-amber)"></i>' : ''}
            </div>
            <div>
              <span class="status-badge ${isDone ? 'completed' : 'pending'}">
                ${isDone ? '✓ Selesai' : 'Belum'}
              </span>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="accordion-section ${index === 0 || filterTerm ? 'active' : ''}" id="accSec-${sec.id}">
          <div class="accordion-header" onclick="document.getElementById('accSec-${sec.id}').classList.toggle('active')">
            <div class="acc-title-box">
              <span>${sec.code}</span>
              <h3>${sec.title}</h3>
            </div>
            <i data-lucide="chevron-down" class="acc-icon"></i>
          </div>
          <div class="accordion-body">
            ${itemsHtml || '<p class="text-muted" style="padding:10px 0;">Tidak ada topik yang cocok.</p>'}
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // RENDER MATERI DETAIL PAGE
  function renderMateriDetail(materiId) {
    const allMateri = getAllMateriItems();
    const item = allMateri.find(m => m.id === materiId);
    if (!item) return;

    state.activeMateriId = materiId;
    el.materiListContainer.classList.add('hidden');
    el.materiDetailContainer.classList.remove('hidden');

    // Update Top Action Buttons
    updateDetailActionButtons();

    // Find section title
    const sec = state.data.materiSections.find(s => s.id === item.sectionId);

    // Build Konsep Cards
    const konsepHtml = (item.konsepPenting || []).map(k => `
      <div class="konsep-card">
        <h4>${k.title}</h4>
        <p>${k.desc}</p>
      </div>
    `).join('');

    // Build Keyword Chips
    const keywordsHtml = (item.keywords || []).map(kw => `
      <span class="chip">${kw}</span>
    `).join('');

    // Build Case Analysis Flow if available
    let caseAnalysisHtml = '';
    if (item.caseAnalysis) {
      caseAnalysisHtml = `
        <div class="case-analysis-box">
          <h4><i data-lucide="git-commit"></i> CASE ANALYSIS (CARA BERPIKIR TKA)</h4>
          <div class="case-flow">
            <div class="case-step">
              <span class="case-step-label">Kasus</span>
              <span class="case-step-text">${item.caseAnalysis.kasus}</span>
            </div>
            <div class="case-step">
              <span class="case-step-label">Apa yang Terjadi?</span>
              <span class="case-step-text">${item.caseAnalysis.apaTerjadi}</span>
            </div>
            <div class="case-step">
              <span class="case-step-label">Konsep Relevan</span>
              <span class="case-step-text"><strong>${item.caseAnalysis.konsepRelevan}</strong></span>
            </div>
            <div class="case-step">
              <span class="case-step-label">Bukti Kasus</span>
              <span class="case-step-text">${item.caseAnalysis.buktiKasus}</span>
            </div>
            <div class="case-step">
              <span class="case-step-label">Kesimpulan</span>
              <span class="case-step-text"><em>${item.caseAnalysis.kesimpulan}</em></span>
            </div>
          </div>
        </div>
      `;
    }

    // Build Comparison Tables if available
    let tablesHtml = '';
    if (item.tables && item.tables.length > 0) {
      tablesHtml = item.tables.map(tbl => `
        <div class="table-container">
          <h4 style="margin-bottom: 10px; font-weight: 800;">${tbl.title}</h4>
          <table class="styled-table">
            <thead>
              <tr>
                ${tbl.headers.map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${tbl.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `).join('');
    }

    // Build Quick Check Questions if available
    let quickCheckHtml = '';
    if (item.quickCheck && item.quickCheck.length > 0) {
      quickCheckHtml = `
        <div class="quick-check-box">
          <h4><i data-lucide="help-circle"></i> QUICK CHECK — UJI PEMAHAMAN SEKETIKA</h4>
          ${item.quickCheck.map((qc, qIdx) => `
            <div class="qc-item">
              <p class="qc-question">${qIdx + 1}. ${qc.question}</p>
              <div class="qc-options" id="qcOpts-${qIdx}">
                ${(qc.options || []).map((opt, oIdx) => `
                  <button class="qc-opt-btn" onclick="window.app.checkQuickCheckAnswer(${qIdx}, ${oIdx}, ${qc.answerIndex || 0})">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="qc-explanation hidden" id="qcExp-${qIdx}">
                💡 <strong>Penjelasan:</strong> ${qc.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Render Complete Detail Card HTML
    el.materiDetailCard.innerHTML = `
      <div class="detail-header-block">
        <span class="detail-section-tag">${sec ? sec.code + ' • ' + sec.title : 'SOSIOLOGI TKA'}</span>
        <h1 class="detail-title">${item.code} — ${item.title}</h1>
        <p class="detail-overview">${item.overview}</p>
      </div>

      <div class="content-block">
        <h3><i data-lucide="book-open"></i> Pengertian & Hakikat Konsep</h3>
        <p>${item.pengertian}</p>
      </div>

      <div class="content-block">
        <h3><i data-lucide="key"></i> Konsep-Konsep Penting</h3>
        <div class="konsep-grid">${konsepHtml}</div>
      </div>

      <div class="content-block">
        <h3><i data-lucide="align-left"></i> Penjelasan Mendalam</h3>
        <p>${item.penjelasanMendalam}</p>
      </div>

      <div class="tka-focus-box">
        <h4>🎯 TKA FOCUS</h4>
        <p>${item.tkaFocus}</p>
      </div>

      ${caseAnalysisHtml}

      <div class="jebakan-box">
        <h4>⚠️ Hati-hati! Jebakan Soal TKA</h4>
        <p>${item.jebakan}</p>
      </div>

      ${tablesHtml}

      <div class="content-block">
        <h3><i data-lucide="tags"></i> Kata Kunci (Keywords)</h3>
        <div class="keywords-wrap">${keywordsHtml}</div>
      </div>

      ${quickCheckHtml}
    `;

    // Configure Prev & Next Navigation Buttons
    const currentIndex = allMateri.findIndex(m => m.id === materiId);
    if (currentIndex > 0) {
      el.prevMateriBtn.disabled = false;
      el.prevMateriBtn.onclick = () => renderMateriDetail(allMateri[currentIndex - 1].id);
    } else {
      el.prevMateriBtn.disabled = true;
    }

    if (currentIndex < allMateri.length - 1) {
      el.nextMateriBtn.disabled = false;
      el.nextMateriBtn.onclick = () => renderMateriDetail(allMateri[currentIndex + 1].id);
    } else {
      el.nextMateriBtn.disabled = true;
    }

    if (window.lucide) window.lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateDetailActionButtons() {
    const isBookmarked = state.bookmarks.includes(state.activeMateriId);
    const isCompleted = state.completedMateri.includes(state.activeMateriId);

    if (isBookmarked) {
      el.toggleBookmarkBtn.classList.add('btn-secondary');
      el.toggleBookmarkBtn.querySelector('span').textContent = 'Tersimpan';
    } else {
      el.toggleBookmarkBtn.classList.remove('btn-secondary');
      el.toggleBookmarkBtn.querySelector('span').textContent = 'Bookmark';
    }

    if (isCompleted) {
      el.toggleCompleteBtn.classList.add('btn-success');
      el.toggleCompleteBtn.querySelector('span').textContent = '✓ Selesai';
    } else {
      el.toggleCompleteBtn.classList.remove('btn-success');
      el.toggleCompleteBtn.querySelector('span').textContent = 'Tandai Selesai';
    }
  }

  function checkQuickCheckAnswer(qIdx, selectedIdx, correctIdx) {
    const optContainer = document.getElementById(`qcOpts-${qIdx}`);
    const expBox = document.getElementById(`qcExp-${qIdx}`);
    const btns = optContainer.querySelectorAll('.qc-opt-btn');

    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    if (expBox) expBox.classList.remove('hidden');
  }

  // 3. FLASHCARD SYSTEM
  function initFlashcards() {
    state.fcList = state.fcCategory === 'all'
      ? [...state.data.flashcards]
      : state.data.flashcards.filter(f => f.category === state.fcCategory);

    if (state.fcList.length === 0) {
      state.fcList = [...state.data.flashcards];
    }

    state.fcIndex = 0;
    state.fcFlipped = false;
    renderCurrentFlashcard();
  }

  function renderCurrentFlashcard() {
    el.flashcardInner.classList.remove('flipped');
    state.fcFlipped = false;

    if (state.fcList.length === 0) {
      el.fcFrontContent.textContent = 'Tidak ada flashcard tersedia.';
      el.fcBackContent.textContent = '';
      el.fcCounterText.textContent = 'Card 0 / 0';
      return;
    }

    const currentCard = state.fcList[state.fcIndex];
    el.fcFrontContent.textContent = currentCard.front;
    el.fcBackContent.textContent = currentCard.back;
    el.fcCounterText.textContent = `Card ${state.fcIndex + 1} / ${state.fcList.length}`;
  }

  function flipFlashcard() {
    state.fcFlipped = !state.fcFlipped;
    el.flashcardInner.classList.toggle('flipped');
  }

  function prevFlashcard() {
    if (state.fcList.length === 0) return;
    state.fcIndex = (state.fcIndex - 1 + state.fcList.length) % state.fcList.length;
    renderCurrentFlashcard();
  }

  function nextFlashcard() {
    if (state.fcList.length === 0) return;
    state.fcIndex = (state.fcIndex + 1) % state.fcList.length;
    renderCurrentFlashcard();
  }

  function shuffleFlashcards() {
    for (let i = state.fcList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.fcList[i], state.fcList[j]] = [state.fcList[j], state.fcList[i]];
    }
    state.fcIndex = 0;
    renderCurrentFlashcard();
    showToast('Flashcard berhasil diacak!');
  }

  // 4. CONTOH SOAL RENDERER
  function renderContohSoal() {
    if (!el.contohSoalList) return;
    el.contohSoalList.innerHTML = state.data.contohSoal.map((cs, idx) => `
      <div class="contoh-card">
        <h3>Soal 0${idx + 1}</h3>
        <p class="contoh-soal-text">${cs.soal}</p>
        <div class="contoh-options">
          ${cs.options.map((opt, oIdx) => `
            <button class="contoh-opt-btn" onclick="window.app.revealContohAnswer(${idx}, '${opt.charAt(0)}')">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="pembahasan-box hidden" id="contohPem-${idx}">
          <h4>Jawaban: ${cs.answer}</h4>
          <p><strong>Pembahasan:</strong> ${cs.pembahasan}</p>
        </div>
      </div>
    `).join('');
  }

  function revealContohAnswer(soalIdx, selectedOptionLetter) {
    const pemBox = document.getElementById(`contohPem-${soalIdx}`);
    if (pemBox) pemBox.classList.remove('hidden');
  }

  // 5. LATIHAN SOAL (QUIZ ENGINE)
  function resetQuizToSetup() {
    state.quizActive = false;
    clearInterval(state.quizTimerInterval);
    el.quizSetupCard.classList.remove('hidden');
    el.quizActiveContainer.classList.add('hidden');
    el.quizResultContainer.classList.add('hidden');
    el.quizBestScoreVal.textContent = `${state.bestScore}/100`;
  }

  function startQuiz() {
    const activeTab = el.quizDifficultySelect.querySelector('.radio-tab.active');
    state.quizDifficulty = activeTab ? activeTab.getAttribute('data-diff') : 'all';
    let pool = state.data.latihanSoal;

    if (state.quizDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === state.quizDifficulty);
    }

    if (pool.length === 0) pool = state.data.latihanSoal;

    // Shuffle & pick questions (10 questions per round)
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    state.quizQuestions = shuffled.slice(0, 10);
    state.quizIndex = 0;
    state.quizAnswers = [];
    state.quizActive = true;

    el.quizSetupCard.classList.add('hidden');
    el.quizActiveContainer.classList.remove('hidden');
    el.quizResultContainer.classList.add('hidden');

    // Timer setup
    if (el.quizTimerCheck && el.quizTimerCheck.checked) {
      el.quizTimerBox.classList.remove('hidden');
      state.quizSecondsLeft = 900;
      updateTimerDisplay();
      clearInterval(state.quizTimerInterval);
      state.quizTimerInterval = setInterval(() => {
        state.quizSecondsLeft--;
        updateTimerDisplay();
        if (state.quizSecondsLeft <= 0) {
          clearInterval(state.quizTimerInterval);
          finishQuiz();
        }
      }, 1000);
    } else {
      el.quizTimerBox.classList.add('hidden');
    }

    renderQuizQuestion();
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.quizSecondsLeft / 60);
    const secs = state.quizSecondsLeft % 60;
    el.quizTimerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function renderQuizQuestion() {
    const q = state.quizQuestions[state.quizIndex];
    el.quizProgressNum.textContent = `Soal ${state.quizIndex + 1} / ${state.quizQuestions.length}`;
    el.quizProgressFill.style.width = `${((state.quizIndex + 1) / state.quizQuestions.length) * 100}%`;
    el.quizDiffBadge.textContent = q.difficulty ? q.difficulty.toUpperCase() : 'MEDIUM';
    el.quizQuestionText.textContent = q.soal;
    el.quizPembahasanBox.classList.add('hidden');
    el.quizNextBtn.disabled = true;

    el.quizOptionsList.innerHTML = q.options.map((opt, oIdx) => `
      <button class="quiz-opt-item" onclick="window.app.selectQuizOption(${oIdx})">
        ${opt}
      </button>
    `).join('');
  }

  function selectQuizOption(optionIdx) {
    const q = state.quizQuestions[state.quizIndex];
    const items = el.quizOptionsList.querySelectorAll('.quiz-opt-item');

    items.forEach((item, idx) => {
      item.disabled = true;
      if (idx === q.answerIndex) {
        item.classList.add('selected-correct');
      } else if (idx === optionIdx) {
        item.classList.add('selected-wrong');
      }
    });

    state.quizAnswers[state.quizIndex] = (optionIdx === q.answerIndex);
    el.quizPembahasanText.textContent = q.pembahasan;
    el.quizPembahasanBox.classList.remove('hidden');
    el.quizNextBtn.disabled = false;
  }

  function nextQuizQuestion() {
    state.quizIndex++;
    if (state.quizIndex >= state.quizQuestions.length) {
      finishQuiz();
    } else {
      renderQuizQuestion();
    }
  }

  function finishQuiz() {
    clearInterval(state.quizTimerInterval);
    const correct = state.quizAnswers.filter(Boolean).length;
    const total = state.quizQuestions.length;
    const score = Math.round((correct / total) * 100);

    el.quizActiveContainer.classList.add('hidden');
    el.quizResultContainer.classList.remove('hidden');

    el.quizFinalScore.textContent = score;
    el.quizCorrectCount.textContent = correct;
    el.quizWrongCount.textContent = total - correct;

    if (score > state.bestScore) {
      state.bestScore = score;
      localStorage.setItem('tka_best_score', score.toString());
      showToast(`🏆 Rekor Baru! Skor latihan Anda mencapai ${score}!`);
    }

    // Evaluation text
    if (score >= 80) {
      el.quizEvalText.textContent = 'Luar Biasa! Pemahaman konsep dan analisis kasus Sosiologi Anda sangat tajam. Siap menghadapi TKA Sosiologi dengan percaya diri!';
    } else if (score >= 60) {
      el.quizEvalText.textContent = 'Hasil Cukup Baik! Anda sudah menguasai sebagian besar materi, namun disarankan melakukan review ulang pada bagian resolusi konflik dan metode penelitian.';
    } else {
      el.quizEvalText.textContent = 'Perlu Pendalaman Ulang. Jangan berkecil hati! Disarankan untuk mengulang membaca Flashcard dan Quick Review secara menyeluruh.';
    }
  }

  // 6. QUICK REVIEW RENDERER
  function renderQuickReview() {
    if (!el.quickReviewGrid) return;
    el.quickReviewGrid.innerHTML = state.data.quickReview.map(qr => `
      <div class="qr-card">
        <span class="qr-cat">${qr.category}</span>
        <h3 class="qr-title">${qr.title}</h3>
        <p class="qr-desc">${qr.desc}</p>
      </div>
    `).join('');
  }

  // 7. PROGRESS VIEW RENDERER
  function renderProgressView() {
    if (!el.progressSectionList) return;
    el.progressSectionList.innerHTML = state.data.materiSections.map(sec => {
      const items = sec.items || [];
      const completed = items.filter(i => state.completedMateri.includes(i.id)).length;
      const pct = items.length ? Math.round((completed / items.length) * 100) : 0;

      return `
        <div class="sp-item">
          <div class="sp-header">
            <span>${sec.code} — ${sec.title}</span>
            <span>${completed}/${items.length} Selesai (${pct}%)</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 8. BOOKMARKS VIEW RENDERER
  function renderBookmarksView() {
    if (!el.bookmarksGrid) return;
    const allMateri = getAllMateriItems();
    const bookmarkedItems = allMateri.filter(m => state.bookmarks.includes(m.id));

    if (bookmarkedItems.length === 0) {
      el.bookmarksGrid.innerHTML = `
        <p class="text-muted" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">
          Belum ada materi yang di-bookmark. Klik tombol "Bookmark" saat membaca materi untuk menyimpannya di sini.
        </p>
      `;
      return;
    }

    el.bookmarksGrid.innerHTML = bookmarkedItems.map(item => `
      <div class="bookmark-card" onclick="window.app.openMateriDetail(${item.id})">
        <div class="bookmark-card-title">${item.title}</div>
        <div class="bookmark-card-meta">
          <i data-lucide="book-open"></i>
          <span>${item.code}</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // 9. GLOBAL SEARCH SYSTEM
  function searchGlobal(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      el.globalSearchResults.innerHTML = '<p class="search-placeholder">Ketik kata kunci untuk mencari di seluruh 30 materi...</p>';
      return;
    }

    const allMateri = getAllMateriItems();
    const matches = allMateri.filter(m => {
      const inTitle = m.title.toLowerCase().includes(q);
      const inPengertian = m.pengertian.toLowerCase().includes(q);
      const inKeywords = (m.keywords || []).some(k => k.toLowerCase().includes(q));
      return inTitle || inPengertian || inKeywords;
    });

    if (matches.length === 0) {
      el.globalSearchResults.innerHTML = '<p class="search-placeholder">Tidak ditemukan materi yang cocok.</p>';
      return;
    }

    el.globalSearchResults.innerHTML = matches.map(m => `
      <div class="search-result-item" onclick="window.app.openMateriFromSearch(${m.id})">
        <div class="search-result-title">${m.code} — ${m.title}</div>
        <div class="search-result-type"><i data-lucide="book-open"></i> Materi Sosiologi</div>
      </div>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // EVENT LISTENERS BINDING
  function initEventListeners() {
    // Theme Toggles
    if (el.themeToggleBtn) el.themeToggleBtn.addEventListener('click', toggleTheme);
    if (el.quickThemeBtn) el.quickThemeBtn.addEventListener('click', toggleTheme);

    // Mobile Sidebar
    function openSidebar() {
      el.sidebar.classList.add('open');
      if (el.sidebarOverlay) el.sidebarOverlay.classList.add('active');
    }
    function closeSidebar() {
      el.sidebar.classList.remove('open');
      if (el.sidebarOverlay) el.sidebarOverlay.classList.remove('active');
    }
    if (el.openSidebarBtn) el.openSidebarBtn.addEventListener('click', openSidebar);
    if (el.closeSidebarBtn) el.closeSidebarBtn.addEventListener('click', closeSidebar);
    if (el.sidebarOverlay) el.sidebarOverlay.addEventListener('click', closeSidebar);

    // Navigation Items
    el.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = item.getAttribute('data-view');
        navigateTo(targetView);
      });
    });

    // Materi Search Filter
    if (el.materiFilterInput) {
      el.materiFilterInput.addEventListener('input', renderMateriList);
    }

    // Materi Detail Top Nav Buttons
    if (el.backToMateriList) {
      el.backToMateriList.addEventListener('click', () => {
        el.materiListContainer.classList.remove('hidden');
        el.materiDetailContainer.classList.add('hidden');
      });
    }

    if (el.toggleBookmarkBtn) {
      el.toggleBookmarkBtn.addEventListener('click', () => {
        const id = state.activeMateriId;
        if (!id) return;
        const idx = state.bookmarks.indexOf(id);
        if (idx > -1) {
          state.bookmarks.splice(idx, 1);
          showToast('Materi dihapus dari Bookmark');
        } else {
          state.bookmarks.push(id);
          showToast('Materi disimpan ke Bookmark');
        }
        localStorage.setItem('tka_bookmarks', JSON.stringify(state.bookmarks));
        updateDetailActionButtons();
      });
    }

    if (el.toggleCompleteBtn) {
      el.toggleCompleteBtn.addEventListener('click', () => {
        const id = state.activeMateriId;
        if (!id) return;
        const idx = state.completedMateri.indexOf(id);
        if (idx > -1) {
          state.completedMateri.splice(idx, 1);
          showToast('Status materi diubah menjadi Belum Selesai');
        } else {
          state.completedMateri.push(id);
          showToast('🎉 Selamat! Materi ditandai Selesai!');
        }
        updateProgressStats();
        updateDetailActionButtons();
      });
    }

    // Flashcard Event Listeners
    if (el.flashcardBox) el.flashcardBox.addEventListener('click', flipFlashcard);
    if (el.fcFlipBtn) el.fcFlipBtn.addEventListener('click', flipFlashcard);
    if (el.fcPrevBtn) el.fcPrevBtn.addEventListener('click', prevFlashcard);
    if (el.fcNextBtn) el.fcNextBtn.addEventListener('click', nextFlashcard);
    if (el.fcShuffleBtn) el.fcShuffleBtn.addEventListener('click', shuffleFlashcards);

    if (el.fcCategoryTabs) {
      el.fcCategoryTabs.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          el.fcCategoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.fcCategory = btn.getAttribute('data-cat');
          initFlashcards();
        });
      });
    }

    // Quiz Radio Difficulty Tabs
    if (el.quizDifficultySelect) {
      el.quizDifficultySelect.querySelectorAll('.radio-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          el.quizDifficultySelect.querySelectorAll('.radio-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        });
      });
    }

    if (el.startQuizBtn) el.startQuizBtn.addEventListener('click', startQuiz);
    if (el.quizNextBtn) el.quizNextBtn.addEventListener('click', nextQuizQuestion);
    if (el.quizQuitBtn) el.quizQuitBtn.addEventListener('click', resetQuizToSetup);
    if (el.restartQuizBtn) el.restartQuizBtn.addEventListener('click', resetQuizToSetup);

    // Global Search Modal Events
    if (el.openSearchModal) {
      el.openSearchModal.addEventListener('click', () => {
        el.searchModalOverlay.classList.remove('hidden');
        el.globalSearchInput.focus();
      });
    }

    if (el.closeSearchModal) {
      el.closeSearchModal.addEventListener('click', () => el.searchModalOverlay.classList.add('hidden'));
    }

    if (el.searchModalOverlay) {
      el.searchModalOverlay.addEventListener('click', (e) => {
        if (e.target === el.searchModalOverlay) {
          el.searchModalOverlay.classList.add('hidden');
        }
      });
    }

    if (el.globalSearchInput) {
      el.globalSearchInput.addEventListener('input', (e) => searchGlobal(e.target.value));
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        el.searchModalOverlay.classList.remove('hidden');
        el.globalSearchInput.focus();
      } else if (e.key === 'Escape') {
        el.searchModalOverlay.classList.add('hidden');
      } else if (state.currentView === 'flashcard' && e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      }
    });
  }

  // GLOBAL APP PUBLIC API
  window.app = {
    navigate: navigateTo,
    openMateriDetail: (id) => navigateTo('materi', { materiId: id }),
    openMateriFromSearch: (id) => {
      el.searchModalOverlay.classList.add('hidden');
      navigateTo('materi', { materiId: id });
    },
    checkQuickCheckAnswer,
    revealContohAnswer,
    selectQuizOption
  };

  // INITIALIZE APP
  applyTheme(state.theme);
  initEventListeners();
  navigateTo('dashboard');
});
