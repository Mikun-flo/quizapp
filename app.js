const FALLBACK_QUIZ_DATA = {
  quizzes: [
    {
      title: "History",
      icon: "history",
      color: "var(--color-history)",
      questions: [
        {
          question: "Who was the first Emperor of Rome?",
          options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
          answer: "Augustus",
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1905", "1912", "1918", "1920"],
          answer: "1912",
        },
        {
          question: "Who was the first woman to win a Nobel Prize?",
          options: [
            "Marie Curie",
            "Rosalind Franklin",
            "Ada Lovelace",
            "Dorothy Hodgkin",
          ],
          answer: "Marie Curie",
        },
        {
          question:
            "What was the name of the ancient trade route that connected the East and West?",
          options: [
            "The Spice Route",
            "The Amber Road",
            "The Silk Road",
            "The Incense Route",
          ],
          answer: "The Silk Road",
        },
        {
          question: "Which empire was ruled by Montezuma II?",
          options: [
            "Inca Empire",
            "Aztec Empire",
            "Maya Empire",
            "Olmec Empire",
          ],
          answer: "Aztec Empire",
        },
        {
          question: "The Magna Carta was signed by King John in which year?",
          options: ["1066", "1215", "1348", "1492"],
          answer: "1215",
        },
        {
          question: "Which country was ruled by the Pharaonic Dynasties?",
          options: ["Greece", "Persia", "Egypt", "Rome"],
          answer: "Egypt",
        },
        {
          question:
            "Who was the main author of the Declaration of Independence of the United States?",
          options: [
            "Thomas Jefferson",
            "George Washington",
            "Benjamin Franklin",
            "John Adams",
          ],
          answer: "Thomas Jefferson",
        },
        {
          question:
            "What event in 1989 symbolised the collapse of communism in Eastern Europe?",
          options: [
            "The Chernobyl disaster",
            "The fall of the Berlin Wall",
            "The Velvet Revolution",
            "The signing of the INF Treaty",
          ],
          answer: "The fall of the Berlin Wall",
        },
        {
          question:
            "Which ancient civilization built the city of Machu Picchu?",
          options: ["Aztec", "Maya", "Zapotec", "Inca"],
          answer: "Inca",
        },
      ],
    },
    {
      title: "Science & Nature",
      icon: "science",
      color: "var(--color-science)",
      questions: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
          answer: "Mitochondria",
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Mercury", "Earth", "Mars"],
          answer: "Mercury",
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Ag", "Au", "Fe", "Gd"],
          answer: "Au",
        },
        {
          question: "Which gas is most abundant in Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"],
          answer: "Nitrogen",
        },
        {
          question:
            "What is the main structural component of plant cell walls?",
          options: ["Cellulose", "Starch", "Chitin", "Glycogen"],
          answer: "Cellulose",
        },
        {
          question:
            "How long does it take for light from the Sun to reach Earth?",
          options: [
            "About 8 seconds",
            "About 8 minutes",
            "About 8 hours",
            "About 1 minute",
          ],
          answer: "About 8 minutes",
        },
        {
          question: "What is the only mammal capable of true flight?",
          options: ["Bat", "Flying Squirrel", "Sugar Glider", "Flying Lemur"],
          answer: "Bat",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Corundum", "Quartz", "Diamond", "Talc"],
          answer: "Diamond",
        },
        {
          question:
            "Which organ in the human body is responsible for pumping blood?",
          options: ["Brain", "Lungs", "Liver", "Heart"],
          answer: "Heart",
        },
        {
          question: "What is the study of mushrooms and fungi called?",
          options: ["Botany", "Mycology", "Zoology", "Phycology"],
          answer: "Mycology",
        },
      ],
    },
    {
      title: "Geography",
      icon: "geography",
      color: "var(--color-geography)",
      questions: [
        {
          question: "Which is the largest ocean on Earth?",
          options: [
            "Atlantic Ocean",
            "Pacific Ocean",
            "Indian Ocean",
            "Arctic Ocean",
          ],
          answer: "Pacific Ocean",
        },
        {
          question: "What is the capital city of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          answer: "Canberra",
        },
        {
          question: "Which river is the longest in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "Nile",
        },
        {
          question: "Which mountain range separates Europe and Asia?",
          options: ["Alps", "Himalayas", "Ural Mountains", "Rocky Mountains"],
          answer: "Ural Mountains",
        },
        {
          question: "What is the smallest country in the world by land area?",
          options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
          answer: "Vatican City",
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi", "Sahara", "Arabian", "Kalahari"],
          answer: "Sahara",
        },
        {
          question:
            "In which country would you find the ancient monument Stonehenge?",
          options: ["France", "Germany", "United Kingdom", "Ireland"],
          answer: "United Kingdom",
        },
        {
          question: "What is the capital city of Japan?",
          options: ["Kyoto", "Osaka", "Tokyo", "Sapporo"],
          answer: "Tokyo",
        },
        {
          question:
            "Which canal connects the Mediterranean Sea to the Red Sea?",
          options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"],
          answer: "Suez Canal",
        },
        {
          question: "Which South American country has the largest land area?",
          options: ["Argentina", "Peru", "Colombia", "Brazil"],
          answer: "Brazil",
        },
      ],
    },
    {
      title: "Literature & Arts",
      icon: "literature",
      color: "var(--color-literature)",
      questions: [
        {
          question: 'Who wrote the play "Romeo and Juliet"?',
          options: [
            "Christopher Marlowe",
            "William Shakespeare",
            "Ben Jonson",
            "John Webster",
          ],
          answer: "William Shakespeare",
        },
        {
          question: 'Which artist painted the famous "Mona Lisa"?',
          options: [
            "Michelangelo",
            "Raphael",
            "Leonardo da Vinci",
            "Vincent van Gogh",
          ],
          answer: "Leonardo da Vinci",
        },
        {
          question:
            "What is the title of the first novel in the Harry Potter series?",
          options: [
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Philosopher's Stone",
            "Harry Potter and the Goblet of Fire",
          ],
          answer: "Harry Potter and the Philosopher's Stone",
        },
        {
          question: 'Who wrote the dystopian novel "1984"?',
          options: [
            "George Orwell",
            "Aldous Huxley",
            "Ray Bradbury",
            "H.G. Wells",
          ],
          answer: "George Orwell",
        },
        {
          question: "Which artist cut off his own left ear?",
          options: [
            "Pablo Picasso",
            "Claude Monet",
            "Vincent van Gogh",
            "Salvador Dalí",
          ],
          answer: "Vincent van Gogh",
        },
        {
          question:
            "What is the street name where Sherlock Holmes lives in London?",
          options: [
            "Abbey Road",
            "Fleet Street",
            "Baker Street",
            "Downing Street",
          ],
          answer: "Baker Street",
        },
        {
          question: 'Who is the author of "Pride and Prejudice"?',
          options: [
            "Charlotte Brontë",
            "Jane Austen",
            "Emily Brontë",
            "Mary Shelley",
          ],
          answer: "Jane Austen",
        },
        {
          question:
            "Which musical period does Johann Sebastian Bach belong to?",
          options: ["Classical", "Romantic", "Renaissance", "Baroque"],
          answer: "Baroque",
        },
        {
          question: "What style of art is Salvador Dalí famous for?",
          options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
          answer: "Surrealism",
        },
        {
          question:
            "Which epic poem is attributed to the ancient Greek poet Homer?",
          options: [
            "The Aeneid",
            "The Epic of Gilgamesh",
            "Paradise Lost",
            "The Odyssey",
          ],
          answer: "The Odyssey",
        },
      ],
    },
  ],
};
// SVG markup library for inline render
const SVGIcons = {
  history: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>`,
  science: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2v7.31L4.75 19.37A2 2 0 0 0 6.5 22h11a2 2 0 0 0 1.75-2.63L14 9.31V2z"></path>
    <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
    <line x1="8" y1="14" x2="16" y2="14"></line>
  </svg>`,
  geography: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>`,
  literature: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <circle cx="7.5" cy="8.5" r="1.5"></circle>
    <circle cx="11.5" cy="5.5" r="1.5"></circle>
    <circle cx="16.5" cy="7.5" r="1.5"></circle>
    <circle cx="15.5" cy="12.5" r="1.5"></circle>
    <circle cx="12" cy="16.5" r="1.5"></circle>
  </svg>`,
  correct: `<svg class="status-icon status-icon-correct" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" fill="var(--color-green-light)"></circle>
    <polyline points="9 11 12 14 17 9"></polyline>
  </svg>`,
  incorrect: `<svg class="status-icon status-icon-incorrect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" fill="var(--color-red-light)"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>`,
  error: `<svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>`,
};
/* APPLICATION STATE MANAGER */
class QuizApp {
  constructor() {
    this.quizzes = [];
    this.currentSubject = null;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.isAnswerSubmitted = false;
    this.score = 0;

    // Elements DOM cache
    this.viewContainer = document.getElementById("view-container");
    this.activeSubjectHeader = document.getElementById("active-subject-header");
    this.themeToggle = document.getElementById("theme-toggle");
    // Init Theme and load data
    this.initTheme();
    this.loadQuizData();
  }
  /* Theme Switcher */
  initTheme() {
    // 1. Check local storage or match user media queries
    const savedTheme = localStorage.getItem("quiz-app-theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initialTheme);
    this.themeToggle.checked = initialTheme === "dark";
    // 2. Event listener for change
    this.themeToggle.addEventListener("change", (e) => {
      const targetTheme = e.target.checked ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("quiz-app-theme", targetTheme);
    });
  }
  /* Load questions database from questions.json or fallback */
  async loadQuizData() {
    try {
      const response = await fetch("questions.json");
      if (!response.ok) {
        throw new Error("JSON load failed");
      }
      const data = await response.json();
      this.quizzes = data.quizzes;
    } catch (error) {
      console.warn(
        "Could not load questions.json from server. Falling back to local script variable. Error:",
        error,
      );
      this.quizzes = FALLBACK_QUIZ_DATA.quizzes;
    } finally {
      this.renderHomeView();
    }
  }
  /* VIEWS RENDERING METHODS */

  /* Reset header category indicator */
  updateHeaderSubjectBadge() {
    if (!this.currentSubject) {
      this.activeSubjectHeader.innerHTML = "";
      return;
    }

    this.activeSubjectHeader.innerHTML = `
      <div class="icon-badge ${this.currentSubject.icon}">
        ${SVGIcons[this.currentSubject.icon]}
      </div>
      <span>${this.currentSubject.title}</span>
    `;
  }
  /* Home page (Subject Selection) */
  renderHomeView() {
    this.currentSubject = null;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.isAnswerSubmitted = false;
    this.score = 0;
    this.updateHeaderSubjectBadge();
    const subjectButtonsHTML = this.quizzes
      .map((quiz, index) => {
        return `
        <button class="card-item subject-btn" data-index="${index}" type="button">
          <div class="icon-badge ${quiz.icon}">
            ${SVGIcons[quiz.icon]}
          </div>
          <span>${quiz.title}</span>
        </button>
      `;
      })
      .join("");
    this.viewContainer.innerHTML = `
      <div class="grid-layout">
        <div class="intro-column">
          <h1 class="intro-title">Welcome to the <br><span>Frontend Quiz by Mikun!</span></h1>
          <p class="intro-subtitle">Pick a subject to get started.</p>
        </div>
        <div class="list-column" role="group" aria-label="Quiz subjects selection">
          ${subjectButtonsHTML}
        </div>
      </div>
    `;
    // Attach click events to subject selectors
    this.viewContainer.querySelectorAll(".subject-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const quizIdx = parseInt(e.currentTarget.getAttribute("data-index"));
        this.startQuiz(this.quizzes[quizIdx]);
      });
    });
  }
  /* Start Quiz action */
  startQuiz(subject) {
    this.currentSubject = subject;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.isAnswerSubmitted = false;
    this.updateHeaderSubjectBadge();
    this.renderQuestionView();
  }
  /* Render view: Active Question Screen */
  renderQuestionView() {
    const questions = this.currentSubject.questions;
    const currentQuestion = questions[this.currentQuestionIndex];
    const totalQuestions = questions.length;
    // A, B, C, D label mapper
    const optionLabels = ["A", "B", "C", "D"];
    // Generate option list buttons
    const optionsHTML = currentQuestion.options
      .map((option, idx) => {
        const escapedOption = this.escapeHtml(option);
        return `
        <button class="card-item option-card" role="radio" aria-checked="false" data-option="${escapedOption}" type="button">
          <span class="option-letter">${optionLabels[idx]}</span>
          <span class="option-text">${escapedOption}</span>
          ${SVGIcons.correct}
          ${SVGIcons.incorrect}
        </button>
      `;
      })
      .join("");
    // Progress percentage calculation
    const progressPercent =
      ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
    this.viewContainer.innerHTML = `
      <div class="grid-layout">
        <div class="question-progress-container">
          <div>
            <div class="question-counter">Question ${this.currentQuestionIndex + 1} of ${totalQuestions}</div>
            <h2 class="question-text">${this.escapeHtml(currentQuestion.question)}</h2>
          </div>
          <div class="progress-bar-container" aria-label="Progress bar">
            <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>
        <div class="list-column">
          <div class="options-radio-group" role="radiogroup" aria-label="Multiple choice options">
            ${optionsHTML}
          </div>
          
          <button class="btn-primary" id="action-btn" type="button">Submit answer</button>
          
          <div class="error-message-container" id="error-msg" aria-live="assertive">
            ${SVGIcons.error}
            <span>Please select an answer</span>
          </div>
        </div>
      </div>
    `;
    // Element binding inside view
    const optionCards = this.viewContainer.querySelectorAll(".option-card");
    const actionBtn = document.getElementById("action-btn");
    const errorMsg = document.getElementById("error-msg");
    // Attach click events on options
    optionCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (this.isAnswerSubmitted) return;
        // Reset previous option selection
        optionCards.forEach((c) => {
          c.classList.remove("selected");
          c.setAttribute("aria-checked", "false");
        });
        // Set active selection
        const targetCard = e.currentTarget;
        targetCard.classList.add("selected");
        targetCard.setAttribute("aria-checked", "true");
        this.selectedAnswer = targetCard.getAttribute("data-option");
        // Hide warning error on new choice
        errorMsg.classList.remove("visible");
      });
    });
    // Action button submit event
    actionBtn.addEventListener("click", () => {
      this.handleActionClick(actionBtn, errorMsg, optionCards, currentQuestion);
    });
    // Setup Keyboard Navigation helpers for radiogroup accessibility
    this.setupKeyboardNavigation(optionCards);
  }
  /* Keyboard accessibility for option selection  */
  setupKeyboardNavigation(optionCards) {
    optionCards.forEach((card, idx) => {
      card.addEventListener("keydown", (e) => {
        if (this.isAnswerSubmitted) return;

        let targetIdx = -1;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          targetIdx = (idx + 1) % optionCards.length;
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          targetIdx = (idx - 1 + optionCards.length) % optionCards.length;
        }
        if (targetIdx !== -1) {
          optionCards[targetIdx].focus();
          optionCards[targetIdx].click();
        }
      });
    });
  }
  /* Submit / Next button action */
  handleActionClick(actionBtn, errorMsg, optionCards, currentQuestion) {
    if (!this.isAnswerSubmitted) {
      // 1. Submit Mode validation check
      if (!this.selectedAnswer) {
        errorMsg.classList.add("visible");
        return;
      }
      this.isAnswerSubmitted = true;
      const isCorrect = this.selectedAnswer === currentQuestion.answer;
      if (isCorrect) {
        this.score++;
      }
      // 2. Color code cards and append visual states
      optionCards.forEach((card) => {
        card.classList.add("disabled");
        const cardOptionVal = card.getAttribute("data-option");
        if (cardOptionVal === currentQuestion.answer) {
          // Highlight correct answer card
          card.classList.add("correct");
        } else if (cardOptionVal === this.selectedAnswer) {
          // Highlight selected option if incorrect
          card.classList.add("incorrect");
        }
      });
      // Change button state to trigger 
      actionBtn.textContent = "Next question";
      actionBtn.focus();
    } else {
      // 3. Move on to the next question state
      this.currentQuestionIndex++;
      const totalQuestions = this.currentSubject.questions.length;
      if (this.currentQuestionIndex < totalQuestions) {
        this.selectedAnswer = null;
        this.isAnswerSubmitted = false;
        this.renderQuestionView();
      } else {
        this.renderResultsView();
      }
    }
  }
  /* Render view: Final results score screen */
  renderResultsView() {
    this.updateHeaderSubjectBadge();
    const totalQuestions = this.currentSubject.questions.length;
    this.viewContainer.innerHTML = `
      <div class="grid-layout">
        <div class="intro-column">
          <h1 class="intro-title">Quiz completed <br><span>You scored...</span></h1>
        </div>
        <div class="list-column">
          <div class="results-card">
            <div class="results-subject-header">
              <div class="icon-badge ${this.currentSubject.icon}">
                ${SVGIcons[this.currentSubject.icon]}
              </div>
              <span>${this.currentSubject.title}</span>
            </div>
            <div>
              <div class="results-score-big">${this.score}</div>
              <div class="results-score-label">out of ${totalQuestions}</div>
            </div>
          </div>
          
          <button class="btn-primary" id="play-again-btn" type="button">Play Again</button>
        </div>
      </div>
    `;
    // Play again event handler
    const playAgainBtn = document.getElementById("play-again-btn");
    playAgainBtn.addEventListener("click", () => {
      this.renderHomeView();
    });
    playAgainBtn.focus();
  }
  /* Utility method to safely escape html values */
  escapeHtml(string) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return String(string).replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }
}
// Start application after page content is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.quizApp = new QuizApp();
});
