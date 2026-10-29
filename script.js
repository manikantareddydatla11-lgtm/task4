const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    // Close all FAQ items first
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");

      const otherQuestion =
        otherItem.querySelector(".faq-question");
      const otherAnswer =
        otherItem.querySelector(".faq-answer");

      otherQuestion.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
    });

    // Open the selected item only if it was previously closed
    if (!isOpen) {
      item.classList.toggle("active");
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;
    }
  });
});