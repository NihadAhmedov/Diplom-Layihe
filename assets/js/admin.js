/// table

const tbody = document.getElementById("tbody");

function tableFunc() {
  tbody.innerHTML = "";
  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
    .then((res) => {
      pro = res.data;
      pro.map((item) => {
        const tr = document.createElement("tr");
        tr.className = "tableList";
        tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.group}</td>
            <td>${item.course}</td>
            <td>${item.faculty}</td>
            <td>${item.specialty}</td>
            <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>

            `;
        tbody.appendChild(tr);
      });
    });
}

tableFunc();

/// search

const srchInput = document.getElementById("srchInput");
const form = document.getElementById("form");

function findByName() {
  tbody.innerHTML = "";
  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
    .then((res) => {
      pro = res.data;
      let searchData = pro.filter((item) =>
        item.name.toLowerCase().startsWith(srchInput.value.toLowerCase())
      );
      console.log(searchData);
      searchData.map((item) => {
        const tr = document.createElement("tr");
        tr.className = "tableList";
        tr.innerHTML = `
            
        <td>${item.id}</td>
        <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.fname}</td>
        <td>${item.group}</td>
        <td>${item.course}</td>
        <td>${item.faculty}</td>
        <td>${item.specialty}</td>
        <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>
            `;
        tbody.appendChild(tr);
      });
    });
}

form.addEventListener("input", findByName);

/// get student information

const getInfo = document.getElementById("getInfo");
const loadBtn = document.getElementById("loadBtn");

let page = 1;
let limit = 4;
let pro = [];

function getStudentInfo() {
  axios
    .get(
      `https://655c84d425b76d9884fd7251.mockapi.io/login?page=${page}&limit=${limit}`
    )
    .then((res) => {
      pro = res.data;
      pro.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "boxInfo col-xl-3 col-md-6 col-sm-6 col-12";
        myDiv.innerHTML = `
            <div class="boxDiv">
                <div class="imgBox">
                  <img src="${item.image}" alt="">
                  </div>
                    <div class="boxText">
                       <h4> ${item.username}</h4>
                       <span>Email: ${item.email}</span>
                       <span>Password: ${item.password}</span>
                       <ul>
                       <li>Id: ${item.id}</li>
                         <li>Qrup: ${item.group}</li>
                         <li>Kurs: ${item.course}</li>
                         <li>Fakültə: ${item.faculty}</li>
                         <li>İxtisas: ${item.specialty}</li>                        
                      </ul>
                      <button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button>
                    </div>
             </div>
            
            `;
        getInfo.appendChild(myDiv);
      });
      page++;
    });
}

loadBtn.addEventListener("click", getStudentInfo);

getStudentInfo();

///

let formNew = document.getElementById("formNew");
let imgInp = document.getElementById("imgInp");
let nameInp = document.getElementById("nameInp");
let surnameInp = document.getElementById("surnameInp");
let fnameInp = document.getElementById("fnameInp");
let groupInp = document.getElementById("groupInp");
let courseInp = document.getElementById("courseInp");
let facultyInp = document.getElementById("facultyInp");
let specialInp = document.getElementById("specialInp");
let createBtn = document.getElementById("createBtn");

function myForm(e) {
  e.preventDefault();

  axios
    .post(`https://655c84d425b76d9884fd7251.mockapi.io/login`, {
      image: imgInp.value,
      name: nameInp.value,
      surname: surnameInp.value,
      fname: fnameInp.value,
      group: groupInp.value,
      course: courseInp.value,
      faculty: facultyInp.value,
      specialty: specialInp.value,
    })
    .then((res) => {
      console.log(res.data);
      form.reset();
      tableFunc();
      getStudentInfo();
    });
}

createBtn.addEventListener("click", myForm);

/// delete

function deleteFunc(id) {
  axios
    .delete(`https://655c84d425b76d9884fd7251.mockapi.io/login/${id}`)
    .then((res) => {
      getStudentInfo();
      tableFunc();
    });
}

///
// function backPages() {
//   window.history.back();
// }

/// sort

function defaultFunc() {
  tbody.innerHTML = "";
  let list = selectValue.value;

  if (list === "1") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        db = res.data;
        tableFunc();
      });
  }
}

selectValue.addEventListener("change", defaultFunc);

function sortFuncA() {
  tbody.innerHTML = "";
  let list = selectValue.value;

  if (list === "2") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        pro = res.data;
        let sortData = pro.sort((a, b) => a.username.localeCompare(b.username));
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.group}</td>
            <td>${item.course}</td>
            <td>${item.faculty}</td>
            <td>${item.specialty}</td>
            <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>

            `;
          tbody.appendChild(tr);
        });
      });
  }
}

selectValue.addEventListener("change", sortFuncA);


async function sortFuncZ() {
  tbody.innerHTML = "";
  let list = selectValue.value;

  if (list === "3") {
   await axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        pro = res.data;
        let sortData = pro.sort((a, b) => b.username.localeCompare(a.username));
        console.log(sortData);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.group}</td>
            <td>${item.course}</td>
            <td>${item.faculty}</td>
            <td>${item.specialty}</td>
            <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>

            `;
          tbody.appendChild(tr);
        });
      });
  }
}

selectValue.addEventListener("change", sortFuncZ);

function sortFuncTotal() {
  tbody.innerHTML = ``; 
  let list = selectValue.value;

  if (list === "4") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        let pro = res.data;
        let sortData = pro.sort((a, b) => a.group - b.group);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
            <td>${item.surname}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.group}</td>
            <td>${item.course}</td>
            <td>${item.faculty}</td>
            <td>${item.specialty}</td>
            <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

selectValue.addEventListener("change", sortFuncTotal);


function sortFuncTotalTwo() {
  tbody.innerHTML = ``; 
  let list = selectValue.value;

  if (list === "5") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        let pro = res.data;
        let sortData = pro.sort((a, b) => b.group - a.group);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></td>
            <td>${item.surname}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.group}</td>
            <td>${item.course}</td>
            <td>${item.faculty}</td>
            <td>${item.specialty}</td>
            <td><button id="deleteBtn" onclick="deleteFunc(${item.id})">Delete <i class="fa-solid fa-trash"></i></button></td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

selectValue.addEventListener("change", sortFuncTotalTwo);
