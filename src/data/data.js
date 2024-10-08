const products = [
    {
        id: "osd123" ,
        name: "Spartking Zero" ,
        price: "150" ,
        image: "/img/sz.webp" ,
        stock: "20" ,
        category: "Juegos" 
    },
    {
        id: "mon432" ,
        name: "Monkey D. Luffy Second Gear" ,
        price: "100" ,
        image: "/img/lg2.jpg" ,
        stock: "28" ,
        category: "Figuras" 
    },
    {
        id: "son654" ,
        name: "Jujutsu Kaisen vol. 1" ,
        price: "50" ,
        image: "/img/jk.webp" ,
        stock: "8" ,
        category: "Mangas" 
    },
    {
        id: "lna098" ,
        name: "Poster Megumi y Toji" ,
        price: "25" ,
        image: "/img/myt.jpg" ,
        stock: "20" ,
        category: "Posters" 
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () =>{
            resolve(products)
        }, 1000)
    })
}

export {getProducts}