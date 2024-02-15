window.onload = () => {
  let id = new URLSearchParams(window.location.search).get("userId");
  if (id) {
    getSettings(id);
  } else {
    console.log("ok");
  }
};

async function getSettings(id) {
  let account = await axios.get(
    `https://655c84d425b76d9884fd7251.mockapi.io/login/${id}`
  );
  let userAccount = account.data;
  let settings = document.getElementById("settings");
  let div = document.createElement("div");
  div.className = "changeAccount";
  div.id = "changeInfo";
  div.innerHTML = `
    <form  class="row" id="changeDivForm">
       <div  class = "col-xl-6 col-md-6 col-12" >
        <div class="change_image">
          <img src="${userAccount.image}" alt="userPhoto">
          <input type="text" id="newUserImage" placeholder="Put image">
        </div>
        </div>
        <div class="col-xl-6 col-md-6 col-12">
            <div id="change_box">
              <h1>Profile</h1>
           <div class="input_box">
             <label for="usernameNew">Username:</label>
              <input type="text" id="usernameNew" value="${userAccount.username}" required autocomplete="off">
           </div>
        <div class="input_box">
          <label for="emailNew">Email:</label>
           <input type="email" id="emailNew" value="${userAccount.email}"  required autocomplete="off">
        </div>
        <div class="input_box">
          <label for="passwordNew">Password</label>
          <input type="text" id="passwordNew" value="${userAccount.password}" required autocomplete="off">
        </div>
        <div class="input_box">
          <label for="facultyInp">Fakulte</label>
          <input type="text" id="facultyInp" value="${userAccount.faculty}" required autocomplete="off">
        </div>
        <div class="input_box">
           <label for="specialtyInp">Ixtisas</label>
           <input type="text" id="specialtyInp" value="${userAccount.specialty}" required autocomplete="off">
         </div>
        <div class="input_box">
            <label for="qrupInp">Qrup</label>
             <input type="number" id="qrupInp" value="${userAccount.group}" required autocomplete="off">
         </div>
         <div class="input_box">
           <label for="kursInp">Kurs</label>
           <input type="number" id="kursInp" value="${userAccount.course}"  required autocomplete="off">
        </div>
         <div class="change_btn">
            <button type="button" class="main_btn" onclick="changeFunction(${userAccount.id})">Change</button>
         </div>
        </div>
      </div>
  
    </form>
  
  `;
  settings.appendChild(div);
}

function changeFunction(id) {
  let newImage = document.getElementById("newUserImage");
  let newUsername = document.getElementById("usernameNew");
  let newEmail = document.getElementById("emailNew");
  let newPassword = document.getElementById("passwordNew");
  let qrupInp = document.getElementById("qrupInp");
  let kursInp = document.getElementById("kursInp");
  let ixtisasInp = document.getElementById("specialtyInp");
  let fakulteInp = document.getElementById("facultyInp");
  let imageDefault =
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";
  newImage.value = newImage.value === "" ? imageDefault : newImage.value;

  let data = {
    image: newImage.value,
    username: newUsername.value,
    email: newEmail.value,
    password: newPassword.value,
    group: qrupInp.value,
    course: kursInp.value,
    faculty: fakulteInp.value,
    specialty: ixtisasInp.value,
  };
  axios
    .put(`https://655c84d425b76d9884fd7251.mockapi.io/login/${id}`, data)
    .then(() => {
      let id = new URLSearchParams(window.location.search).get("userID");
      getuser(id);
    });
}

///

const list = document.getElementById("list");

function getLessonAfter() {
  list.innerHTML = "";
  let lesson = JSON.parse(localStorage.getItem("lesson")) || [];
  lesson.map((item, index) => {
    const div = document.createElement("div");
    div.className = "boxChoose col-xl-4 col-md-6 col-12";
    div.innerHTML = `
      <div class="teachDiv">
        <img src="${item.image}" alt="">
         <div class="teachText">
          <h5>Müəllimin adı: ${item.name}</h5>
          <p>MÜəllimin soyadi: ${item.surname}</p>
          <span>Yaşı: ${item.age}</span>
          <span>Keçdiyi dərs: ${item.lesson}</span>
          <button onclick = "removeLesson(${index})">Ləğv et</button>
        </div>
      </div>
    `;
    list.appendChild(div);
  });
}

function removeLesson(index) {
  let lesson = JSON.parse(localStorage.getItem("lesson")) || [];
  lesson.splice(index, 1);
  localStorage.setItem("lesson", JSON.stringify(lesson));
  getLessonAfter();
}

getLessonAfter();

function backPageUser() {
  window.history.back();
}
