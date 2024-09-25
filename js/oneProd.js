let arrProducts = []
arrProducts = f_db()
//הוצאה מהסשן את המוצר הנבחר
let i = sessionStorage.getItem('thisProduct')
//הגדרת מערך בגודל מערך המוצרים
let arrPrices = [arrProducts.length]
//מילוי המערך במחירי המוצרים
for (let i = 0; i < arrProducts.length; i++) {
    arrPrices[i] = arrProducts[i].price
}
//דיב חיצוני
let external = document.getElementById('ExternalDiv')
let j = 0;
let div = document.getElementById('productsDiv')
// הכנסת כל הפרטים מהג'סון לעמוד המוצר
for (const feild in arrProducts[i]) {
    //יוצר תמונה
    if (feild == 'link2') {
        let imgProduct = document.createElement('img')
        imgProduct.setAttribute('src', arrProducts[i][feild])
        imgProduct.className = 'myProduct'
        external.appendChild(imgProduct)
    }

    else if (feild == 'describetion') {
        let productdescription = document.createElement('div')
        productdescription.innerHTML = arrProducts[i][feild]
        productdescription.className = 'description'
        external.appendChild(productdescription)

    }
    else if (feild == 'code') {
        let productCode = document.createElement('div')
        productCode.innerHTML = arrProducts[i][feild] + ' :מק"ט '
        productCode.className = 'code'
        external.appendChild(productCode)

    }
    else if (feild == 'category') {
        let productCategory = document.createElement('div')
        productCategory.innerHTML = "" + arrProducts[i][feild]
        productCategory.className = 'code'
        external.appendChild(productCategory)

    }
    else if (feild == 'size') {

        let productSize = document.createElement('select')
        let option = document.createElement('option')
        option.innerHTML = 'size'
        productSize.appendChild(option)
        external.appendChild(productSize)
        productSize.className = 'size'

        //יצרנו רשימת גדלים לבחירה
        for (j = 0; j < arrProducts[i][feild].length; j++) {
            let option = document.createElement('option')
            option.innerHTML = arrProducts[i][feild][j]
            productSize.appendChild(option)

        }
    }

    else if (feild == 'price') {
        let productPrice = document.createElement('div')
        //שרשרנו סימן $
        productPrice.innerHTML = "$" + arrProducts[i][feild]
        productPrice.className = 'code'
        external.appendChild(productPrice)
        external.appendChild(document.createElement('br'))
    }
    external.appendChild(div)
}
//מערך לסל הקניות
let shoppingBag = []
let prices = []
//אם הסל ריק יאתחל את המערכים
if (sessionStorage.getItem('shoppingBag') === null) {
    shoppingBag = new Array(0)
    prices = new Array(0)
}
else {
    //ימיר את הג'סון למערך ויכנים למערך שהגדרנו
    shoppingBag = JSON.parse(sessionStorage.getItem("shoppingBag"))
    prices = JSON.parse(sessionStorage.getItem("price"))
}
//
//כפתור הוספה לסל
let btnAddToBag = document.createElement('a')
btnAddToBag.innerHTML = '🛒'
btnAddToBag.setAttribute('harf', "#")
btnAddToBag.setAttribute('id', 'btnAdd')
btnAddToBag.addEventListener('click', f_add)

external.appendChild(btnAddToBag)
external.appendChild(document.createElement('br'))

//כפתור להצגת המוצרים בסל
let show = document.createElement('button')
show.innerHTML = 'הסל שלי'
show.setAttribute('id', 'btnShow')
show.addEventListener('click', f_show)
external.appendChild(show)
// external.appendChild(document.createElement('br'))

//חזרה להמשך קניה
let returnToMenu = document.createElement('button')
returnToMenu.innerHTML = ' >> להמשך קניה << '
returnToMenu.setAttribute('id', 'returnToMenu')
returnToMenu.addEventListener('click', function(){
    window.location = 'menu.html'
})
external.appendChild(returnToMenu)
// external.appendChild(document.createElement('br'))

//פונקציה להוספת מוצר לסל 
function f_add() {
    //מוסיף למערך את המוצר המתאים
    shoppingBag[shoppingBag.length] = arrProducts[i]
    prices[prices.length] = arrPrices[i]
    //הכנסה לסשן של המוצרים
    //ממיר את המערך בחזרה לסטרינג
    
    sessionStorage.setItem("shoppingBag", JSON.stringify(shoppingBag))
    //הכנסה לסשן של המחיר
    //ממיר את המערך בחזרה לסטרינג
    sessionStorage.setItem("price", JSON.stringify(prices))
    alert('                             המוצר נוסף לסל בהצלחה')
}
//פונקציה למעבר לסל המוצרים
function f_show() {
    window.location = "bag.html"
}
