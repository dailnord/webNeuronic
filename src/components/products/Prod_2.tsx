import flecha from '../img/flecha.svg';
import bateriasA from '../img/bateriasA.svg';
import baterias_a from '../img/baterias_a.svg';
import './products.css';
import { Link } from 'react-router-dom';

const Prod_2 = () => {
    const product = [
    {
      id: 'Categoria_1', 
      nombre: 'Baterías A',
      img: bateriasA,
      img2: baterias_a,
      nombre2: 'Baterías B',
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];
  
  return (
    <div>
      <div className='back'>
        <Link to={'/categorias/Categoria_1'}><img src={flecha}></img></Link>
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
                    <Link to='/products/Prod_3'>
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

export default Prod_2
