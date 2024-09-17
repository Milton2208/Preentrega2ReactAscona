const misProductos = [
    { id: "1", nombre: "Remera Napalm Death", stock: 10, precio: 10000, img: "../Img/remera1.jfif", idCat: "remeras"},
    { id: "2", nombre: "Buzo Power Trip", stock: 10, precio: 15000, img: "../Img/buzo1.jpg", idCat: "buzos" },

    { id: "3", nombre: "Campera Minor Threat", stock: 10, precio: 30000, img: "../Img/campera1.jfif", idCat: "camperas" },
    { id: "4", nombre: "Discos v/a", stock: 10, precio: 70000, img: "../Img/discos1.jpg", idCat: "discos" },

    {id: "5", nombre: "Libros", stock: 10, precio: 30000, img: "../Img/libros1.jfif", idCat: "camperas" },
    { id: "6", nombre: "Peliculas", stock: 10, precio: 70000, img: "../Img/peliculas1.jpg", idCat: "discos" },

   
];
export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(misProductos);
        },100)

    } )
}

export const getUnProducto = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()  =>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        } ,100)
    })
}

export const getProductosPorCategorias = (idCategoria) =>{
    return new Promise(resolve => {
        setTimeout(() =>{
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        },100);

    })
}
