import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'

const getProducts = async () => {
  const res = await fetch("/models.json");
  console.log(getProducts)
  return res.json()
}

const productPromise = getProducts()
console.log(productPromise)
function App() {

  return (
    <>
      <div>

        <Navbar></Navbar>

          <Banner></Banner>
          <Stats></Stats>
            
        
      </div>
    </>
  )
}

export default App
