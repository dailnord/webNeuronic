import { Link } from 'react-router-dom';
import './products.css';
import baterías_1 from '../img/baterías_1.svg';
import kit2 from '../img/kit2.svg';
import hisop2 from '../img/hisop2.svg';

const Products = () => {
  const products = [
    {
      id: 'Prod_2',
      nombre: 'Baterías',
      img: baterías_1,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Prod_4',
      nombre: 'Kit Higiénico Corporal',
      img: kit2,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Prod_5',
      nombre: 'Hisopos',
      img: hisop2,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];

  return (
    <div className='products-container'>
      {products.map((cat) => (
        <Link to={`/products/${cat.id}`} key={cat.id} className='product-card-link'>
          <div className='product-card'>
            <img src={cat.img} alt={cat.nombre} />
            <div className='product-info'>
              <h2>{cat.nombre}</h2>
              <h4>Información/ Descripción</h4>
              <p>{cat.descripcion}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;