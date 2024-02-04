const faculties = document.getElementById("faculties");

async function getFaculty() {
  try {
    const response = await axios.get(
      "https://655c84d425b76d9884fd7251.mockapi.io/form"
    );
    const data = await response.data;
    pro = data;
    pro.map((item) => {
      const myDiv = document.createElement("div");
      myDiv.className = "box";
      myDiv.innerHTML = `
            
            <div class="facultyDiv">
            <img src="${item.image}" alt="">
            </div>
            <div class="facultyWrite">
            <h2>Fakültə: ${item.name}</h2>
            <h5>Dekan: ${item.dekan}</h5>
            <p> Tələbə sayi: ${item.studentTotal}</p>
            <p>Müəllim sayi: ${item.teacherTotal}</p>
            </div>
            <div class="click_btn">
            <button id="show_modal">Ətrafli</button>
            </div>
            `;
      faculties.appendChild(myDiv);
    });
  } catch (error) {
    console.log(error);
  }
}

getFaculty();

/// search

let inp = document.getElementById("inp");
let srchBtn = document.getElementById("srchBtn");

async function findByNameFaculty(e) {
  e.preventDefault();
  faculties.innerHTML = "";
  await axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/form")
    .then((res) => {
      pro = res.data;
      let filterFaculty = pro.filter((item) =>
        item.name.toLowerCase().includes(inp.value.toLowerCase())
      );
      filterFaculty.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "box";
        myDiv.innerHTML = `
            
            <div class="facultyDiv">
            <img src="${item.image}" alt="">
            </div>
            <div class="facultyWrite">
            <h2>Fakültə: ${item.name}</h2>
            <h5>Dekan: ${item.dekan}</h5>
            <p> Tələbə sayi: ${item.studentTotal}</p>
            <p>Müəllim sayi: ${item.teacherTotal}</p>
            </div>
            <div class="click_btn">
            <button id="show_modal">Ətrafli</button>
            </div>
            `;
        faculties.appendChild(myDiv);
      });
    });
}

srchBtn.addEventListener('click', findByNameFaculty)

/// modal

// let modal = document.getElementById("modal");
// let showModal = document.getElementById('show_modal')
// let closeicon = document.getElementById("closeicon");

// closeicon.addEventListener("click", clsoeFunc);
// showModal.addEventListener('click', addFunc)

// function clsoeFunc() {
//   modal.style.display = "none";
// }

// function addFunc(){
//     modal.style.display = "block"
// }

let modal = document.getElementById("modal");
let showModal = document.getElementById("show_modal");
let closeIcon = document.getElementById("close_icon");

showModal.addEventListener("click", function () {
  modal.style.display = "none";
});

closeIcon.addEventListener("click", function () {
  modal.style.display = "block";
});
