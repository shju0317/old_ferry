import MenuTypeButton from "@/components/MenuTypeButton"
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul className="flex flex-row justify-center gap-6 mb-14">
        <li><NavLink to="/products" className={({ isActive }) =>
                isActive ? ' border-orange-500 bg-white text-orange-500' : ''
              }><MenuTypeButton type="all"/></NavLink></li>
        <li><MenuTypeButton type="donut"/></li>
        <li><MenuTypeButton type="beverage"/></li>
        <li><MenuTypeButton type="goods"/></li>
      </ul>
    </>
  )
}

export default Nav