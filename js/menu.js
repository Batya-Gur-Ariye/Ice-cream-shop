//בעת טעינה
document.body.onload = f_restart
//הגדרת מערך להעתקה
let arrProducts = []
//ייבוא המערך מהJSON
 arrProducts = f_db()
 let head
//טעינת המוצרים לדף
 function f_restart(){
    let div = document.getElementById('myDiv')
    for (let i = 0; i < arrProducts.length; i++) {
        for (const feild in arrProducts[i]) {
            //רק עם השדה מכיל תמונה 
            if (feild == 'link') {
                let img = document.createElement('img')
                img.setAttribute('src', arrProducts[i][feild])
                img.className = 'img'
                //הוספת data
                img.setAttribute('data-i', i)
                img.addEventListener('click', f_details)
                div.appendChild(img)
            }
        }
    }
 }
 //לפרטים נוספים על המוצר
 function f_details(){
    let i = event.srcElement.getAttribute('data-i')
    sessionStorage.setItem('thisProduct', i)
    window.location = '../html/oneProd.html'
}