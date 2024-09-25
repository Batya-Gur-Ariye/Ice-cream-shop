//יצירת טופס עם כל הפרטים לתשלום ולמשלוח
let form = document.getElementById('myForm')
// הכנסת הסכום לתשלום
if (sessionStorage.getItem('sum') == null)
    form.innerHTML = 'sum - $' + 0
else
    form.innerHTML = 'sum - $' + sessionStorage.getItem('sum')
form.appendChild(document.createElement('br'))

let myName = document.createElement('input')
myName.setAttribute('placeHolder', 'FIRST NAME')
myName.className = 'shadow-input'
form.appendChild(myName)

let lastName = document.createElement('input')
lastName.setAttribute('placeHolder', 'LAST NAME')
lastName.className = 'shadow-input'
form.appendChild(lastName)
form.appendChild(document.createElement('br'))

let Email = document.createElement('input')
Email.setAttribute('placeHolder', 'EMAIL')
Email.setAttribute('type', 'Email')
form.appendChild(Email)
Email.className = 'shadow-input'
form.appendChild(document.createElement('br'))

let Phone = document.createElement('input')
Phone.setAttribute('placeHolder', 'PHONE')
form.appendChild(Phone)
Phone.className = 'shadow-input'
form.appendChild(document.createElement('br'))

form.appendChild(document.createElement('br'))
let text1 = document.createElement('p')
text1.innerHTML = 'delivery details:'
text1.className = 'text12'
form.appendChild(text1)

let City = document.createElement('input')
City.setAttribute('placeHolder', 'CITY')
form.appendChild(City)
City.className = 'shadow-input'

let Street = document.createElement('input')
Street.setAttribute('placeHolder', 'STREET')
form.appendChild(Street)
Street.className = 'shadow-input'

let numberHouse = document.createElement('input')
numberHouse.setAttribute('placeHolder', 'HOUSE NUMBER')
form.appendChild(numberHouse)
numberHouse.className = 'shadow-input'
form.appendChild(document.createElement('br'))

form.appendChild(document.createElement('br'))
let text2 = document.createElement('p')
text2.innerHTML = 'payment card:'
text2.className = 'text12'
form.appendChild(text2)


let number = document.createElement('input')
number.setAttribute('placeHolder', 'CARD NUMBER')
number.className = 'shadow-input'
form.appendChild(number)
form.appendChild(document.createElement('br'))
let cardHolder = document.createElement('input')
cardHolder.setAttribute('placeHolder', 'CARD HOLDER')
cardHolder.className = 'shadow-input'
form.appendChild(cardHolder)
form.appendChild(document.createElement('br'))

let Date = document.createElement('input')
Date.setAttribute('placeHolder', 'date')
Date.setAttribute('type', 'date')
form.appendChild(Date)
Date.className = 'shadow-input'


let cvv = document.createElement('input')
cvv.setAttribute('placeHolder', 'CVV')
form.appendChild(cvv)
cvv.className = 'shadow-input'
form.appendChild(document.createElement('br'))


let TZ = document.createElement('input')
TZ.setAttribute('placeHolder', 'TZ')
form.appendChild(TZ)
TZ.className = 'shadow-input'
form.appendChild(document.createElement('br'))



//העברה להודעת סיום
let submit = document.createElement('input')
submit.setAttribute('value', 'Payment')
submit.id = 'sub'
submit.addEventListener('click', function () {
    if (myName.value == "" || lastName.value == "" || Email.value == "" || Phone.value == "") {
        alert('יש לציין פרטים אישיים')
    }
    else if (City.value == "" || Street.value == "" || numberHouse.value == "")
        alert('יש לציין פרטי משלוח')
    else if (number.value == "" || cardHolder.value == "" || Date.value == "" || TZ.value == "")
        alert('יש לציין פרטי אשראי')
    else
        window.location = 'finalnvitation.html'
})
form.appendChild(submit)