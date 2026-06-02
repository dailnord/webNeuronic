import { Link } from 'react-router-dom';
import flecha from '../img/flecha.svg';
import hisop2 from '../img/hisop2.svg';
import './products.css';

const Prod_5 = () => {
    const product = [
    {
      id: 'Categoria_2', 
      nombre: 'Hisopos',
      img: hisop2,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
  ];
  
  return (
    <div>
      <div className='back'>
        <Link to={'/categorias/Categoria_2'}><img src={flecha}></img></Link>
      </div>

      <div className='products_categoria1'>
        <div className='pd_cat'>
          {product.map((cat) => (
            <div key={cat.id} className='products-card-container'>
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

export default Prod_5
