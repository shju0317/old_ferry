import Logo from "../components/Logo"
import OrderButton from "../components/OrderButton"

function Header() {
  return (
    <header className="flex justify-between px-8 py-4">
      <Logo/>
      <OrderButton/>
    </header>
  )
}

export default Header