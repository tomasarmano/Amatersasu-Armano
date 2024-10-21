const products = [
    {
        id: "osd123" ,
        name: "Juego Spartking Zero PS5" ,
        price: 70000, 
        image: ["/img/sparkingzero.jpg", "/img/sparkingzero1.jpg", "/img/sparkingzero2.jpg", "/img/sparkingzero3.jpg"] ,
        stock: 7 ,
        category: "juegos",
        description: "Juego de acción y aventura futurista donde los jugadores luchan y exploran un mundo vibrante, desentrañando secretos y enfrentando desafiantes enemigos. ¡Prepárate para una experiencia llena de adrenalina!"
    },
    {
        id: "mon432" ,
        name: "Monkey D. Luffy Second Gear" ,
        price: 15000 ,
        image: ["/img/luffy.jpg", "/img/luffy2.jpg", "/img/luffy3.jpg"],
        stock: 28,
        category: "figuras", 
        description: "Figura de acción de One Piece para niños y adultos, juguetes de dibujos animados japoneses, Luffy Gear 2, 15CM,"
    },
    {
        id: "son654" ,
        name: "Manga Jujutsu Kaisen vol. 1" ,
        price: 12000 ,
        image: ["/img/jk.jpg"] ,
        stock: 8,
        category: "mangas", 
        description: "En el Tomo 1 de Jujutsu Kaisen, Yuji Itadori consume un objeto maldito y se convierte en un blanco para las maldiciones. Al unirse a una escuela de jujutsu, comienza su lucha contra fuerzas oscuras para proteger a quienes ama. ¡Acción y terror se entrelazan en esta emocionante historia!"
    },
    {
        id: "lna098" ,
        name: "Poster Megumi y Toji" ,
        price: 3000,
        image: ["/img/myt.jpg"] ,
        stock: 20,
        category: "posters",
        description: "Dos generaciones, un legado. Toji, el cazador de maldiciones, y Megumi, el joven hechicero, enfrentan un destino entrelazado en un mundo lleno de oscuridad. ¡Descubre la batalla entre la fuerza y la estrategia!" 
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