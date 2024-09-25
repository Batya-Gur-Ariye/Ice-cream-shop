//קבלת הטופס מהדף 
let form = document.getElementById('myForm')
let myName = document.createElement('input')
myName.setAttribute('placeHolder', 'Name')
myName.className = 'shadow-input'
form.appendChild(myName)
form.appendChild(document.createElement('br'))
//שדות להזנה בטופס
let Email = document.createElement('input')
Email.setAttribute('placeHolder', 'Email')
form.appendChild(Email)
Email.className = 'shadow-input'
form.appendChild(document.createElement('br'))

let Subject = document.createElement('input')
Subject.setAttribute('placeHolder', 'Subject')
form.appendChild(Subject)
Subject.className = 'shadow-input'
form.appendChild(document.createElement('br'))

let Massage = document.createElement('textarea')
Massage.className = "shadow-input"
Massage.setAttribute('placeHolder', 'Massage')
form.appendChild(Massage)
form.appendChild(document.createElement('br'))
//כפתור לאיפוס הטופס
let submit = document.createElement('input')
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'Send Email')
submit.id = 'sub'
form.appendChild(submit)
//כיתוב
let h1 = document.getElementById('idContact')
h1.addEventListener('click', f_returnHome)
//ניתוב לדף הבית מהכיתוב
function f_returnHome() {
    window.location = "home.html"
}

