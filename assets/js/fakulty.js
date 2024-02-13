const modalDiv = document.querySelector('.modalDiv')
const showModal = document.getElementById('show_modal')
const closeModal = document.querySelector('.close_modal')

let hundle = true

function modalHidden(){
    if(hundle){
        modalDiv.style.display = 'flex'
    }else{
        modalDiv.style.display = 'none' 
    }

    hundle =!hundle
}

showModal.addEventListener('click', modalHidden)
closeModal.addEventListener('click', modalHidden)


/// modal fizika

const modalFz = document.getElementById('modalDivOne')
const showBtnFz = document.getElementById('show_modalF')
const deleteBtn = document.getElementById('close_modalOne')

let btn = true

function modalDivTwo(){
    if(btn){
        modalFz.style.display = 'flex'
    }else{
        modalFz.style.display = 'none'
    }

    btn =!btn
}

showBtnFz.addEventListener('click', modalDivTwo)
deleteBtn.addEventListener('click', modalDivTwo)


/// modal  riyaziyyat

const modalRz = document.getElementById('modalDivThree')
const closeBtn = document.getElementById('close_modalTwo')
const showBtn = document.getElementById('facultyButton')
let modal = true

function modalTrhee(){
    if(modal){
        modalRz.style.display = 'flex'
    }else{
        modalRz.style.display = 'none'
    }

    modal =!modal
}

showBtn.addEventListener('click', modalTrhee)
closeBtn.addEventListener('click', modalTrhee)

/// kimya 

const modalK = document.getElementById('modalDivFour')
const closeBtnK = document.getElementById('close_modalFour')
const showBtnK = document.getElementById('show_modalK')
let click = true

function modalFour(){
    if(click){
        modalK.style.display = 'flex'
    }else{
        modalK.style.display = 'none'
    }

    click =!click
}

showBtnK.addEventListener('click', modalFour)
closeBtnK.addEventListener('click', modalFour)

/// iqdisadiyyat modal

const modalControl = document.getElementById('modalDivFive')
const closeBtnC = document.getElementById('close_modalFive')
const showBtnC = document.getElementById('show_modalControl')
let text = true

function modalFive(){
    if(text){
        modalControl.style.display = 'flex'
    }else{
        modalControl.style.display = 'none'
    }

    text =!text
}

showBtnC.addEventListener('click', modalFive)
closeBtnC.addEventListener('click', modalFive)

/// tarix modal

const modalHistory = document.getElementById('modalDivHistory')
const closeBtns = document.getElementById('close_modalH')
const showBtns = document.getElementById('show_modalHistory')
let history = true

function modalHistoryFunc(){
    if(history){
        modalHistory.style.display = 'flex'
    }else{
        modalHistory.style.display = 'none'
    }

    history =!history
}

showBtns.addEventListener('click', modalHistoryFunc)
closeBtns.addEventListener('click', modalHistoryFunc)

/// filologiya modal

const modalDivEnd = document.getElementById('modalDivEnd')
const closeBtnEnd = document.getElementById('close_modalEnd')
const showBtnEnd = document.getElementById('show_modalEnd')
let end = true

function modalEndFunc(){
    if(end){
        modalDivEnd.style.display = 'flex'
    }else{
        modalDivEnd.style.display = 'none'
    }

    end =!end
}

showBtnEnd.addEventListener('click', modalEndFunc)
closeBtnEnd.addEventListener('click', modalEndFunc)