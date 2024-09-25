function f_db() {
    let arrProducts = []
    if (sessionStorage.getItem('myDb') == null)
        arrProducts= [{
            name: 'גלידת הבית',
            link: "../pic/pic/גלידת הבית.png",
            link2: "../pic/pic/גלידת הבית.jpg",
            describetion: 'גלידה איטלקית היישר מאיטליה במגוון ענק של טעמים',
            code: 123,
            category: 'חלבי',
            size: ['small', 'medium', 'large', 'x - large'],
            price:  29.9


        },
        {
            name: 'הסופלה שלנו',
            link: "../pic/pic/סופלה.png",
            link2: "../pic/pic/סופלה.jpg",
            describetion: 'מאפה שוקולד ממולא שוקולד חםםםםםם',
            code: 234,
            category: 'פרווה',
            size: ['אישי', 'משפחתי'],
            price:12.5
        },
        {
            name: ' מילקשייק',
            link: "../pic/pic/מילקשייק.png",
            link2: "../pic/pic/מילקשייק.jpg",
            describetion: 'משקה בתוספת גלידה מוגש חם או קר לטעמך',
            code: 345,
            category: 'חלבי',
            size: ['small', 'medium', 'large', 'x - large'],
            price: 24.3

        },
        {
            name: 'וופל בלגי',
            link: "../pic/pic/וופל בלגי.png",
            link2: "../pic/pic/וופל בלגי.jpg",
            describetion: 'וופל טרי וחם שיוצר במיוחד בשבילך הכולל מגוון תוספות, רטבים ופרות טריים',
            code: 456,
            category: 'חלבי',
            size: ['one-size'],
            price: 42.9
        }
            , {
            name: 'תותים בשמנת',
            link: "../pic/pic/תותים בשמנת.png",
            link2: "../pic/pic/תותים בשמנת.jpg",
            describetion: ' תותים טריים עסיסיים בתוספת שמנת שתרצו עוד',
            code: 567,
            category: 'חלבי / פרווה',
            size: ['small', 'medium', 'large', 'x-large'],
            price: 21.2

        }, {
            name: 'קרפ צרפתי',
            link: "../pic/pic/קרפ.png",
            link2: "../pic/pic/קרפ.jpg",
            describetion: 'קרפ צרפתי טרי ופריך בתוספות מעניינות ומגוונות',
            code: 789,
            category: 'חלבי',
            size: ['one-size'],
            price: 34.9

        }, {
            name: 'קפוצינו',
            link: "../pic/pic/אייס קפה.png",
            link2: "../pic/pic/אייס קפה.jpg",
            describetion: 'משקה חלבי מרענן בטעם מרגש עם מגוון תוספות',
            code: 890,
            category: 'חלבי',
            size: ['small', 'medium', 'large', 'x-large'],
            price: 28.7

        }, {
            i: 7,
            name: 'מגנום חלבי',
            link: "../pic/pic/מגנום חלבי.png",
            link2: "../pic/pic/מגנום חלבי.jpg",
            describetion: 'מגנום חלבי המיוצר ממיטב המוצרים בטעמים שונים',
            code: 9101,
            category: 'חלבי',
            size: ['one-size'],
            price: 13.8
        }, {
            name: 'פנקייק',
            link:"../pic/pic/פנקייק.png",
            link2: "../pic/pic/פנקייק.jpg",
            describetion: 'מנת פנקייק עסיסית מוגשת עם רטבים ותוספות לטעם של עוד',
            code: 1012,
            category: 'חלבי / פרווה',
            size: ['one-size'],
            price: 32.6
        }, {
            name: 'סורבה',
            link: "../pic/pic/גלידת סורבה.png",
            link2: "../pic/pic/גלידת סורבה.jpg",
            describetion: 'טוחנים לך במקום פרות טריים ורעננים לחויה קייצית וכיפית',
            code: 1013,
            category: 'חלבי / פרווה',
            size: ['small', 'medium', 'large', 'x - large'],
            price: 15.6

        }, {
            name: 'פרי שייק',
            link: "../pic/pic/פרי שייק.png",
            link2: "../pic/pic/פרי שייק.jpg",
            describetion: 'טוחנים לך במקום פרות טריים ורעננים לחויה קייצית וכיפית',
            code: 1014,
            category: 'חלבי / פרווה',
            size: ['small', 'medium', 'large', 'x - large'],
            price: 21.6


        }, {
            name: 'פרלינים',
            link: "../pic/pic/פרלינים.png",
            link2: "../pic/pic/פרלינים.jpg",
            describetion: 'מגוון פרלינים בלגים משובחים הידועים בטעמם המיוחד, תתפנקו',
            code: 1012,
            category: 'חלבי',
            size: ['one-size'],
            price: 11.1

        }, {
            name: 'עוגת שכבות חלבית',
            link: "../pic/pic/עוגה חלבית.png",
            link2: "../pic/pic/עוגה חלבית.jpg",
            describetion: 'עוגת שכבות חלבית מלאה בכל טוב',
            code: 1015,
            category: 'חלבי',
            size: ['one-size'],
            price: 24.6

        }, {
            name: 'בננה ספליט',
            link: "../pic/pic/בננה ספליט.png",
            link2: "../pic/pic/בננה ספליט.jpg",
            describetion: 'מנת גלידה מרשימה על מצע בננות מלאה בתוספות ופינוקים',
            code: 1016,
            category: 'חלבי',
            size: ['one-size'],
            price: 64.9
        }, {
            name: ' תפוחים מצופים שוקולד חלב איכותי',
            link: "../pic/pic/תפוחים מצופים שוקולד.png",
            link2: "../pic/pic/תפוחים מצופים שוקולד.jpg",
            describetion: 'תפוחים מצופים בשוקולד חלב איכותי',
            code: 1017,
            category: 'חלבי',
            size: ['one-size'],
            price: 11.4
        }];
    else{
        let str = sessionStorage.getItem('mydb')
        arrProducts = JSON.parse(str)
    }
        return arrProducts
}


