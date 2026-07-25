import { Link } from 'react-router-dom';
import flecha from '../img/flecha.svg';
import bateriasB from '../img/bateriasB.svg';
import baterias_b from '../img/baterias_b.svg';
import './products.css';

const Prod_3 = () => {
    const product = [
    {
      id: 'Categoria_1', 
      nombre: 'Baterías B',
      img: bateriasB,
      img2: baterias_b,
      nombre2: 'Baterías A',
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];

  return (
    <div>
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
                  <div className='bat2-card'>
                    <Link to='/products/Prod_2'>
                      <img src={cat.img2} alt={cat.nombre2} />
                        <h4>{cat.nombre2}</h4>
                    </Link>
                  </div>
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

export default Prod_3
