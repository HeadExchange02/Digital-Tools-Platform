import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import ProductSection from './Components/ProductSection'
import Stats from './Components/Stats'

const getProducts = async () => {
  const res = await fetch("/models.json");
  return res.json()
}

const productPromise = getProducts()

function App() {

  return (
    <>
      <div>

        <Navbar></Navbar>

        <Banner></Banner>
        <Stats></Stats>
        <ProductSection productPromise={productPromise}></ProductSection>

      </div>
    </>
  )
}

export default App
