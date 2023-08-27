import Logo from './../components/Logo';

function NotFound() {
  return (
    <div className="flex flex-col w-80 h-80 m-auto items-center gap-3 mt-5">
      <Logo/>
      <span className="text-xl">
        Sooorrrrrrrryyyyyyy<br/>
        Cannot Find😢
      </span>
    </div>
  )
}

export default NotFound