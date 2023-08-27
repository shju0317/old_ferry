import Header from "@/views/Header"
import Nav from '@/views/Nav';
import Footer from '@/views/Footer';
import { Outlet } from "react-router-dom";


function RootLayout() {
  return (
    <>
      <Header/>
      <Nav/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout