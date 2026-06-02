import './about.css'
import coclear from '../img/coclear.svg'
import coclear2 from '../img/coclear2.svg'

const About = () => {
  return (
    <div className='about-container'>
    <div className='about-row'>
      <div className='about-text'>
      <h3>¿Quiénes somos?</h3>
      <h4>Información/ Descripción</h4>
      <p>Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Sint fugiat aperiam porro,
         hic ea amet voluptatem dolore facere dolores 
         aspernatur repellendus assumenda aliquid laboriosam, 
         commodi sit pariatur odit cum explicabo.</p>
    </div>
        <div className="about-image">
          <img src={coclear} alt="coclear" className="coclear-img" />
        </div>
        </div>

      <div className='about-row'>
      <div className='about-text'>
      <h3>¿Cuál es nuestra misión?</h3>
      <h4>Información/ Descripción</h4>
      <p>Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Sint fugiat aperiam porro,
         hic ea amet voluptatem dolore facere dolores 
         aspernatur repellendus assumenda aliquid laboriosam, 
         commodi sit pariatur odit cum explicabo.</p>
      </div>
      <div className="about-image">
          <img src={coclear2} alt="coclear2" className="coclear2-img" />
      </div>
      </div>
    </div>
  )
}

export default About
