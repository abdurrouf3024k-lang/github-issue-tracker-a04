console.log("Login functionality is working!");

document.getElementById("signin-btn")
.addEventListener("click",function(){
  // get the username input
  const usernameInput = document.getElementById("user-name");
  const userId = usernameInput.value;
  console.log("User ID:", userId);



// get the password input
const passwordInput = document.getElementById("password");
const password = passwordInput.value;
console.log("Password:", password);

// match userId and password with the stored credentials
if (userId === "admin" && password === "admin123") {

alert("Login successful! Redirecting to home page");
window.location.replace("/home.html");

}

else{
  alert("Invalid username or password!");
}
})
