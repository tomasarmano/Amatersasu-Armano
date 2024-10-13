const products = [
    {
        id: "osd123" ,
        name: "Spartking Zero" ,
        price: "150" ,
        image: "/img/sz.webp" ,
        stock: "20" ,
        category: "juegos",
        description: ""
    },
    {
        id: "mon432" ,
        name: "Monkey D. Luffy Second Gear" ,
        price: "100" ,
        image: "/img/lg2.jpg" ,
        stock: "28" ,
        category: "figuras", 
        description: "Figura de acción de One Piece para niños y adultos, juguetes de dibujos animados japoneses, Luffy Gear 2, 15CM,"
    },
    {
        id: "son654" ,
        name: "Jujutsu Kaisen vol. 1" ,
        price: "50" ,
        image: "/img/jk.webp" ,
        stock: "8" ,
        category: "mangas", 
        description: ""
    },
    {
        id: "lna098" ,
        name: "Poster Megumi y Toji" ,
        price: "25" ,
        image: "/img/myt.jpg" ,
        stock: "20" ,
        category: "posters",
        description: "" 
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () =>{
            resolve(products)
        }, 500)
    })
}

const getProduct = (idProduct) => {
    return new Promise( (resolve) => {
        setTimeout( () =>{
            const product = products.find( (product) => product.id === idProduct )
            resolve(product)
        }, 500)
    })
}

export {getProducts, getProduct}