import { Link } from 'react-router-dom';
import './categorias.css';
import flecha from '../img/flecha.svg';
import kit from '../img/kit.svg';
import hisopo from '../img/hisopo.svg';

const Categoria_2 = () => {
  const products = [
    {
      id: 'Prod_4', 
      nombre: 'Kit Higiénico Corporal',
      img: kit,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Prod_5',
      nombre: 'Hisopos',
      img: hisopo,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    }
  ];

  return (
    <div>
      <div className='back'>
        <Link to={'/products'}><img src={flecha}></img></Link>
        <Link to={'/products'}><h3>Categoría 2</h3></Link>
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

export default Categoria_2
