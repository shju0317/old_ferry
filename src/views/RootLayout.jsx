import Header from "@/views/Header"
import Main from "@/views/Main";
import Nav from '@/views/Nav';
import Footer from '@/views/Footer';
import { Outlet } from "react-router";


function RootLayout() {
  return (
    <>
      <Header/>
      <Nav/>
      {/* <Main/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout