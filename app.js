//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (question) {
      if (question !== question) {
        question.classList.remove("show-text");
      }

      question.classList.toggle("show-text");
    });
  });
});
