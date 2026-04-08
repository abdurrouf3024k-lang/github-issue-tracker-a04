const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then((json) => displayIssues(json.data))
};

const displayIssues = (issues) => {


//1-get the container and empty
const issuesContainer = document.getElementById("issues-container");
issuesContainer.innerHTML = "";

// 2-get into every issues
for(let issue of issues){


// 3-create element
console.log(issue);
const issueDiv = document.createElement("div");

issueDiv.innerHTML = `
<div class="bg-[#FFFFFF] rounded-lg  p-4 space-y-2 shadow-sm ">
<p class="text-[.8rem] text-[#64748B]">${issue.id}</p>
  <span>
        ${issue.priority}
      </span>


<h3 class="font-semibold">${issue.title}</h3>
<p>${issue.description}</p>
<p> ${issue.labels}</p>
<p> ${issue.author}</p>

    </div>
`;
// 4-append to the container

issuesContainer.append(issueDiv);


}
 
}
loadIssues();