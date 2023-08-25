import MenuTypeButton from "../components/MenuTypeButton"

MenuTypeButton

function Nav() {
  return (
    <>
      <ul className="flex flex-row justify-center gap-6">
        <li><MenuTypeButton type="donut"/></li>
        <li><MenuTypeButton type="beverage"/></li>
        <li><MenuTypeButton type="goods"/></li>
      </ul>
    </>
  )
}

export default Nav