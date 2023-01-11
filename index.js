const user_div = document.getElementById("user");

const API_URL = "http://localhost:3000/";
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
      window.location.reload()
    })
    .catch(err => console.error(err))

}