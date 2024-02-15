let eyeIcon = document.getElementById("eye_icon");
let passInp = document.getElementById("passInp");
let toggle = true;

function passwordSeen() {
  if (toggle) {
    passInp.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passInp.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
  toggle = !toggle;
}

eyeIcon.addEventListener("click", passwordSeen);

/// register password eye

let eyeIconR = document.getElementById("eye_iconR");
let inpRegister = document.getElementById("passRegister");
let eye = true;

function passSeen() {
  if (eye) {
    inpRegister.setAttribute("type", "text");
    eyeIconR.classList.remove("fa-eye");
    eyeIconR.classList.add("fa-eye-slash");
  } else {
    inpRegister.setAttribute("type", "password");
    eyeIconR.classList.remove("fa-eye-slash");
    eyeIconR.classList.add("fa-eye");
  }
  eye = !eye;
}

eyeIconR.addEventListener("click", passSeen);

/// login and register

const loginAndRegister = document.querySelector(".loginAndRegister");
const loginLink = document.getElementById("login_link");
const registerLink = document.getElementById("register_link");

registerLink.addEventListener("click", () => {
  loginAndRegister.classList.add("active");
});

loginLink.addEventListener("click", () => {
  loginAndRegister.classList.remove("active");
});

const btnPopup = document.querySelector(".btnLogin-popup");

btnPopup.addEventListener("click", () => {
  loginAndRegister.classList.add("active-popup");
});

const closeIcon = document.querySelector(".close_icon");

closeIcon.addEventListener("click", () => {
  loginAndRegister.classList.remove("active-popup");
});

/// qeydiyyat(register)

let username = document.getElementById("usernameRegister");
let email = document.getElementById("emailRegister");
let registerGet = document.getElementById("registerGet");
let password = document.getElementById("passRegister");
let succes = document.getElementById("succes");

registerGet.addEventListener("submit", registerCheck);

function registerCheck(e) {
  e.preventDefault();
  let data = {
    username: username.value,
    email: email.value,
    password: password.value,
    image:
      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    course: "",
    group: "",
  };
  axios
    .post(`https://655c84d425b76d9884fd7251.mockapi.io/login`, data)
    .then(() => {
      registerGet.reset();
      succes.innerHTML = `
      <p>Succes registration <i class="fa-solid fa-check"></i></p>
      `;
      // if(password.length <6){
      //   succes.innerHTML = `
      //   <p>Parola min 6</p>`
      // }
    });
}

let usernameInp = document.getElementById("usernameInp");
let loginForm = document.getElementById("loginForm");
let pass = document.getElementById("passInp");
let falseDiv = document.getElementById("false");

loginForm.addEventListener("submit", loginCheck);
// loginForm.addEventListener("submit", adminpage);

async function loginCheck(e) {
  e.preventDefault();
  let username = usernameInp.value;
  let password = pass.value;

  await axios
    .get(`https://655c84d425b76d9884fd7251.mockapi.io/login`)
    .then((res) => {
      db = res.data;
      let userFound = false;

      db.forEach((item) => {
        if (item.username === username && item.password === password) {
          userFound = true;
          if (item.username === "admin") {
            window.location.href = `../../admin.html`;
          } else {
            window.location.href = `../../login.html?userId=${item.id}`;
          }
        }
      });

      if (!userFound) {
        falseDiv.innerHTML = `<p>İstifadəçi adı və ya şifrəsi yanlışdır!</p>`;
      }
    });
}

