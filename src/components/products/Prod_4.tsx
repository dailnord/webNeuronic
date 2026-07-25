import { Link } from 'react-router-dom';
import flecha from '../img/flecha.svg';
import kit2 from '../img/kit2.svg';
import './products.css';

const Prod_4 = () => {
    const product = [
    {
      id: 'Categoria_2', 
      nombre: 'Kit Higiénico Corporal',
      img: kit2,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];

  return (
    <div>
      <div className='back'>
        <Link to={'/products/'}><img src={flecha}></img></Link>
      </div>

      <div className='products_categoria4'>
        <div className='pd_hp'>
          {product.map((cat) => (
            <div key={cat.id} className='products-card-container4'>
              <div className='products-card'>
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

export default Prod_4
