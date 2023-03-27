import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";


function Slideshow() {
   //Hard coding for testing purposes, will be dynamic  
  const products = [
      {
      title: "Honda",
      image: "https://bringatrailer.com/wp-content/uploads/2017/07/t.jpg"
      },
      {
      title: "Miata",
      image: "https://tse4.mm.bing.net/th?id=OIP.5qQkq1B2vyYI8JRkq31qUQHaEK&pid=Api&P=0"
      },
      {
        title: "Honda",
        image: "https://bringatrailer.com/wp-content/uploads/2017/07/t.jpg"
        },
        {
        title: "Miata",
        image: "https://tse4.mm.bing.net/th?id=OIP.5qQkq1B2vyYI8JRkq31qUQHaEK&pid=Api&P=0"
        },
        {
          title: "Honda",
          image: "https://bringatrailer.com/wp-content/uploads/2017/07/t.jpg"
          },
          {
          title: "Miata",
          image: "https://tse4.mm.bing.net/th?id=OIP.5qQkq1B2vyYI8JRkq31qUQHaEK&pid=Api&P=0"
          },
          {
            title: "Honda",
            image: "https://bringatrailer.com/wp-content/uploads/2017/07/t.jpg"
            },
            {
            title: "Miata",
            image: "https://tse4.mm.bing.net/th?id=OIP.5qQkq1B2vyYI8JRkq31qUQHaEK&pid=Api&P=0"
            },
    ]

    const productImages = products.map(product => {
        return <div key={product.id} ><img onClick="" id={product.id} style={{width: "400px", height: "300px", margin: 0}} src={product.image} alt={product.title}/></div>
    })


    // function handleClick(e) {
    //   history.push(`/products/${e.target.id}`)
    // }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return (
    <div className='slideshow'>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1800}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {productImages}
    </Carousel>
    </div>
  )
}

export default Slideshow