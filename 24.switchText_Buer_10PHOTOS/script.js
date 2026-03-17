// Select the image by its ID
const mainImage = document.getElementById('mainImage');
// Array of slides (3 images)
const slides = [
	{ src: 'images/SIMONECHAN.jpg', 
	 alt: 'Cuddling Buddies',
	 caption: "Cuddling Buddies"
	},
	{ src: 'images/image02.jpg', 
	 alt: 'bonded partners', 
	 caption: "Bonded Partners"
	},
	{ src: 'images/image03.jpg', 
	 alt: 'eternally tired soul',
	 caption: "Eternally tired soul"
	},
	{ src: 'images/image04.jpg', 
	 alt: 'Closeup Confusion',
	 caption: "Closeup Confusion"
	},
	{ src: 'images/image05.jpg', 
	 alt: 'Sweet dreams',
	 caption: "Sweet Dreams"
	},	
	{ src: 'images/image06.jpg', 
	 alt: 'creating hearts',
	 caption: "Creating Hearts"
	},	
	{ src: 'images/image07.jpg', 
	 alt: 'starving boy',
	 caption: "Starving Boy"
	},	
	{ src: 'images/image08.jpg', 
	 alt: 'i must clean my nose',
	 caption: "I must clean my Nose"
	},	
	{ src: 'images/image09.jpg', 
	 alt: 'new friends',
	 caption: "New Friends"
	},	
	{ src: 'images/image10.jpg', 
	 alt: 'A Kiss for you',
	 caption: "A Kiss for You"
	},	
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);