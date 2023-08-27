function Home() {
  return (
    <>
      <section className="relative flex mx-40 items-center items-stretch flex-wrap">
        <img src="/public/main/donut03.webp" alt="donut03" className="flex-1 w-1/2"/>
        <span className="absolute text-center font-extrabold text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">DONUT WORRY,<br/> BE HAPPY!</span>
        <img src="/public/main/donut04.webp" alt="donut04" className="flex-1 w-1/2"/>
      </section>
      <section className="flex flex-row mx-40 bg-yellow-100">
        <video src="./main/oldferry.mp4" type="video/mp4" autoPlay muted></video>
        <div className="flex flex-col p-7">
          <img src="/public/aboutUs.webp" alt="about us" className="mb-5 w-1/3"/>
          <strong className="text-xl my-1">Old Ferry Donut's First Shop in the US</strong>
          <span className="text-orange-400">Opens at The Source Mall, CA!<br />
            Old Ferry Donuts was founded in Seoul in 2016, South Korea’s first premium donut brand. With inspiration from donut shops in New York, the founders of Old Ferry worked to craft a donut with the freshest dough, carefully selected ingredients, and delicious flavors.
            Though our languages and culture may be different, we believe that the quality and taste of our donuts can communicate all that needs to be shared. Old Ferry Donuts continues to make the best donuts and is excited to share them with new customers in the Los Angeles area. Come join us for a new donut.
          </span>
        </div>
        {/* <Slider></Slider> */}
      </section>
    </> 
  )
}

export default Home