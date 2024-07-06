import './Nav.css'
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";


const Nav = () => {
  return (
      <>
          
          
          <div className='nav'>
              <div className="nav-left">
                  <a href="/">Home</a>
                  <a href="">Shop</a>
                  <a href="">Categories</a>
                  
              </div>
              <div className="nav-middle">
                  <h1>Urban</h1>
              </div>
              <div className="nav-right">
                  <div className='search-input'>
                      <input
                          type="text"
                          placeholder='Search..'
                          
                      />
                      <CiSearch size='20px' />
                  </div>
                  
                  <a href="">Create an Account</a>
                  <BsCart3 size='22px' />

              </div>
          </div> 
      </>
  )
}

export default Nav