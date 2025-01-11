document.addEventListener("DOMContentLoaded", () => {
    const scene = document.querySelector(".scene");
  
    function createFirefly() {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefly.style.left = Math.random() * 100 + "vw";
      firefly.style.top = Math.random() * 100 + "vh";
      firefly.style.animationDelay = Math.random() * 5 + "s";
      firefly.style.animationDuration = Math.random() * 10 + 5 + "s";
      scene.appendChild(firefly);
  
      setTimeout(() => {
        firefly.remove();
      }, 15000);
    }
  
    setInterval(createFirefly, 500);
  });
  