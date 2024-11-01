import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

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
        name: "Figura Monkey D. Luffy Second Gear" ,
        price: 40000 ,
        image: ["/img/luffy.jpg", "/img/luffy2.jpg", "/img/luffy3.jpg"],
        stock: 18,
        category: "figuras", 
        description: "Figura de acción de One Piece para niños y adultos, juguetes de dibujos animados japoneses, Luffy Gear 2, 15CM"
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
    },
    {
        id: "kks777" ,
        name: "Figura Kakashi Hatake Susanoo " ,
        price: 80000, 
        image: ["/img/kakashi.jpg", "/img/kakashi2.jpg", "/img/kakashi3.jpg"] ,
        stock: 7 ,
        category: "figuras",
        description: "Figura de acción de Naruto Shippuden para niños y adultos, juguetes de dibujos animados japoneses, Kakashi Hatake Susanoo, 30CM"
    },
    {
        id: "itt777" ,
        name: "Figura Itachi Uchiha " ,
        price: 75000, 
        image: ["/img/itachi.jpg", "/img/itachi2.jpg", "/img/itachi3.jpg"] ,
        stock: 4 ,
        category: "figuras",
        description: "Figura de acción de Naruto Shippuden para niños y adultos, juguetes de dibujos animados japoneses, Itachi Uchiha, 30CM"
    },
    {
        id: "nrt777" ,
        name: "Figura Naruto Lava Rasenshuriken " ,
        price: 100000, 
        image: ["/img/narutolavarasen.jpg", "/img/narutolavarasen2.jpg", "/img/narutolavarasen3.jpg"] ,
        stock: 2 ,
        category: "figuras",
        description: "Figura de acción de Naruto Shippuden para niños y adultos, juguetes de dibujos animados japoneses, Naruto Lava Rasenshuriken , 30CM"
    },
    {
        id: "zzz452" ,
        name: "Figura Roronoa Zoro" ,
        price: 60000 ,
        image: ["/img/zoro.jpg", "/img/zoro2.jpg"],
        stock: 15,
        category: "figuras", 
        description: "Figura de acción de One Piece para niños y adultos, juguetes de dibujos animados japoneses, Roronoa Zoro, 25CM"
    },
    {
        id: "jnm654" ,
        name: "Figura Janemba " ,
        price: 45000, 
        image: ["/img/janemba.jpg", "/img/janemba2.jpg", "/img/janemba3.jpg"] ,
        stock: 14 ,
        category: "figuras",
        description: "Figura de acción de Dragon Ball Z para niños y adultos, juguetes de dibujos animados japoneses, Janemba , 30CM"
    },
    {
        id: "wkk123" ,
        name: "Juego Black Myth Wukong PS5" ,
        price: 70000, 
        image: ["/img/wukong.jpg", "/img/wukong2.jpg", "/img/wukong3.jpg"] ,
        stock: 6 ,
        category: "juegos",
        description: "Black Myth: Wukong es un juego de acción y aventura para PS5, basado en la novela 'Viaje al Oeste'. Los jugadores encarnan a Sun Wukong, el Rey Mono, explorando un mundo mitológico lleno de combates espectaculares y criaturas legendarias. Con gráficos impresionantes y un combate dinámico, ofrece una experiencia épica y rica en narrativa."
    }
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( {id, ...dataProduct} )=> {
        addDoc(productsRef, dataProduct)
    })
    return
}

seedProducts()