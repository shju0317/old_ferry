import ProductList from "../views/ProductList"
import Footer from "./Footer"
import Header from "./Header"
import Nav from './Nav';

function RootLayout() {
  return (
    <>
      <Header/>
      <Nav className="bg-slate-500"/>
      <main>
        <ProductList/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout