const msg_div = document.getElementById("msg")
const user_div = document.getElementById("user")

let registration_status = localStorage.getItem("registration_status")
console.log("\nregistration_status:")
console.log(registration_status)
if (registration_status.includes("username_1 dup key")) {
  msg_div.innerHTML = "username already exists, choose a different one"
} else if (registration_status.includes("alias_1 dup key")) {
  msg_div.innerHTML = "alias already exists, choose a different one"
} else if (registration_status.includes("is required")) {
  msg_div.innerHTML = "Both Alias and Email are required"
} else {
  msg_div.innerHTML = registration_status;
}


const API_URL = "http://localhost:5500/";
// Show all users fetching the API:
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.users)
    data.users.forEach((user) => {
      user_div.innerHTML += `<div id="user-pic"><img src="${
        API_URL + user.avatar
      }" alt="user-avatar"></div>
        <div id="user-alias">${user.alias}</div>
        <div id="user-email">${user.username}</div><hr>`;
    })
  })
  .catch((err) => console.error(err));


const register = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch(API_URL, {method: "POST", body: formData})
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message)
      localStorage.setItem("registration_status", data.message)
      window.location.reload()
    })
    .catch(err => console.error(err))

}