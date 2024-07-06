import Announcement from "./components/announcement/Announcement"
import Brand from "./components/brand/Brand"
import Catalogue from "./components/catalogue/Catalogue"
import HeroSection from "./components/hero1/HeroSection"
import Nav from "./components/navbar/Nav"
import Products from "./components/products/Products"


function App() {
  
  return (
    <div className='w-full min-h-screen bg-gray-50 relative'>
      <Announcement/>
      <Nav />
      <HeroSection />
      <Products />
      <Catalogue />
      <Brand/>
    </div>
  )
}

export default App
