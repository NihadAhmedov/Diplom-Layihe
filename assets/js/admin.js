/// table

let tbody = document.getElementById("tbody");

function tableFunc() {
  tbody.innerHTML = "";
  axios.get("https://655c84d425b76d9884fd7251.mockapi.io/login").then((res) => {
    pro = res.data;
    pro.map((item) => {
      const tr = document.createElement("tr");
      tr.className = "tableList";
      tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="${item.image}"></td>
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
  axios.get("https://655c84d425b76d9884fd7251.mockapi.io/login").then((res) => {
    pro = res.data;
    let searchData = pro.filter((item) =>
      item.username.toLowerCase().startsWith(srchInput.value.toLowerCase())
    );
    console.log(searchData);
    searchData.map((item) => {
      const tr = document.createElement("tr");
      tr.className = "tableList";
      tr.innerHTML = `
            
        <td>${item.id}</td>
        <td><img src="${item.image}"></td>
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

form.addEventListener("input", findByName);

///

let formAdmin = document.getElementById("formAdmin");
let imgInp = document.getElementById("imgInp");
let passwInp = document.getElementById("passwInp");
let usernameInps = document.getElementById("usnameInp");
let emInp = document.getElementById("emInp");
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
      username: usnameInp.value,
      password: passwInp.value,
      email: emInp.value,
      group: groupInp.value,
      course: courseInp.value,
      faculty: facultyInp.value,
      specialty: specialInp.value,
    })
    .then((res) => {
      console.log(res.data);
      tableFunc();
      formAdmin.reset();
    });
}

formAdmin.addEventListener("submit", myForm);

/// delete

function deleteFunc(id) {
  axios
    .delete(`https://655c84d425b76d9884fd7251.mockapi.io/login/${id}`)
    .then((res) => {
      tableFunc();
      console.log(res);
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
  let list = selectValue.value;

  if (list === "2") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
        tbody.innerHTML = "";
        pro = res.data;
        let sortData = pro.sort((a, b) => a.username.localeCompare(b.username));
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="${item.image}"></td>
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
  let list = selectValue.value;

  if (list === "3") {
    await axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
  tbody.innerHTML = "";
        pro = res.data;
        let sortData = pro.sort((a, b) => b.username.localeCompare(a.username));
        console.log(sortData);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="${item.image}"></td>
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
  let list = selectValue.value;

  if (list === "4") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
  tbody.innerHTML = ``;
        let pro = res.data;
        let sortData = pro.sort((a, b) => a.group - b.group);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="${item.image}"></td>
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

selectValue.addEventListener("change", sortFuncTotal);

function sortFuncTotalTwo() {
  let list = selectValue.value;

  if (list === "5") {
    axios
      .get("https://655c84d425b76d9884fd7251.mockapi.io/login")
      .then((res) => {
  tbody.innerHTML = ``;

        let pro = res.data;
        let sortData = pro.sort((a, b) => b.group - a.group);
        sortData.map((item) => {
          const tr = document.createElement("tr");
          tr.className = "tableList";
          tr.innerHTML = `
            <td>${item.id}</td>
            <td><img src="${item.image}"></td>
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

selectValue.addEventListener("change", sortFuncTotalTwo);
