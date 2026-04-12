function toogleStyle(activeId) {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(btn => {
    btn.classList.remove("bg-[#4A00FF]", "text-white");
    btn.classList.add("text-[#64748B]", "border", "border-[#64748B]");
  });

  const activeBtn = document.getElementById(activeId);

  activeBtn.classList.add("bg-[#4A00FF]", "text-white");
  activeBtn.classList.remove("text-[#64748B]", "border-[#64748B]");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("all-filter-btn").addEventListener("click", () => {
    toogleStyle("all-filter-btn");
    displayIssues(allIssues);
  });

  document.getElementById("open-filter-btn").addEventListener("click", () => {
    toogleStyle("open-filter-btn");

    manageSpinner(true);

    const openIssues = allIssues.filter(issue => issue.status === "open");
    displayIssues(openIssues);

    manageSpinner(false);
  });

  document.getElementById("closed-filter-btn").addEventListener("click", () => {
    toogleStyle("closed-filter-btn");

        manageSpinner(true);
    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    displayIssues(closedIssues);

    manageSpinner(false);
  });
});