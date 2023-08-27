import { NavLink } from "react-router-dom"

function OrderButton() {
  return (
    <NavLink to="/order">
      <button type='button' className="bg-amber-500 px-6 py-1 rounded-2xl text-white font-extrabold text-lg">ORDER</button>
    </NavLink>
  )
}

export default OrderButton