// ===== STAGE MANAGEMENT =====
let currentStage = 1;

function nextStage(stageNumber) {
	// Hide current stage
	document.getElementById(`stage${currentStage}`).classList.remove('active');

	// Show next stage
	currentStage = stageNumber;
	document.getElementById(`stage${currentStage}`).classList.add('active');

	// Trigger specific animations for each stage
	if (stageNumber === 5) {
		createRosePetals();
	} else if (stageNumber === 7) {
		createConfetti();
	} else if (stageNumber === 9) {
		createSparkles();
	}

	// Scroll to top
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FLOATING HEARTS BACKGROUND =====
function createBackgroundHearts() {
	const heartsBackground = document.getElementById('heartsBackground');
	const heartEmojis = ['❤️', '💕', '💖', '💗', '💝'];

	setInterval(() => {
		const heart = document.createElement('div');
		heart.textContent =
			heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
		heart.style.position = 'absolute';
		heart.style.left = Math.random() * 100 + '%';
		heart.style.top = '100%';
		heart.style.fontSize = Math.random() * 20 + 15 + 'px';
		heart.style.opacity = Math.random() * 0.5 + 0.3;
		heart.style.animation = `floatUp ${Math.random() * 3 + 4}s linear`;
		heart.style.pointerEvents = 'none';

		heartsBackground.appendChild(heart);

		setTimeout(() => {
			heart.remove();
		}, 7000);
	}, 500);
}

// CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
	@keyframes floatUp {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 0.5;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			transform: translateY(-100vh) rotate(360deg);
			opacity: 0;
		}
	}
`;
document.head.appendChild(style);

// ===== STAGE 5: COUNTER & ROTATING REASONS =====
let reasons = [
	'Your smile that lights up my entire world',
	'The way you laugh at my terrible jokes',
	'How you make me feel like the luckiest person alive',
	'Your kindness and compassionate heart',
	'The way you understand me without words',
	'How you make every moment an adventure',
	'Your beautiful eyes that I get lost in',
	"The comfort I feel when I'm with you",
	'How you inspire me to be better',
	'Your infectious positive energy',
	'The way you care for the people you love',
	'How you make ordinary days extraordinary',
	'Your strength and resilience',
	'The sound of your voice',
	'How you always know what I need',
	'Your amazing sense of humor',
	"The way you light up when you're excited",
	'How safe I feel in your arms',
	'Your genuine and authentic spirit',
	'The way you chase your dreams',
];

function startCounter() {
	const counter = document.getElementById('loveCounter');
	let count = 0;
	const target = 100;

	const interval = setInterval(() => {
		count += 2;
		counter.textContent = count;

		if (count >= target) {
			counter.textContent = target + '+';
			clearInterval(interval);
		}
	}, 50);
}

function startRotatingReasons() {
	const reasonContainer = document.getElementById('reasonsContainer');
	let index = 0;

	setInterval(() => {
		index = (index + 1) % reasons.length;
		const reasonElement = reasonContainer.querySelector('.rotating-reason');
		reasonElement.style.opacity = '0';

		setTimeout(() => {
			reasonElement.textContent = reasons[index];
			reasonElement.style.opacity = '1';
		}, 500);
	}, 3000);
}

function createFloatingHearts() {
	const container = document.getElementById('floatingHearts');
	const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💓'];

	setInterval(() => {
		const heart = document.createElement('div');
		heart.textContent =
			heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
		heart.style.position = 'absolute';
		heart.style.left = Math.random() * 100 + '%';
		heart.style.fontSize = Math.random() * 20 + 20 + 'px';
		heart.style.animation = 'floatUp 4s linear';
		heart.style.pointerEvents = 'none';

		container.appendChild(heart);

		setTimeout(() => {
			heart.remove();
		}, 4000);
	}, 300);
}

// ===== STAGE 6: ROSE PETALS =====
function createRosePetals() {
	const container = document.getElementById('rosePetals');

	const petalStyle = document.createElement('style');
	petalStyle.textContent = `
		@keyframes fallPetal {
			0% {
				transform: translateY(-20px) rotate(0deg);
				opacity: 1;
			}
			100% {
				transform: translateY(100vh) rotate(360deg);
				opacity: 0;
			}
		}
	`;
	document.head.appendChild(petalStyle);

	setInterval(() => {
		const petal = document.createElement('div');
		petal.textContent = '🌹';
		petal.style.position = 'absolute';
		petal.style.left = Math.random() * 100 + '%';
		petal.style.top = '-20px';
		petal.style.fontSize = Math.random() * 15 + 15 + 'px';
		petal.style.animation = `fallPetal ${Math.random() * 3 + 3}s linear`;
		petal.style.pointerEvents = 'none';

		container.appendChild(petal);

		setTimeout(() => {
			petal.remove();
		}, 6000);
	}, 400);
}

// ===== STAGE 7: THE BIG QUESTION =====
let noButtonClicks = 0;

function moveNoButton() {
	const noButton = document.getElementById('noButton');
	noButtonClicks++;

	if (noButtonClicks === 1) {
		// First click - move button
		const randomX = Math.random() * 200 - 100;
		const randomY = Math.random() * 200 - 100;
		noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
		noButton.textContent = 'Are you sure?';
	} else if (noButtonClicks === 2) {
		// Second click - move again and shrink
		const randomX = Math.random() * 200 - 100;
		const randomY = Math.random() * 200 - 100;
		noButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.8)`;
		noButton.textContent = 'Really?';
	} else if (noButtonClicks >= 3) {
		// Third click - give up
		noButton.textContent = "I can't say no to you! 💕";
		noButton.style.transform = 'scale(0.9)';
		setTimeout(() => {
			selectYes();
		}, 1000);
	}
}

