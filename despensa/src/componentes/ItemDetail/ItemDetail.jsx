import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'

 const ItemDetail = ({id, nombre, precio, img, stock}) => {
    //Creamos un estado local con la cantidad de productos agregados
    const [agregarCantidad,setAgregarCantidad] = useState(0)
     //Creamos una funcion manejadora de la cantidad :

const manejadorCantidad = (cantidad) =>{
        setAgregarCantidad(cantidad);
        console.log("Productos agregados:" + cantidad)
     }
     return (
        <div className='contenedorItem'>
            <h2>Nombre:{nombre}</h2>
            <h3>Precio:{precio}</h3>
            <h3>Id: {id}</h3>
            <img src={img} alt={nombre}/>
            <p>Remera Napalm Death IMPORTADA .Varios talles disponibles,envios a todo el pais</p>
    
            {
              //Acá empleamos la logica de montaje y desmotaje del contador
    
              agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
    
        </div>
      )
    }
export default ItemDetail