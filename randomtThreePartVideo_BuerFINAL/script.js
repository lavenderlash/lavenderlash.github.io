// JavaScript Document

const videoPart1 = [
					{ src: "videos/clip01.mp4", caption: "Mocha is a very tired little girl. It's almost as if all she's been doing is sleeping..." },
					{ src: "videos/clip02.mp4", caption: "Mocha loves sleeping. Especially on her fluffy blanket." },
					{ src: "videos/clip03.mp4", caption: "Mr. Duck has made a new friend. Mocha is very fond of Mr. Duck." },
					{ src: "videos/clip04.mp4", caption: "Mocha seems to not have a care in the world. Despite being on the streets when she was a baby, she isn't scared of anything...Except the vacuum cleaner" }
				];

const videoPart2 = [
					{ src: "videos/clip05.mp4", caption: "Alistair Loves his blankie. The shelter said that he needed a nice warm blanket to keep him company at his new home. Who knew that Mocha would be all the company he needed." },
					{ src: "videos/clip06.mp4", caption: "Alistair's first toy was a small stuffed shark. Who knew that the small plushie would be his favorite thing? (Besides Mocha of course.) He sleeps with it every night." },
					{ src: "videos/clip07.mp4", caption: "Alistair is quite fond of his blanket (nests.) He requires one almost everyday in order to get a restful nap. Sometimes mocha will join him" },
					{ src: "videos/clip08.mp4", caption: "Alistair loves to flop over on the bed, almost like a fish. Perhaps thats why mocha and him love fishy food..." },
					{ src: "videos/clip09.mp4", caption: "What could Alistair be thinking about? Probably food, but perhaps his love for Mocha... No..probably food." }
				];


const videoPart3 = [
					{ src: "videos/clip10.mp4", caption: "Mocha and Alistair love to sit in the sun...Especially when they're together." },
					{ src: "videos/clip11.mp4", caption: "Even if Mocha and Alistair are normal sized cats, they barely fit in the midsized basket. Despite this, they are warm and comfortable together." },
					{ src: "videos/clip12.mp4", caption: "KITTY CLEANING BATTLE! WHO WILL WIN? THE RECORD HOLDING MOCHA, OR NEW COMPETITOR-ALISTAIR? STAY TUNED TO SEE WHO WINS!" },
					{ src: "videos/clip13.mp4", caption: "Alistair needs lots of help when it comes to his appearance. Luckily, Mocha is more than happy to help groom him, especially on his head." },
					{ src: "videos/clip14.mp4", caption: "Mocha and Alistair have been together for two years now. They became bonded and in love faster than anyone I've ever seen before. It's almost as if they were always meant to be together." }
				];


const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); 

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildvideo);



let playlist = []; // creates an empty array
let currentIndex = 0;

function buildvideo() {
	
	titleOverlay.classList.add("playing"); // NEW
	player.classList.add("fullscreen");

	
		playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3)
	];
	
	currentIndex = 0;
	playCurrent();
}
	
function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
	console.log("All three parts finished.");
	}
});



