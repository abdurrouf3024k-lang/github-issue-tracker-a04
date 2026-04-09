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
<div class="bg-[#FFFFFF] rounded-xl shadow-sm  p-4 flex flex-col justify-between h-full
 ">
  <!-- Top section -->
  <div>
    <!-- Priority -->
    <div class="flex justify-between items-center mb-2">
      <span class="text-xs px-3 py-1 rounded-full 
      ${issue.priority === 'high' ? 'bg-red-100 text-red-500' : ''}
      ${issue.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : ''}
      ${issue.priority === 'low' ? 'bg-gray-200 text-gray-500' : ''}
      ">
        ${issue.priority.toUpperCase()}
      </span>
    </div>

    <!-- Title -->
    <h3 class="font-semibold text-gray-800 mb-1">
      ${issue.title}
    </h3>

    <!-- Description -->
    <p class="text-sm text-gray-500 mb-2 line-clamp-2">
      ${issue.description}
    </p>

    <!-- Labels -->
    <div class="flex flex-wrap gap-2 mt-2">
      ${issue.labels.map(label => `
        <span class="text-xs px-2 py-1 rounded-full 
        ${label === 'bug' ? 'bg-red-100 text-red-500' : ''}
        ${label === 'help wanted' ? 'bg-yellow-100 text-yellow-600' : ''}
        ${label === 'enhancement' ? 'bg-green-100 text-green-600' : ''}
        ${label === 'good first issue' ? 'bg-blue-100 text-blue-500' : ''}
        ${label === 'documentation' ? 'bg-purple-100 text-purple-500' : ''}
        ">
          ${label}
        </span>
      `).join("")}
    </div>
  </div>

  <!-- Bottom section -->
  <div class="mt-4 text-xs text-gray-400 border-t pt-2">
    <p>#${issue.id} by ${issue.author}</p>
    <p>${issue.createdAt}</p>
  </div>

    </div>
`;
// 4-append to the container

issuesContainer.append(issueDiv);


}
 
}
loadIssues();