function backPage() {
  window.history.back();
}

/// teachers and lessons choose

const newDiv = document.getElementById("newDiv");

async function chooseFunc() {
  newDiv.innerHTML = "";
  await axios
    .get("https://65c3c10f4ac991e8059b004e.mockapi.io/teachers")
    .then((res) => {
      db = res.data;
      db.map((item) => {
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
          <button onclick ="addLesson(${item.id})">Seç</button>
         </div>
       </div>
      `;
        newDiv.appendChild(div);
      });
    });
}

function addLesson(id) {
  let lesson = JSON.parse(localStorage.getItem("lesson")) || [];
  let totalData = lesson.find((item) => item.id == id);
  if (totalData) {
    alert("Artiq bu fənni növbəti semestr üçün seçmisiniz!");
  } else {
    lesson.push(db.find((item) => item.id == id));
    localStorage.setItem("lesson", JSON.stringify(lesson));
  }
}

chooseFunc();

/// semestr ortalama

let ortalamaInp = document.getElementById("ortalamaInp");
let ortalamaInpOne = document.getElementById("ortalamaInpOne");
let ortalamaInpTwo = document.getElementById("ortalamaInpTwo");
let ortalamaInpThree = document.getElementById("ortalamaInpThree");
let ortalamaInpFour = document.getElementById("ortalamaInpFour");
let btnOrta = document.getElementById("btnOrta");
let ortalama = document.getElementById("ortalama");
let netice = document.getElementById("netice");

btnOrta.addEventListener("click", () => {
  let inpText = ortalamaInp.value;
  let inpTextOne = ortalamaInpOne.value;
  let inpTextTwo = ortalamaInpTwo.value;
  let inpTextThree = ortalamaInpThree.value;
  let inpTextFour = ortalamaInpFour.value;

  let sonuc = Math.round(
    inpText * 0.2 +
      inpTextOne * 0.2 +
      inpTextTwo * 0.2 +
      inpTextThree * 0.2 +
      inpTextFour * 0.2
  );
  console.log(sonuc);

  if (sonuc) {
    ortalama.innerText = `Ortalamaniz : ${sonuc}`;
    // ortalama.style.backgroundColor = "black";
  }
});

/// imtahana giris bali

let seminarİnp = document.getElementById("seminarİnp");
let serbestİnp = document.getElementById("serbestİnp");
let enterBtn = document.getElementById("enterBtn");
let resultİd = document.getElementById("resultİd");
let resultİdTwo = document.getElementById("resultİdTwo");

enterBtn.addEventListener("click", () => {
  let enterTextTwo = parseFloat(serbestİnp.value);
  let enterText = parseFloat(seminarİnp.value);

  let result = enterText + enterTextTwo;
  console.log(result);
  if (result <= 50) {
    resultİd.innerText = `Giriş balınız : ${result}`;
    resultİd.style.backgroundColor = "green";
  } else if ((result) => 50) {
    resultİd.innerText = `Giriş ballarınızı doğru qeyd edin!`;
    resultİd.style.backgroundColor = "red";
  }
});

/// yekun bal

let examEnter = document.getElementById("exam_enter");
let examResult = document.getElementById("exam_result");
let examButton = document.getElementById("exam_end");
let numberResult = document.getElementById("numberResult");
let stringResult = document.getElementById("stringResult");

examButton.addEventListener("click", () => {
  let examText = parseFloat(examEnter.value);
  let examTextTwo = parseFloat(examResult.value);

  let yekun = examText + examTextTwo;
  console.log(yekun);

  if (yekun >= 91 && yekun <= 100) {
    numberResult.innerText = `Ortalamaniz: ${yekun}`;
    stringResult.innerText = "A (Əla)";
    stringResult.style.backgroundColor = "green";
  } else if (yekun >= 81 && yekun <= 90) {
    numberResult.innerText = `Ortalamaniz: ${yekun}`;
    stringResult.innerText = "B (yaxşı)";
    stringResult.style.backgroundColor = "green";
  } else if (yekun >= 71 && yekun <= 80) {
    numberResult.innerText = `Ortalamaniz: ${yekun}`;
    stringResult.innerText = "C (orta)";
    stringResult.style.backgroundColor = "green";
  } else if (yekun >= 61 && yekun <= 70) {
    numberResult.innerText = `Ortalamaniz : ${yekun}`;
    stringResult.innerText = "D kafi";
    stringResult.style.backgroundColor = "lightgreen";
  } else if (yekun >= 51 && yekun <= 60) {
    numberResult.innerText = `Ortalamaniz : ${yekun}`;
    stringResult.innerText = "E Zəif";
    stringResult.style.backgroundColor = "red";
  } else if (yekun >= 100) {
    // numberResult.innerText = `Ortalamaniz : ${yekun}`;
    stringResult.innerText = "Ballarinizi duzgun qeyd edin!";
    stringResult.style.backgroundColor = "crimson";
  } else {
    numberResult.innerText = `Ortalamaniz : ${yekun}`;
    stringResult.innerText = "Kəsildiniz!";
    stringResult.style.backgroundColor = "crimson";
  }
});

///
