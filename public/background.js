const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
});

let trails = [];
let lastMoveTime = 0;
let mouseInside = false; 
let movingRecently = false; 
let particles = [];
const particleCount = 500;
const revealRadius = 350;
let mouse = { x: width / 2, y: height / 2 };

for (let i = 0; i < particleCount; i++) {
	particles.push({
		x: Math.random() * width,
		y: Math.random() * height,
		dx: (Math.random() - 0.5) * 0.2,
		dy: (Math.random() - 0.5) * 0.2,
		size: Math.random() * 1.5 + 0.5,
		alpha: 0
	});
}

window.addEventListener('mousemove', (e) => {
	const rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;

	lastMoveTime = Date.now();
	movingRecently = true;
	mouseInside = true;

	trails.push({
		x: mouse.x,
		y: mouse.y,
		alpha: 1,
		size: 20
	});
});

window.addEventListener('mouseleave', () => {
	mouseInside = false;
});

window.addEventListener('mouseenter', () => {
	mouseInside = true;
});

function drawParticles() {
	for (let i = 0; i < particles.length; i++) {
		let p = particles[i];

		p.x += p.dx;
		p.y += p.dy;

		if (p.x < 0) p.x = width;
		if (p.x > width) p.x = 0;
		if (p.y < 0) p.y = height;
		if (p.y > height) p.y = 0;

		const dx = p.x - mouse.x;
		const dy = p.y - mouse.y;
		const dist = Math.sqrt(dx * dx + dy * dy);
        if (mouseInside) {
            if (movingRecently) {
                if (dist < revealRadius) {
                    p.alpha += 0.05;
                    if (p.alpha > 1) p.alpha = 1;
                } else {
                    p.alpha -= 0.05;
                    if (p.alpha < 0) p.alpha = 0;
                }
            } else {
                p.alpha -= 0.035;
                if (p.alpha < 0) p.alpha = 0;
            }
        } else {
            p.alpha -= 0.02;
            if (p.alpha < 0) p.alpha = 0;
        }        

		ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

function drawTrails() {
	for (let i = 0; i < trails.length; i++) {
		let trail = trails[i];

		let gradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, trail.size);
		gradient.addColorStop(0, `rgba(255,100,255,${trail.alpha})`);
		gradient.addColorStop(0.5, `rgba(100,100,255,${trail.alpha * 0.8})`);
		gradient.addColorStop(1, `rgba(50,0,100,0)`);

		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
		ctx.fill();

		trail.alpha -= 0.18;
		trail.size *= 0.82;

		if (trail.alpha <= 0 || trail.size <= 0.5) {
			trails.splice(i, 1);
			i--;
		}
	}
}

function draw() {
	ctx.clearRect(0, 0, width, height);

	drawParticles();

	if (mouseInside || trails.length > 0) { 
		drawTrails();
	}
}

function animate() {
	draw();

	const now = Date.now();
	// If not moved for 1000ms, we stop revealing
    if (now - lastMoveTime > 800) {
        movingRecently = false;
    }

	requestAnimationFrame(animate);
}

animate();
