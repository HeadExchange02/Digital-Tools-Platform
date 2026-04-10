import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import ProductSection from './Components/ProductSection'
import Stats from './Components/Stats'
import Footer from './Components/Footer'
import Steps from './Components/Steps'


const getProducts = async () => {
  const res = await fetch("/models.json");
  return res.json()
}

const productPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cart, setCart] = useState([]);
  return (
    <>
      <div>

        <Navbar></Navbar>
        <Banner></Banner>
        <Stats></Stats>

        {/* Tab */}
        <div>
          <div className="tabs tabs-box justify-center bg-transparent">
            <input type="radio" name="my_tabs_1" className="tab rounded-full font-semibold w-40" aria-label="Products" onClick={() => setActiveTab("product")} defaultChecked />
            <input type="radio" name="my_tabs_1" className="tab rounded-full font-semibold w-40" aria-label="Cart" onClick={() => setActiveTab("cart")} />
          </div>
        </div>

        {activeTab === "product" && (
          <>
            <Suspense fallback={<span className="loading loading-ring loading-xl ml-[50%] mt-50 mb-50"></span>}>
              <ProductSection productPromise={productPromise} cart={cart} setCart={setCart}></ProductSection>
            </Suspense>
          </>
        )}
        {activeTab === "cart" && <Cart key={productPromise.id} cart={cart} setCart={setCart}></Cart>}
        <Steps></Steps>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
