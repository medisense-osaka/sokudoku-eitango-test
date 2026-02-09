document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const card = document.getElementById('card');
    const wordDisplay = document.getElementById('word-display');
    const phoneticDisplay = document.getElementById('phonetic-display');
    const meaningDisplay = document.getElementById('meaning-display');
    const exampleDisplay = document.getElementById('example-display');
    const exampleTranslationDisplay = document.getElementById('example-translation-display');

    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');

    const resetBtn = document.getElementById('reset-btn');
    const unitSelect = document.getElementById('unit-select');

    const progressBar = document.getElementById('progress-bar');
    const currentCountDisplay = document.getElementById('current-count');
    const totalCountDisplay = document.getElementById('total-count');

    // State
    let allWords = [];
    let currentSessionWords = [];
    let currentIndex = 0;
    let isAnswered = false;

    const feedbackCorrect = document.getElementById('feedback-correct');
    const feedbackWrong = document.getElementById('feedback-wrong');

    // Load Data
    function loadWords() {
        if (typeof vocabularyData !== 'undefined') {
            allWords = vocabularyData;
            populateUnitSelect();
            startSession();
        } else {
            wordDisplay.textContent = "Error: Data not found.";
        }
    }

    function populateUnitSelect() {
        // Ensure unit is treated as a number
        const units = [...new Set(allWords.map(w => parseInt(w.unit)))].sort((a, b) => a - b);
        unitSelect.innerHTML = '<option value="all">全ユニット</option>';
        units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = `Unit ${unit}`;
            unitSelect.appendChild(option);
        });
    }

    function startSession() {
        const selectedUnit = unitSelect.value;
        if (selectedUnit === 'all') {
            currentSessionWords = [...allWords];
        } else {
            currentSessionWords = allWords.filter(w => w.unit == selectedUnit);
        }

        // Simple Shuffle
        currentSessionWords.sort(() => Math.random() - 0.5);

        currentIndex = 0;
        updateStats();
        showCard();
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

        // Reset Card State
        isAnswered = false;
        card.classList.remove('flipped');
        feedbackCorrect.classList.remove('show');
        feedbackWrong.classList.remove('show');
        nextBtn.style.display = 'none';

        // Update Content
        wordDisplay.textContent = wordData.word;
        phoneticDisplay.textContent = wordData.phonetic ? `[${wordData.phonetic}]` : '';
        meaningDisplay.textContent = wordData.meaning;
        exampleDisplay.textContent = wordData.example || '';
        exampleTranslationDisplay.textContent = wordData.example_translation || '';

        generateOptions(wordData);
        updateStats();
    }

    function generateOptions(correctWord) {
        optionsContainer.innerHTML = '';

        // Pick 3 distractors
        const otherWords = allWords.filter(w => w.id !== correctWord.id);
        const shuffledOthers = otherWords.sort(() => Math.random() - 0.5);
        const distractors = shuffledOthers.slice(0, 3);

        const options = [...distractors, correctWord];
        options.sort(() => Math.random() - 0.5);

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.textContent = option.meaning;
            btn.onclick = () => checkAnswer(option, correctWord, btn);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selectedOption, correctWord, btnElement) {
        if (isAnswered) return;
        isAnswered = true;

        const isCorrect = selectedOption.id === correctWord.id;

        if (isCorrect) {
            btnElement.classList.add('correct');
            feedbackCorrect.classList.add('show');
        } else {
            btnElement.classList.add('wrong');
            feedbackWrong.classList.add('show');
            // Highlight the correct one
            const buttons = optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(b => {
                if (b.textContent === correctWord.meaning) {
                    b.classList.add('correct');
                }
            });
        }

        // Delay flip to show feedback first
        setTimeout(() => {
            card.classList.add('flipped');
        }, 800);

        // Show Next Button
        nextBtn.style.display = 'inline-block';

        // Disable all buttons
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);
    }

    function finishSession() {
        card.innerHTML = `
            <div class="card-front">
                <h2>Complete!</h2>
                <p>すべての単語を学習しました。</p>
            </div>
        `;
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
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


    unitSelect.addEventListener('change', startSession);
    resetBtn.addEventListener('click', startSession);

    // Initialize
    loadWords();
});
