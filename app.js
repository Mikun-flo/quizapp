const FALLBACK_QUIZ_DATA = {
 "quizzes": [
    {
      "title": "History",
      "icon": "history",
      "color": "var(--color-history)",
      "questions": [
        {
          "question": "Who was the first Emperor of Rome?",
          "options": [
            "Julius Caesar",
            "Augustus",
            "Nero",
            "Marcus Aurelius"
          ],
          "answer": "Augustus"
        },
        {
          "question": "In which year did the Titanic sink?",
          "options": [
            "1905",
            "1912",
            "1918",
            "1920"
          ],
          "answer": "1912"
        },
        {
          "question": "What was the name of the ancient trade route that connected the East and West?",
          "options": [
            "The Spice Route",
            "The Amber Road",
            "The Silk Road",
            "The Incense Route"
          ],
          "answer": "The Silk Road"
        },
        {
          "question": "Which country was ruled by the Pharaonic Dynasties?",
          "options": [
            "Greece",
            "Persia",
            "Egypt",
            "Rome"
          ],
          "answer": "Egypt"
        },
        {
          "question": "Who was the main author of the Declaration of Independence of the United States?",
          "options": [
            "Thomas Jefferson",
            "George Washington",
            "Benjamin Franklin",
            "John Adams"
          ],
          "answer": "Thomas Jefferson"
        },
      ]
    },
    {
      "title": "Science & Nature",
      "icon": "science",
      "color": "var(--color-science)",
      "questions": [
        {
          "question": "What is the powerhouse of the cell?",
          "options": [
            "Nucleus",
            "Ribosome",
            "Mitochondria",
            "Golgi apparatus"
          ],
          "answer": "Mitochondria"
        },
        {
          "question": "Which planet is closest to the Sun?",
          "options": [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
          ],
          "answer": "Mercury"
        },
        {
          "question": "What is the chemical symbol for gold?",
          "options": [
            "Ag",
            "Au",
            "Fe",
            "Gd"
          ],
          "answer": "Au"
        },
        {
          "question": "Which gas is most abundant in Earth's atmosphere?",
          "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Argon",
            "Nitrogen"
          ],
          "answer": "Nitrogen"
        },
        {
          "question": "What is the hardest natural substance on Earth?",
          "options": [
            "Corundum",
            "Quartz",
            "Diamond",
            "Talc"
          ],
          "answer": "Diamond"
        },
      ]
    },
    {
      "title": "Geography",
      "icon": "geography",
      "color": "var(--color-geography)",
      "questions": [
        {
          "question": "Which mountain range separates Europe and Asia?",
          "options": [
            "Alps",
            "Himalayas",
            "Ural Mountains",
            "Rocky Mountains"
          ],
          "answer": "Ural Mountains"
        },
        {
          "question": "What is the smallest country in the world by land area?",
          "options": [
            "Monaco",
            "Vatican City",
            "San Marino",
            "Liechtenstein"
          ],
          "answer": "Vatican City"
        },
        {
          "question": "Which desert is the largest hot desert in the world?",
          "options": [
            "Gobi",
            "Sahara",
            "Arabian",
            "Kalahari"
          ],
          "answer": "Sahara"
        },
        {
          "question": "In which country would you find the ancient monument Stonehenge?",
          "options": [
            "France",
            "Germany",
            "United Kingdom",
            "Ireland"
          ],
          "answer": "United Kingdom"
        },
        {
          "question": "Which canal connects the Mediterranean Sea to the Red Sea?",
          "options": [
            "Panama Canal",
            "Suez Canal",
            "Kiel Canal",
            "Erie Canal"
          ],
          "answer": "Suez Canal"
        },
        
      ]
    },
    {
      "title": "Literature & Arts",
      "icon": "literature",
      "color": "var(--color-literature)",
      "questions": [
        {
          "question": "Who wrote the play \"Romeo and Juliet\"?",
          "options": [
            "Christopher Marlowe",
            "William Shakespeare",
            "Ben Jonson",
            "John Webster"
          ],
          "answer": "William Shakespeare"
        },
        {
          "question": "Which artist painted the famous \"Mona Lisa\"?",
          "options": [
            "Michelangelo",
            "Raphael",
            "Leonardo da Vinci",
            "Vincent van Gogh"
          ],
          "answer": "Leonardo da Vinci"
        },
        {
          "question": "What is the title of the first novel in the Harry Potter series?",
          "options": [
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Philosopher's Stone",
            "Harry Potter and the Goblet of Fire"
          ],
          "answer": "Harry Potter and the Philosopher's Stone"
        },
        {
          "question": "What is the street name where Sherlock Holmes lives in London?",
          "options": [
            "Abbey Road",
            "Fleet Street",
            "Baker Street",
            "Downing Street"
          ],
          "answer": "Baker Street"
        },
        {
          "question": "Who is the author of \"Pride and Prejudice\"?",
          "options": [
            "Charlotte Brontë",
            "Jane Austen",
            "Emily Brontë",
            "Mary Shelley"
          ],
          "answer": "Jane Austen"
        },
      ]
    }
  ]
}


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
  </svg>`
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
    this.viewContainer = document.getElementById('view-container');
    this.activeSubjectHeader = document.getElementById('active-subject-header');
    this.themeToggle = document.getElementById('theme-toggle');
    // Init Theme and load data
    this.initTheme();
    this.loadQuizData();
  }
}

 /* Theme Switcher Logic */
  initTheme() {
    // 1. Check local storage or match user media queries
    const savedTheme = localStorage.getItem('quiz-app-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    this.themeToggle.checked = (initialTheme === 'dark');
    // 2. Event listener for change
    this.themeToggle.addEventListener('change', (e) => {
      const targetTheme = e.target.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('quiz-app-theme', targetTheme);
    });
   }
 /* Load questions database from questions.js file or fallback */
  async loadQuizData() {
    try {
      const response = await fetch('questions.json');
      if (!response.ok) {
        throw new Error('JSON load failed');
      }
      const data = await response.json();
      this.quizzes = data.quizzes;
    } catch (error) {
      console.warn('Could not load questions.json from server. Falling back to local script variable. Error:', error);
      this.quizzes = FALLBACK_QUIZ_DATA.quizzes;
    } finally {
      this.renderHomeView();
    }
}

