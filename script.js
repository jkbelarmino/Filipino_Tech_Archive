document.addEventListener('DOMContentLoaded', () => {
  // === Sidebar Toggle Logic ===
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');

  if (sidebar && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // === Typing Effect Logic ===
  const typingTargets = [
    { id: "typing-text", roles: ["Startups", "Platforms", "Inventors", "Interfaces", "Archives"] },
    { id: "animated-role", roles: ["Archive", "Companies", "Platforms", "Pioneers", "Interfaces"] }
  ];

  typingTargets.forEach(({ id, roles }) => {
    const element = document.getElementById(id);
    if (!element) return;

    let roleIndex = 0;
    let charIndex = 0;

    function typeRole() {
      if (charIndex < roles[roleIndex].length) {
        element.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
      } else {
        setTimeout(eraseRole, 1500);
      }
    }

    function eraseRole() {
      if (charIndex > 0) {
        element.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
      }
    }

    typeRole();
  });

  // === Counter Animation Logic ===
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const frameRate = 60;
    const increment = target / (duration / (1000 / frameRate));
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
  });
});
