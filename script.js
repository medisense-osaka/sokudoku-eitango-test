document.addEventListener('DOMContentLoaded', () => {
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
    const TIME_LIMIT = 5000; // 5 seconds

    const feedbackCorrect = document.getElementById('feedback-correct');
    const feedbackWrong = document.getElementById('feedback-wrong');

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
        const start = parseInt(startUnitSelect.value);
        const end = parseInt(endUnitSelect.value);

        if (start > end) {
            alert("開始ユニットは終了ユニットより前である必要があります。");
            return;
        }

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

        // Update Title
        if (start === end) {
            currentUnitDisplay.textContent = start;
        } else {
            currentUnitDisplay.textContent = `${start} - ${end}`;
        }

        // Simple Shuffle
        currentSessionWords.sort(() => Math.random() - 0.5);

        currentIndex = 0;
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

        // Remove previous feedback
        if (card.querySelector('.feedback-overlay')) {
            card.querySelector('.feedback-overlay').remove();
        }

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

        // Visual Feedback for Options
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            if (btn.textContent === currentWord.meaning) {
                btn.classList.add('correct'); // Always highlight correct answer
            }
            if (!isCorrect && btn === btnElement) {
                btn.classList.add('wrong'); // Highlight selected wrong answer
            }
            btn.disabled = true; // Disable all buttons after answer
        });

        // Card Overlay Feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `feedback-overlay ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackDiv.innerText = isCorrect ? '⭕' : '❌';
        if (!selectedOption) feedbackDiv.innerText = 'TIME UP'; // Special text for timeout
        card.appendChild(feedbackDiv);

        // Show Next Button
        nextBtn.style.display = 'block';

        // Flip card after short delay to show details
        setTimeout(() => {
            card.classList.add('flipped');
        }, 800);
    }

    function finishSession() {
        card.innerHTML = `
            <div class="card-front">
                <h2>Complete!</h2>
                <p>範囲学習が完了しました！</p>
                <p>正解数などはまだ記録していませんが、お疲れ様でした。</p>
            </div>
        `;
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
        // Reset button in footer will allow going back
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

