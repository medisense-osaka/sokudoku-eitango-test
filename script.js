document.addEventListener('DOMContentLoaded', () => {
    // ★ Google Apps Script のURLをここに貼り付ける
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwnsZFuWqVjp8U_eOifJYysCS9SmdQqQUtudqc3IEX8YY6V9bmZ1bFvkpc_bwWoAv3A/exec';
    // DOM Elements
    const card = document.getElementById('card');
    const wordDisplay = document.getElementById('word-display');
    const phoneticDisplay = document.getElementById('phonetic-display');
    const meaningDisplay = document.getElementById('meaning-display');
    const exampleDisplay = document.getElementById('example-display');
    const exampleTranslationDisplay = document.getElementById('example-translation-display');

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');

    const startUnitSelect = document.getElementById('start-unit');
    const endUnitSelect = document.getElementById('end-unit');
    const startBtn = document.getElementById('start-btn');
    const studentNameInput = document.getElementById('student-name');

    const currentUnitDisplay = document.getElementById('current-unit-display');

    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');

    const resetBtn = document.getElementById('reset-btn');

    const progressBar = document.getElementById('progress-bar');
    const timerBar = document.getElementById('timer-bar');
    const currentCountDisplay = document.getElementById('current-count');
    const totalCountDisplay = document.getElementById('total-count');

    // State
    let allWords = [];
    let currentSessionWords = [];
    let currentIndex = 0;
    let isAnswered = false;
    let timerInterval;
    let flipTimeoutId = null;
    const TIME_LIMIT = 3000; // 3 seconds

    // Score tracking
    let correctCount = 0;
    let wrongWords = [];
    let studentName = '';
    let sessionUnitRange = '';

    const feedbackCorrect = document.getElementById('feedback-correct');
    const feedbackWrong = document.getElementById('feedback-wrong');
    const resultFeedback = document.getElementById('result-feedback');

    // Load Data
    function loadWords() {
        if (typeof vocabularyData !== 'undefined') {
            allWords = vocabularyData;
            populateUnitSelectors();
        } else {
            alert("Error: Data not found.");
        }
    }

    function populateUnitSelectors() {
        // Ensure unit is treated as a number
        const units = [...new Set(allWords.map(w => parseInt(w.unit)))].sort((a, b) => a - b);

        startUnitSelect.innerHTML = '';
        endUnitSelect.innerHTML = '';

        units.forEach(unit => {
            const optionStart = document.createElement('option');
            optionStart.value = unit;
            optionStart.textContent = `Unit ${unit}`;
            startUnitSelect.appendChild(optionStart);

            const optionEnd = document.createElement('option');
            optionEnd.value = unit;
            optionEnd.textContent = `Unit ${unit}`;
            endUnitSelect.appendChild(optionEnd);
        });

        // Set default values (Start: Min, End: Max)
        if (units.length > 0) {
            startUnitSelect.value = units[0];
            endUnitSelect.value = units[units.length - 1];
        }
    }

    function startSession() {
        const name = studentNameInput.value.trim();
        if (!name) {
            alert('名前を入力してください。');
            studentNameInput.focus();
            return;
        }
        studentName = name;

        const start = parseInt(startUnitSelect.value);
        const end = parseInt(endUnitSelect.value);

        if (start > end) {
            alert("開始ユニットは終了ユニットより前である必要があります。");
            return;
        }

        sessionUnitRange = (start === end) ? `Unit ${start}` : `Unit ${start} - ${end}`;

        currentSessionWords = allWords.filter(w => {
            const u = parseInt(w.unit);
            return u >= start && u <= end;
        });

        if (currentSessionWords.length === 0) {
            alert("該当する単語がありません。");
            return;
        }

        // Show Quiz Screen
        startScreen.style.display = 'none';
        startScreen.classList.remove('active');
        quizScreen.style.display = 'flex';

        // Clean up any previous result screen
        const oldResult = document.getElementById('result-container');
        if (oldResult) {
            oldResult.remove();
        }
        card.style.display = '';

        // Update Title
        if (start === end) {
            currentUnitDisplay.textContent = start;
        } else {
            currentUnitDisplay.textContent = `${start} - ${end}`;
        }

        // Simple Shuffle
        currentSessionWords.sort(() => Math.random() - 0.5);

        currentIndex = 0;
        correctCount = 0;
        wrongWords = [];
        updateStats();
        showCard();
    }

    function resetApp() {
        clearTimeout(timerInterval); // Stop timer
        quizScreen.style.display = 'none';
        startScreen.style.display = 'flex';
        startScreen.classList.add('active');
        populateUnitSelectors(); // Refresh if needed, or just keep selection
    }

    function updateStats() {
        currentCountDisplay.textContent = currentIndex + 1;
        totalCountDisplay.textContent = currentSessionWords.length;
        const percentage = ((currentIndex) / currentSessionWords.length) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    function showCard() {
        if (currentIndex >= currentSessionWords.length) {
            finishSession();
            return;
        }

        const wordData = currentSessionWords[currentIndex];
        isAnswered = false;
        nextBtn.style.display = 'none';
        card.classList.remove('flipped'); // Ensure front is shown

        // Clear any pending flip timer from previous question
        if (flipTimeoutId) {
            clearTimeout(flipTimeoutId);
            flipTimeoutId = null;
        }

        // Reset feedback
        resultFeedback.className = 'result-feedback';
        resultFeedback.textContent = '';

        // Generate Options
        generateOptions(wordData);

        card.innerHTML = `
            <div class="card-front">
                <div class="word">${wordData.word}</div>
                <div class="phonetic">${wordData.phonetic || ''}</div>
            </div>
            <div class="card-back">
                <div class="meaning">${wordData.meaning}</div>
                <div class="example">${wordData.example || ''}</div>
                <div class="example-translation">${wordData.example_translation || ''}</div>
            </div>
        `;
        card.style.borderLeft = 'none';

        updateStats(); // Update progress bar
        startTimer();  // Start the countdown
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerBar.style.transition = 'none';
        timerBar.style.width = '100%';
        timerBar.style.backgroundColor = '#ff9800'; // Reset color

        // Force reflow
        void timerBar.offsetWidth;

        timerBar.style.transition = `width ${TIME_LIMIT}ms linear`;
        timerBar.style.width = '0%';

        timerInterval = setTimeout(() => {
            handleTimeout();
        }, TIME_LIMIT);
    }

    function stopTimer() {
        clearTimeout(timerInterval);
        const computedStyle = window.getComputedStyle(timerBar);
        const currentWidth = computedStyle.width;
        timerBar.style.transition = 'none';
        timerBar.style.width = currentWidth; // Freeze bar
    }

    function handleTimeout() {
        if (isAnswered) return;

        // Treat as wrong answer
        checkAnswer(null, currentSessionWords[currentIndex]); // Pass null as selected option
    }

    function generateOptions(currentWord) {
        optionsContainer.innerHTML = '';

        // 1. Get Distractors (3 random words from other units/same unit)
        // Filter out current word
        const otherWords = allWords.filter(w => w.id !== currentWord.id);
        // Shuffle and pick 3
        const distractors = otherWords.sort(() => Math.random() - 0.5).slice(0, 3);

        // 2. Combine and Shuffle
        const options = [...distractors, currentWord].sort(() => Math.random() - 0.5);

        // 3. Render
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.meaning;
            btn.onclick = () => checkAnswer(option, currentWord, btn);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selectedOption, currentWord, btnElement = null) {
        if (isAnswered) return;
        isAnswered = true;
        stopTimer();

        const isCorrect = selectedOption && selectedOption.id === currentWord.id;

        // Track score
        if (isCorrect) {
            correctCount++;
        } else {
            wrongWords.push(currentWord);
        }

        // Visual Feedback for Options
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            if (btn.textContent === currentWord.meaning) {
                btn.classList.add('correct');
            }
            if (!isCorrect && btn === btnElement) {
                btn.classList.add('wrong');
            }
            btn.disabled = true;
        });

        // Full-screen result feedback (outside card, always visible)
        if (!selectedOption) {
            resultFeedback.textContent = '❌ TIME UP';
            resultFeedback.className = 'result-feedback show wrong';
        } else if (isCorrect) {
            resultFeedback.textContent = '⭕';
            resultFeedback.className = 'result-feedback show correct';
        } else {
            resultFeedback.textContent = '❌';
            resultFeedback.className = 'result-feedback show wrong';
        }

        // Card border color feedback
        if (isCorrect) {
            card.style.borderLeft = '6px solid #2ECC71';
        } else {
            card.style.borderLeft = '6px solid #E74C3C';
        }

        // Show Next Button
        nextBtn.style.display = 'block';

        // Flip card after delay to show meaning
        flipTimeoutId = setTimeout(() => {
            // Hide feedback before flipping so answer is visible
            resultFeedback.classList.remove('show');
            setTimeout(() => {
                card.classList.add('flipped');
            }, 300);
        }, 1000);
    }

    function finishSession() {
        clearTimeout(timerInterval);
        if (flipTimeoutId) {
            clearTimeout(flipTimeoutId);
            flipTimeoutId = null;
        }
        resultFeedback.className = 'result-feedback';
        resultFeedback.textContent = '';

        const total = currentSessionWords.length;
        const wrongCount = wrongWords.length;
        const percentage = Math.round((correctCount / total) * 100);

        // Determine grade emoji and message
        let gradeEmoji, gradeMsg;
        if (percentage === 100) {
            gradeEmoji = '🎉';
            gradeMsg = 'パーフェクト！';
        } else if (percentage >= 80) {
            gradeEmoji = '👏';
            gradeMsg = '素晴らしい！';
        } else if (percentage >= 60) {
            gradeEmoji = '💪';
            gradeMsg = 'もう少し！';
        } else {
            gradeEmoji = '📖';
            gradeMsg = '復習しよう！';
        }

        // Build wrong words list HTML
        let wrongListHTML = '';
        if (wrongWords.length > 0) {
            wrongListHTML = `
                <div class="wrong-words-section">
                    <h3>間違えた単語</h3>
                    <ul class="wrong-words-list">
                        ${wrongWords.map(w => `<li><strong>${w.word}</strong> — ${w.meaning}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Hide quiz elements, show result
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
        card.style.display = 'none';

        // Use the main area to show results
        const resultHTML = `
            <div class="result-screen">
                <div class="result-emoji">${gradeEmoji}</div>
                <div class="result-grade">${gradeMsg}</div>
                <div class="result-score">
                    <span class="score-number">${correctCount}</span>
                    <span class="score-separator"> / </span>
                    <span class="score-total">${total}</span>
                </div>
                <div class="result-percentage">${percentage}%</div>
                <div class="submit-status" id="submit-status"></div>
                ${wrongListHTML}
                <div class="result-actions">
                    <button class="btn primary" id="retry-btn">もう一度</button>
                    <button class="btn secondary" id="back-btn">戻る</button>
                </div>
            </div>
        `;

        // Insert result into the main element
        const mainEl = quizScreen.querySelector('main');
        const resultContainer = document.createElement('div');
        resultContainer.id = 'result-container';
        resultContainer.innerHTML = resultHTML;
        mainEl.appendChild(resultContainer);

        // Send results to Google Sheets
        sendResults(percentage, total);

        // Event listeners for result buttons
        document.getElementById('retry-btn').addEventListener('click', () => {
            mainEl.removeChild(resultContainer);
            card.style.display = '';
            startSession();
        });
        document.getElementById('back-btn').addEventListener('click', () => {
            mainEl.removeChild(resultContainer);
            card.style.display = '';
            resetApp();
        });
    }

    // Send results to Google Sheets via GAS
    function sendResults(percentage, total) {
        const statusEl = document.getElementById('submit-status');
        if (!GAS_URL) {
            statusEl.textContent = '';
            return;
        }

        statusEl.textContent = '📤 結果を送信中...';
        statusEl.className = 'submit-status sending';

        const wrongWordsList = wrongWords.map(w => w.word).join(', ');

        const payload = {
            name: studentName,
            unitRange: sessionUnitRange,
            correctCount: correctCount,
            totalCount: total,
            percentage: percentage,
            wrongWords: wrongWordsList
        };

        fetch(GAS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        })
            .then(() => {
                statusEl.textContent = '✅ 結果を送信しました';
                statusEl.className = 'submit-status success';
            })
            .catch(() => {
                statusEl.textContent = '⚠️ 送信に失敗しました';
                statusEl.className = 'submit-status error';
            });
    }

    // Event Listeners
    card.addEventListener('click', () => {
        // Optional: Clicking card flips it even before answering? 
        // For 4-choice, maybe strictly after answering.
        if (isAnswered) {
            // Toggle flip if already answered
            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            } else {
                card.classList.add('flipped');
            }
        }
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        showCard();
    });

    startBtn.addEventListener('click', startSession);
    resetBtn.addEventListener('click', resetApp);

    // Initialize
    loadWords();
});

