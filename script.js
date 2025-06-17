const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentStep = 1;

next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  updateProgress();
});

prev.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCount = document.querySelectorAll(".circle.active").length;
  const total = circles.length - 1;
  const progressWidth = (activeCount - 1) / total * 100;
  progress.style.width = progressWidth + "%";

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
}