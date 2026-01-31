/* ========= 3D TILT EFFECT ========= */
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
/* ========= SCROLL REVEAL ========= */
const reveals = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add('active');
    }
  });
});

reveals.forEach(sec => sec.classList.add('reveal'));
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({length:80},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*2+1,
  dx:(Math.random()-0.5)*0.6,
  dy:(Math.random()-0.5)*0.6
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(77,163,255,0.6)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();
/* ========= SKILL BAR ANIMATION ========= */
const skillSection = document.getElementById('skills');
const fills = document.querySelectorAll('.fill');
let skillsAnimated = false;

window.addEventListener('scroll', () => {
  const top = skillSection.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.8 && !skillsAnimated) {
    fills.forEach(fill => {
      fill.style.width = fill.dataset.level + '%';
    });
    skillsAnimated = true;
  }
});
