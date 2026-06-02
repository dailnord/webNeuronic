import { Link } from 'react-router-dom';
import './products.css';
import categoria1 from '../img/categoria_1.svg';
import categoria2 from '../img/categoria_2.svg';

const Products = () => {
  const categorias = [
    {
      id: 'Categoria_1', 
      nombre: 'Categoría 1',
      img: categoria1,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
      id: 'Categoria_2',
      nombre: 'Categoría 2',
      img: categoria2,
      descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...'
    }
  ];

  return (
    <div className='products-container'>
      {categorias.map((cat) => (
        <Link to={`/categorias/${cat.id}`} key={cat.id} className='product-card-link'>
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