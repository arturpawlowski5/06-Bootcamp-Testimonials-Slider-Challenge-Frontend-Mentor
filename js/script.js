const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");

let comment = document.getElementById("comment");
let person = document.getElementById("person");
let photo = document.getElementById("photo");

let index = 0;

const reviews = [
	{
		personName: "Tanya Sinclair",
		profession: "UX Engineer",
		comment: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
		imageSource: "../images/image-tanya.jpg",
	},
	{
		personName: "John Tarkpor",
		profession: "Junior Front-End Developer",
		comment: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
		imageSource: "../images/image-john.jpg",
	},
];

buttonNext.addEventListener("click", () => {
	index++;
	if (index > reviews.length - 1) {
		index = 0;
	}
	changePerson();
});

buttonPrevious.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = reviews.length - 1;
	}
	changePerson();
});

const changePerson = () => {
	const review = reviews[index];
	photo.setAttribute("src", review.imageSource);
	comment.innerText = review.comment;
	person.innerHTML = `${review.personName} <span>${review.profession}</span>`;

	let fade = document.getElementById("photo");
	let opacity = 0;

	let intervalID = setInterval(function () {
		if (opacity < 1) {
			opacity = opacity + 0.2;
			fade.style.opacity = opacity;
		} else {
			clearInterval(intervalID);
		}
	}, 50);
};
