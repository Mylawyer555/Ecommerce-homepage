import './HeroSection.css'
import HeroPic from '../../assets/Hero1.jpg'




const HeroSection = () => {
  return (
      // <div className="hero-wrap">
          <div className='hero-wrap' style={{backgroundImage: `url(${HeroPic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}></div>
    // </div>
  )
}

export default HeroSection