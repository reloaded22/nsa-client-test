console.log("Index.js is working")

// Showing only the last registered user using localStorage:
// const user_alias = document.getElementById("user-alias");
// const user_email = document.getElementById("user-email");
// const user_img = document.querySelector("#user-pic > img");
const user_div = document.getElementById("user");
// console.log(user_div)

// if (localStorage.getItem("avatar")) 
//   user_img.src = localStorage.getItem("avatar");
// if (localStorage.getItem("alias"))
//   user_alias.innerHTML = localStorage.getItem("alias");
// if (localStorage.getItem("username"))
//   user_email.innerHTML = localStorage.getItem("username");

const API_URL = "http://localhost:3000/";
// Showing all users fetching the API:
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
  console.log(e.target);

  const formData = new FormData(e.target);
  //console.log(Array.from(formData.entries()));

  // const data = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: formData,
  // };

  fetch(API_URL, {method: "POST", body: formData})
    .then((res) => res.json())
    .then((data) => {
      console.log("\nMessage received from API:");
      console.log(data.message);
      console.log("\nUser received from API:");
      const user = data.user ? data.user : {};
      console.log(user);

      // localStorage.setItem("alias", user.alias ? user.alias : "");
      // user_alias.innerHTML = localStorage.getItem("alias");

      // localStorage.setItem("username", user.username ? user.username : "");
      // user_email.innerHTML = localStorage.getItem("username");

      // localStorage.setItem(
      //   "avatar",
      //   user.avatar
      //     ? `http://localhost:3000/${user.avatar}`
      //     : `http://localhost:3000/uploads/no-image.jpg`
      // );
      // user_img.src = localStorage.getItem("avatar");
    })
    .catch(err => console.error(err))

}