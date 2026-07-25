import flecha from '../img/flecha.svg';
import bateriasA from '../img/bateriasA.svg';
import './products.css';
import bateriasB from '../img/bateriasB.svg';
import { Link } from 'react-router-dom';

const Prod_2 = () => {
    const product = [
    {
      id: 'Categoria_1', 
      nombre: 'Baterías A',
      img: bateriasA,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Categoria_1', 
      nombre: 'Baterías B',
      img: bateriasB,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];
  
  return (
    <div className='products-batery'>
      <div className='back'>
        <Link to={'/products/'}><img src={flecha}></img></Link>
      </div>

      <div className='products_categoria1'>
        <div className='pd_cat'>
          {product.map((cat) => (
            <div key={cat.id} className='products-card-container'>
              <div className='bat-card'>
                <img src={cat.img} alt={cat.nombre} />
                <div className='products-info'>
                  <h2>{cat.nombre}</h2>
                  <h4>Información/ Descripción</h4>
                  <p>{cat.descripcion}</p>
                     <button>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </div>
  )
}

export default Prod_2
