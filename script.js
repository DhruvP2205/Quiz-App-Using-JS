const quizDB = [
	{
		question: "Q1: What is full form of HTML?",
		a: "Hello To My Land",
		b: "Hey Text Markup Language",
		c: "Hypertext Makeup Language",
		d: "Hypertext Markup Language",
		ans: "ans4",
	},
	{
		question: "Q2: The <h1> element in the HTML defines",
		a: "Headings",
		b: "Hyperlink",
		c: "HyperText",
		d: "Html-text",
		ans: "ans1",
	},
	{
		question: "Q3: A block level element of the HTML always starts on a",
		a: "New window",
		b: "New Tab",
		c: "New page",
		d: "New Line",
		ans: "ans4",
	},
	{
		question: "Q4: For displaying a webpage within a webpage, HTML uses",
		a: "Classes",
		b: "Iframes",
		c: "Span Element",
		d: "Div element",
		ans: "ans2"
	},
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;

let score = 0;

const loadQuestion = () =>
{
	const questionList = quizDB[questionCount];
	
	question.innerText = questionList.question;
	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;
}


loadQuestion();

const deselectAll = () =>
{
	answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


const getCheckAnswer = () =>
{
	let answer;
	answers.forEach((curAnsElem) => {
		if(curAnsElem.checked)
		{
			answer = curAnsElem.id;
		}
	});
	return answer;
};


submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();

	if (checkedAnswer === quizDB[questionCount].ans)
	{
		score++;
	}

	questionCount++;

	deselectAll();

	if(questionCount < quizDB.length)
	{
		loadQuestion();
	}
	else
	{
		showScore.innerHTML = `<h3>Your scored ${score}/${quizDB.length}</h3>
		<button class="btn" onclick="location.reload()">Play Again</button>`;
		showScore.classList.remove('scoreArea');
	}
});