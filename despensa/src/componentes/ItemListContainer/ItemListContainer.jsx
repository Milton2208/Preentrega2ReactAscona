import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategorias } from "../../asyncmock";

import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { IdCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = IdCategoria ? getProductosPorCategorias : getProductos;

    funcionProductos(IdCategoria)
      .then(res => setProductos(res));
  }, [IdCategoria]);

  return (
    <>
      <h2 style={{ textAlign: "center", fontFamily:"Arial, Helvetica, sans-serif" }}>STROMBO STORE</h2>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;