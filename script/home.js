const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then(res => res.json())
  .then((json) => displayIssues(json.data))
};

const loadSingleIssue=(id)=>{
 const url= `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
fetch(url)
.then(res=>res.json())
.then((data)=>displaySingleIssue(data.data));
}

const displaySingleIssue=(words)=>{
 const singleContainer = document.getElementById("single-container");
 singleContainer.innerHTML = "";



//  {
//     "id": 50,
//     "title": "Create automated testing pipeline",
//     "description": "Set up CI/CD pipeline with automated tests running on every commit and pull request.",
//     "status": "open",
//     "labels": [
//         "enhancement",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "ci_cd_cindy",
//     "assignee": "test_tina",
//     "createdAt": "2024-02-10T08:00:00Z",
//     "updatedAt": "2024-02-10T08:00:00Z"
// }

  console.log(words);
 const single = document.createElement("div");

 single.innerHTML=`
  <div class="bg-white shadow-sm rounded-xl py-10 px-5 ">

  <!-- Title -->
  <h2 class="text-lg font-semibold text-gray-800 mb-2">
   ${words.title}
  </h2>

  <!-- Status-->
  <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
    <span class="px-2 py-1 rounded-full text-xs 
      ${words.status === 'open' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}">
      ${words.status.toUpperCase()}
    </span>
    <span>• Opened by ${words.author}</span>
    <span>• ${new Date(words.createdAt).toLocaleDateString()}</span>
  </div>

  <!-- Labels -->
   <!-- Labels -->
    <div class="flex gap-2 mb-3">
      ${words.labels.map(label => `
        <span class="px-2 py-1 text-xs rounded-full ${label === 'bug' ? 'bg-red-100 text-red-500' : ''}
        ${label === 'help wanted' ? 'bg-yellow-100 text-yellow-600' : ''}
        ${label === 'enhancement' ? 'bg-green-100 text-green-600' : ''}
        ${label === 'good first issue' ? 'bg-blue-100 text-blue-500' : ''}
        ${label === 'documentation' ? 'bg-purple-100 text-purple-500' : ''}">
          ${label}
        </span>
      `).join("")}
    </div>

  <!-- Description -->
  <p class="text-sm text-gray-600 mb-4">
    ${words.description}
  </p>

  <!-- Info -->
  <div class="bg-gray-100 rounded-lg p-3 flex justify-between mb-4">
    
    <div>
      <p class="text-xs text-gray-500">Assignee:</p>
      <p class="text-sm font-medium">  ${words.assignee || "Not assigned"}</p>
    </div>

    <div>
      <p class="text-xs text-gray-500">Priority:</p>
      <span class="px-2 py-1 rounded-full text-xs   ${words.priority === 'high' ? 'bg-red-500 text-white' : ''}
        ${words.priority === 'medium' ? 'bg-yellow-500 text-white' : ''}
        ${words.priority === 'low' ? 'bg-gray-400 text-white' : ''}">
          ${words.priority}
        
      </span>
    </div>

  </div>

  <!-- Button -->
  <div class="flex justify-end">
    <button class="bg-purple-600 text-white px-4 py-1 rounded">
      Close
    </button>
  </div>

</div>
 `;
 singleContainer.append(single);

}

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
<div class="bg-[#FFFFFF] rounded-xl shadow-sm border-t-4 
${issue.status === 'open'?'border-[#00A96E]' : 'border-[#A855F7]'} 
p-4 flex flex-col justify-between h-full
 ">
 issueDiv.setAttribute("onclick", `loadSingleIssue(${issue.id})`);
issueDiv.classList.add("cursor-pointer");
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
