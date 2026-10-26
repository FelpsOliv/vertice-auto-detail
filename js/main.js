(() => {
  "use strict";

  const config = window.VERTICE_CONFIG || {};
  const number = String(config.whatsappNumber || "").replace(/\D/g, "");
  const hasValidNumber = number.length >= 10 && number.length <= 15;
  const whatsappLinks = document.querySelectorAll(".js-whatsapp");
  const notice = document.querySelector("#demo-notice");
  const noticeClose = notice?.querySelector(".demo-notice__close");
  let noticeTimer;

  const showDemoNotice = () => {
    if (!notice) return;
    window.clearTimeout(noticeTimer);
    notice.classList.add("is-visible");
    notice.setAttribute("aria-hidden", "false");
    noticeTimer = window.setTimeout(hideDemoNotice, 6000);
  };

  const hideDemoNotice = () => {
    if (!notice) return;
    notice.classList.remove("is-visible");
    notice.setAttribute("aria-hidden", "true");
  };

  whatsappLinks.forEach((link) => {
    const message = link.dataset.message || "Olá! Gostaria de solicitar um orçamento.";

    if (hasValidNumber) {
      link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }

    link.setAttribute("aria-description", "Contato indisponível no modo demonstração");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showDemoNotice();
    });
  });

  noticeClose?.addEventListener("click", hideDemoNotice);
  document.querySelector("#current-year").textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
