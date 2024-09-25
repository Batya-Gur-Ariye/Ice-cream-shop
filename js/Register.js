
//הגדרת התיבות והכפתור
let myName = document.getElementById('idName')
let myPass = document.getElementById('idPass')
let btn2 = document.getElementById('btnOk2')
//הגדרת פעולות בעת לחיצה והקלדה על הכפתור

myName.addEventListener("keypress", f_check)
myPass.addEventListener("keypress", f_check2)
btn2.addEventListener("click", f_true)
// myPass.addEventListener("click", f_fill)

//בדיקה האם זה לא מספרים
function f_check() {
    if (!(event.keyCode < 48 || event.keyCode > 57))
        event.preventDefault()
}
//בדיקה האם זה רק מספרים
function f_check2() {
    if (!(event.keyCode >= 48 && event.keyCode <= 57))
        event.preventDefault()
}


//בדיקה אם הסיסמא תואמת
function f_true() {
    //אם זו לא פעם ראשונה 
            //בודק  בסשן אם זה כמו בפעם הקודמת
    if (localStorage.getItem(myName.value) != null) {
        let password = localStorage.getItem(myName.value)
        if (myPass.value == password) {
            //הודעת כניסה עם שם הלקוח
            alert('HELLO ' + myName.value)
            window.location = '../html/menu.html'
        }
        else{
            //הודעת שגיאה
            alert('!סיסמא שגויה')
        }
    }
    //אם זאת פעם ראשונה
    else {
        localStorage.setItem(myName.value, myPass.value)
        alert('HELLO ' + myName.value)
        window.location = '../html/menu.html'

    }
}

//הכיתוב
let h2 = document.getElementById('welcome')
//מעבר לדף הבית
h2.addEventListener('click', f_returnHome)

function f_returnHome(){
    window.location = "home.html"
}


