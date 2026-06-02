import { Link } from 'react-router-dom';
import './categorias.css';
import flecha from '../img/flecha.svg';
import protesis from '../img/protesis.svg';
import baterías_1 from '../img/baterías_1.svg';

const Categoria_1 = () => {
  const products = [
    {
      id: 'Prod_1', 
      nombre: 'Prótesis A',
      img: protesis,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Prod_2',
      nombre: 'Baterías',
      img: baterías_1,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    }
  ];

  return (
    <div className='products_categoria1'>
      <div className='back'>
        <Link to={'/products'}><img src={flecha}></img></Link>
        <Link to={'/products'}><h3>Categoría 1</h3></Link>
      </div>
      <div className='pd_cat'>
        {products.map((cat) => (
        <Link to={`/products/${cat.id}`} key={cat.id} className='product-card-link'>
          <div className='products-card'>
            <img src={cat.img} alt={cat.nombre} />
            <div className='products-info'>
              <h2>{cat.nombre}</h2>
              <h4>Información/ Descripción</h4>
              <p>{cat.descripcion}</p>
            </div>
          </div>
        </Link>
      ))}
      </div>    
    </div>
  )
}

export default Categoria_1
