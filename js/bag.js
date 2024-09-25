//קבלת הדיב מהדף
let div = document.getElementById('bagDiv')
//יצירת כפתור למעבר לדף התשלום
let button = document.createElement('input')
button.setAttribute('type', 'button')
button.id = 'btnPayment'
let myBag = []
//המרת  המוצרים שנבחרו למערך
myBag = JSON.parse(sessionStorage.getItem("shoppingBag"))
let payment = 0
//המרת מערך הסכומים 
let sum = JSON.parse(sessionStorage.getItem("price"))
document.body.appendChild(button)

//יצירת טבלה לדף התשלום
creat_tblB()
function creat_tblB() {
    //ניקוי הדף למילוי מחדש
    div.innerHTML = ""
    sum = JSON.parse(sessionStorage.getItem("price"))
    //איפוס הסכום לתשלום וחישוב מחדש
    payment = 0
    for (let i = 0; i < sum.length; i++) {
        payment += sum[i];
    }
    if(payment - parseInt(payment) > 0.5)
    payment = parseInt(payment) + 1
    else{
        payment = parseInt(payment)
    }
    button.setAttribute('value', "Payment - $" + payment);
    let tbl, td, tr
    //הגדרת טבלה
    tbl = document.createElement("table")
    tr = document.createElement("tr")
    tbl.appendChild(tr)
    if (sessionStorage.getItem("shoppingBag") != null)
        for (let i = 0; i < myBag.length; i++) {
            //התא נבנה רק במקרה שהמקום במערך לא ריק
            if (myBag[i] != null) {
                document.createElement("br")
                tr = document.createElement("tr")
            
                //הכנסת כל הפרטים לטבלה לפי השדה
                for (let item in myBag[i]) {
                    td = document.createElement("td")

                    if (item != "link" && item != "link2" && item != 'name' && item != 'size') {
                        td.textContent = myBag[i][item]//הצבת התוכן הרצוי בתא
                        tr.appendChild(td)
                        if (item == 'price') {
                            td.textContent += '$'
                        }
                    }
                    else if (item == "link2") {
                        let pic = document.createElement("img")
                        pic.setAttribute("src", myBag[i][item])
                        pic.className = "img"
                        tr.appendChild(pic)
                    }
                    button.setAttribute('value', "Payment - $" + payment);
                }
                //הכנת קישור למחיקת מוצר
                td1 = document.createElement("td")
                let link = document.createElement("a")
                link.setAttribute("harf", "#")
                link.addEventListener("click", f_remove)
                link.setAttribute("data-prod", i)
                link.className = "delBag"
                link.textContent = "🗑"
                td1.appendChild(link)
                tr.appendChild(td1)

                //הכנת קישור להוספת מוצר


                tbl.appendChild(tr)
                div.appendChild(tbl)
            }
        }
    else
        div.innerHTML = ("your cart is empty!")
}
//מעבר לתשלום
button.addEventListener('click', function () {
    sessionStorage.setItem('sum', payment)
    window.location = '../html/payment.html'
})
//פונקציה להסרת מוצר מהעגלה
function f_remove() {
    let i = event.srcElement.getAttribute("data-prod")
    myBag[i] = null
    sum[i] = 0
    sessionStorage.setItem("shoppingBag", JSON.stringify(myBag))
    sessionStorage.setItem("price", JSON.stringify(sum))
    creat_tblB()
}
function f_add() {

    console.log('add')
    creat_tblB()

}

