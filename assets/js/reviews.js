window.onload = function ()
{
	var question_one = document.querySelector('#question_one');
	var answer_one = document.querySelector('#answer_one');
	var question_two = document.querySelector('#question_two');
	var answer_two = document.querySelector('#answer_two');
	var question_three = document.querySelector('#question_three');
	var answer_three = document.querySelector('#answer_three');
	var select_question = answer_one;
	question_one.onclick = function ()
	{
		select_question.className = ('faq-answer answer');//поменяли класс
		answer_one.className = ('faq-answer answer showing');//поменяли класс
		select_question = answer_one;
	}
	question_two.onclick = function ()
	{
		select_question.className = ('faq-answer answer');//поменяли класс
		answer_two.className = ('faq-answer answer showing');//поменяли класс
		select_question = answer_two;
	}
	question_three.onclick = function ()
	{
		select_question.className = ('faq-answer answer');//поменяли класс
		answer_three.className = ('faq-answer answer showing');//поменяли класс
		select_question = answer_three;
	}
}