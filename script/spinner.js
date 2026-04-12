const manageSpinner = (status) => {
  const spinner = document.getElementById("spinner");
  const container = document.getElementById("issues-container");

  if (status) {
    spinner.classList.remove("hidden");
    container.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    container.classList.remove("hidden");
  }
};