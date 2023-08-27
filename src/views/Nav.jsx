import MenuTypeButton from "@/components/MenuTypeButton"
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul className="flex flex-row justify-center gap-6 mb-14">
        <li><NavLink to="/products"><MenuTypeButton type="all"/></NavLink></li>
        <li><NavLink to="/donut"><MenuTypeButton type="donut"/></NavLink></li>
        <li><NavLink to="/beverage"><MenuTypeButton type="beverage"/></NavLink></li>
        <li><NavLink to="/goods"><MenuTypeButton type="goods"/></NavLink></li>
      </ul>
    </>
  )
}

export default Nav