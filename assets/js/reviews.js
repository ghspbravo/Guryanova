window.onload = function () {
	// var question_one = document.querySelector('#question_one');
	// var answer_one = document.querySelector('#answer_one');
	// var question_two = document.querySelector('#question_two');
	// var answer_two = document.querySelector('#answer_two');
	// var question_three = document.querySelector('#question_three');
	// var answer_three = document.querySelector('#answer_three');
	// var select_question = answer_one;
	// question_one.onclick = function () {
	// 	select_question.className = ('faq-answer answer');//поменяли класс
	// 	answer_one.className = ('faq-answer answer showing');//поменяли класс
	// 	select_question = answer_one;
	// }
	// question_two.onclick = function () {
	// 	select_question.className = ('faq-answer answer');//поменяли класс
	// 	answer_two.className = ('faq-answer answer showing');//поменяли класс
	// 	select_question = answer_two;
	// }
	// question_three.onclick = function () {
	// 	select_question.className = ('faq-answer answer');//поменяли класс
	// 	answer_three.className = ('faq-answer answer showing');//поменяли класс
	// 	select_question = answer_three;
	// }
	document.querySelectorAll('.question').forEach(question => {
		let questionTitle = question.dataset.question
		let answer = question.dataset.answer

		question.onclick = () => showAnswer(questionTitle, answer)
	})
}

let showAnswer = (question, answer) => {
	let answerWrapper = document.querySelector('.faq-answer').children
	answerWrapper[1].innerHTML = question
	answerWrapper[2].innerHTML = answer
}