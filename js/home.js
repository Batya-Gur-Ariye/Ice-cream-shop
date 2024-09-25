//בעת טעינה
document.body.onload = f_start

function f_start() {
    //הלוגו   
    let logo = document.createElement('img')
    logo.setAttribute('src', "../pic/logo!.png")
    logo.className = 'logo'
    document.body.appendChild(logo)

    //הרקע - גלידות
    for (let i = 0; i < 3; i++) {
        let backGround = document.createElement('img')
        backGround.setAttribute('src', "../pic/backGround.png")
        backGround.className = 'backGround'
        document.body.appendChild(backGround)
    }

    //יצירת הכפתורים
    let link1 = document.createElement('button')
    link1.innerHTML = "יצירת קשר"
    link1.className = 'link'
    link1.addEventListener('click', f_Contact)

    document.body.appendChild(link1)

    let link2 = document.createElement('button')
    link2.addEventListener('click', f_menu)
    link2.innerHTML = "תפריט"
    link2.className = 'link'
    document.body.appendChild(link2)

    let link3 = document.createElement('button')
    link3.addEventListener('click', f_login)
    link3.innerHTML ="כניסה"
    link3.className = 'link'
    document.body.appendChild(link3)

    //קצת עלינו
    let txt = document.createElement('img')
    txt.setAttribute('src', "../pic/text copy.png")
    txt.id = 'txt'
    document.body.appendChild(txt)

    //yummi
    let yummi = document.createElement('img')
    yummi.setAttribute('src', "../pic/yummi (1).png")
    yummi.id = 'pic'
    document.body.appendChild(yummi)

    //פונקציה לקישור לעמוד המשלוחים
    function f_Contact() {
        window.location = "./Contact.html"
    }
    //פונקציה לקישור לעמוד התפריט
    function f_menu() {
        window.location = "./menu.html"
    }
    //פונקציה לקישור לכרטיסי מתנה
    function f_login() {
        window.location = "Register.html"
    }
}