function selectYes() {
	nextStage(7);
}

// ===== STAGE 8: CONFETTI =====
function createConfetti() {
	const container = document.getElementById('confetti');
	const colors = [
		'#ff6b9d',
		'#f093fb',
		'#667eea',
		'#ffd700',
		'#ff1493',
		'#00ffff',
	];
	const emojis = ['❤️', '💕', '🎉', '🎊', '✨', '💖', '🥳'];

	const confettiStyle = document.createElement('style');
	confettiStyle.textContent = `
		@keyframes confettiFall {
			0% {
				transform: translateY(-100px) rotate(0deg);
				opacity: 1;
			}
			100% {
				transform: translateY(100vh) rotate(720deg);
				opacity: 0;
			}
		}
	`;
	document.head.appendChild(confettiStyle);

	// Create initial burst
	for (let i = 0; i < 100; i++) {
		setTimeout(() => {
			createConfettiPiece(container, colors, emojis);
		}, i * 30);
	}

	// Continue creating confetti
	const interval = setInterval(() => {
		createConfettiPiece(container, colors, emojis);
	}, 200);

	// Stop after 10 seconds
	setTimeout(() => {
		clearInterval(interval);
	}, 10000);
}

function createConfettiPiece(container, colors, emojis) {
	const isEmoji = Math.random() > 0.5;
	const piece = document.createElement('div');

	if (isEmoji) {
		piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
		piece.style.fontSize = Math.random() * 20 + 15 + 'px';
	} else {
		piece.style.width = Math.random() * 10 + 5 + 'px';
		piece.style.height = Math.random() * 10 + 5 + 'px';
		piece.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];
		piece.style.borderRadius = '50%';
	}

	piece.style.position = 'absolute';
	piece.style.left = Math.random() * 100 + '%';
	piece.style.top = '-100px';
	piece.style.animation = `confettiFall ${Math.random() * 3 + 3}s linear`;
	piece.style.pointerEvents = 'none';

	container.appendChild(piece);

	setTimeout(() => {
		piece.remove();
	}, 6000);
}

