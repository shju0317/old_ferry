import MenuTypeButton from "@/components/MenuTypeButton"
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul className="flex flex-row justify-center gap-6 mb-14">
        <li><NavLink to="/products"><MenuTypeButton type="all"/></NavLink></li>
        <li><NavLink to="/about"><MenuTypeButton type="donut"/></NavLink></li>
        <li><MenuTypeButton type="beverage"/></li>
        <li><MenuTypeButton type="goods"/></li>
      </ul>
    </>
  )
}

export default Nav