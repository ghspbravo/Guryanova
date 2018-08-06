window.onload = function () {

	document.querySelectorAll('.question').forEach(question => {
		let questionTitle = question.dataset.question
		let answer = question.dataset.answer

		question.onclick = () => showAnswer(questionTitle, answer)
	})

	document.querySelector('.model').style.height = `${document.querySelector('#banner').clientHeight}px`
	document.querySelector('.model').style.transform = `translateY(-${document.querySelector('#banner').clientHeight * 0.45}px)`
}

let showAnswer = (question, answer) => {
	let answerWrapper = document.querySelector('.faq-answer').children
	answerWrapper[1].innerHTML = question
	answerWrapper[2].innerHTML = answer
}
var scrollInterval = setInterval(scroll_in_div, 100);
var scroll_div = document.querySelector('#reviews');

let scrollDirection = 'bottom';
function scroll_in_div() {
	let currentScroll = scroll_div.scrollTop
	scroll_div.scrollHeight - currentScroll - scroll_div.clientHeight < 0.1 && scrollDirection === 'bottom'
	? scrollDirection = 'top'
	: scroll_div.scrollHeight - currentScroll >= scroll_div.scrollHeight && scrollDirection === 'top'
		? scrollDirection = 'bottom'
		: false

	switch (scrollDirection) {
		case 'bottom':
			scroll_div.scrollTo({
				top: currentScroll + 10,
				behavior: "smooth"
			});
			break;
		case 'top':
			scroll_div.scrollTo({
				top: currentScroll - 10,
				behavior: "smooth"
			});
			break;

		default:
			break;
	}
}

scroll_div.addEventListener("mouseover", function () {
	clearInterval(scrollInterval);
});

scroll_div.addEventListener("mouseout", function () {
	scrollInterval = setInterval(scroll_in_div, 100);
}); 