// ===== STAGE 10: SPARKLES & EASTER EGG =====
function createSparkles() {
	const container = document.getElementById('sparkles');

	const sparkleStyle = document.createElement('style');
	sparkleStyle.textContent = `
		@keyframes sparkle {
			0%, 100% {
				opacity: 0;
				transform: scale(0);
			}
			50% {
				opacity: 1;
				transform: scale(1);
			}
		}
	`;
	document.head.appendChild(sparkleStyle);

	setInterval(() => {
		const sparkle = document.createElement('div');
		sparkle.textContent = '✨';
		sparkle.style.position = 'absolute';
		sparkle.style.left = Math.random() * 100 + '%';
		sparkle.style.top = Math.random() * 100 + '%';
		sparkle.style.fontSize = Math.random() * 20 + 20 + 'px';
		sparkle.style.animation = 'sparkle 2s ease-in-out';
		sparkle.style.pointerEvents = 'none';

		container.appendChild(sparkle);

		setTimeout(() => {
			sparkle.remove();
		}, 2000);
	}, 500);
}

// Easter Egg - Click hearts to show secret message
function setupEasterEgg() {
	const finalHearts = document.querySelector('.final-hearts');
	const modal = document.getElementById('easterEggModal');

	finalHearts.addEventListener('click', () => {
		modal.style.display = 'block';
	});
}

function closeModal() {
	const modal = document.getElementById('easterEggModal');
	modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
	const modal = document.getElementById('easterEggModal');
	const passwordModal = document.getElementById('passwordModal');
	const secretRevealModal = document.getElementById('secretRevealModal');

	if (event.target === modal) {
		modal.style.display = 'none';
	}
	if (event.target === passwordModal) {
		passwordModal.style.display = 'none';
	}
	if (event.target === secretRevealModal) {
		secretRevealModal.style.display = 'none';
	}
};

// ===== PASSWORD PROTECTED SECRET MESSAGE =====
function showPasswordPrompt() {
	const passwordModal = document.getElementById('passwordModal');
	const passwordInput = document.getElementById('passwordInput');
	const passwordError = document.getElementById('passwordError');

	passwordModal.style.display = 'block';
	passwordInput.value = '';
	passwordError.textContent = '';

	// Focus on input after a short delay
	setTimeout(() => {
		passwordInput.focus();
	}, 100);
}

function closePasswordModal() {
	const passwordModal = document.getElementById('passwordModal');
	passwordModal.style.display = 'none';
}

function checkPassword() {
	const passwordInput = document.getElementById('passwordInput');
	const passwordError = document.getElementById('passwordError');
	const correctPassword = '2512';

	if (passwordInput.value === correctPassword) {
		// Correct password - show secret message
		closePasswordModal();
		setTimeout(() => {
			showSecretReveal();
		}, 300);
	} else {
		// Wrong password
		passwordError.textContent = '❌ Wrong password! Try again...';
		passwordInput.value = '';
		passwordInput.focus();

		// Shake animation
		passwordInput.style.animation = 'shake 0.5s';
		setTimeout(() => {
			passwordInput.style.animation = '';
		}, 500);
	}
}

function showSecretReveal() {
	const secretRevealModal = document.getElementById('secretRevealModal');
	secretRevealModal.style.display = 'block';
}

function closeSecretReveal() {
	const secretRevealModal = document.getElementById('secretRevealModal');
	secretRevealModal.style.display = 'none';
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', () => {
	const passwordInput = document.getElementById('passwordInput');
	if (passwordInput) {
		passwordInput.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				checkPassword();
			}
		});
	}
});

// Add shake animation for wrong password
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
		20%, 40%, 60%, 80% { transform: translateX(10px); }
	}
`;
document.head.appendChild(shakeStyle);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
	createBackgroundHearts();
	setupEasterEgg();
});
