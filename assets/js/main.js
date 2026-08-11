const book = document.getElementById("book");
const scene = document.querySelector(".scene");

let open = false;

const tl = gsap.timeline({ paused: true });

tl.to(".front", {
    rotateY: -135,
    duration: 1.2,
    ease: "power4.inOut",
})
    .to(
        ".page",
        {
            rotateY: -160,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.in",
        },
        0,
    )
    .to(
        ".book",
        {
            rotateY: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
        },
        0,
    );

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * -40;

    gsap.to(book, {
        rotationY: x,
        rotationX: y,
        duration: 0.6,
        ease: "power3.out",
    });
});

book.addEventListener("click", () => {
    open ? tl.reverse() : tl.play();
    open = !open;
});

const bg = document.querySelector(".bg");
const COUNT = 40;

for (let i = 0; i < COUNT; i++) {
    const s = document.createElement("span");
    s.textContent = "*";

    const x = Math.random() * 100;
    const y = Math.random() * 100 - 15;
    const z = Math.random() * -600;

    s.style.left = `${x}%`;
    s.style.top = `${y}%`;

    bg.appendChild(s);

    gsap.fromTo(
        s,
        {
            transform: `translateZ(${z}px) translateY(200px) rotate(${Math.random() * 360}deg)`,
        },
        {
            transform: `translateZ(${z + 800}px) translateY(-400px) rotate(${Math.random() * 720}deg)`,
            duration: 20 + Math.random() * 20,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 10,
        },
    );
}
