// Quiz questions and answers
const questions = [
    {
      question: "What is the difference between let and var in JavaScript?",
      answers: {
        a. "let is block-scoped while var is function-scoped"
        b. "let is hoisted while var is not"
        c. "let is used for declaring constants while var is used for declaring variables"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the function of the 'this' keyword in JavaScript?",
      answers: {
        a. "It refers to the object that is calling the function"
        b. "It refers to the parent object of the function"
        c. "It refers to the global object"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      answers: {
        a. "== compares values only, while === compares both values and types"
        b. "== is used for comparing numbers, while === is used for comparing strings"
        c. "== is a new feature in ECMAScript 6, while === has always been available in JavaScript"
      },
      correctAnswer: "a"
    }
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timerId;
  
  // Start button
  const startButton = document.getElementById("start");
  startButton.addEventListener("click", startQuiz);
  
  // Start quiz function
  function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    timerId = setInterval(countdown, 1000);
    showQuestion();
  }
  
  // Timer function
  function countdown() {
    if (timeLeft === 0) {
      clearInterval(timerId);
      endQuiz();
    } else {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
    }
  }
  
  // Show question function
  function showQuestion() {
    if (currentQuestion === questions.length) {
      endQuiz();
      return;
    }
  
    const question = questions[currentQuestion];
    document.getElementById("question-title").textContent = question.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = "";
  
    for (const key in question.answers) {
      const answerButton = document.createElement("button");
      answerButton.textContent = question.answers[key];
      answerButton.classList.add("choice");
      answerButton.setAttribute("value", key);
      answerButton.addEventListener("click", selectAnswer);
      choices.appendChild(answerButton);
    }
  }
  
  // Select answer function
  function selectAnswer(event) {
    const selectedAnswer = event.target.value;
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
    }
    currentQuestion++;
    showQuestion();
  }
  
  // End quiz function
  function endQuiz() {
    clearInterval(timerId);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;
  }
  
  // Submit initials function
  const submitButton = document.getElementById
  