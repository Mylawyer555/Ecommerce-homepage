import './Catalogue.css'
import BottomImage from '../../assets/bottomImg1.jpg'
import BottomImage2 from '../../assets/botttomImg2.jpg'

const Catalogue = () => {
  return (
      <div className='c-wrapper'>
          <div className="left-wrap" style={{backgroundImage:`url(${BottomImage2})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
              
          </div>
          <div className="right-wrap" style={{backgroundImage:`url(${BottomImage})`, backgroundPosition:'bottom', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
          
    </div>
  )
}

export default Catalogue