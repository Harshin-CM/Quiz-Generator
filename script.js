const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Makeup Language", "Home Tool Markup Language", "HyperText Markup Language", "Hyperlinking & Text Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which of the following is a backend framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "Which tag is used to define a table row in HTML?",
    options: ["<td>", "<tr>", "<th>", "<table>"],
    answer: "<tr>"
  },
  {
    question: "Which of these is used to add spacing between elements in CSS?",
    options: ["padding", "border", "font-size", "float"],
    answer: "padding"
  },
  {
    question: "Which of the following is a correct syntax to comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "Both B and C"],
    answer: "Both B and C"
  },
  {
    question: "Which attribute is used to link an external CSS file?",
    options: ["src", "href", "link", "style"],
    answer: "href"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "IBM"],
    answer: "Netscape"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["int x = 10;", "let x = 10;", "x := 10", "var: x = 10"],
    answer: "let x = 10;"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

loadQuestion();
