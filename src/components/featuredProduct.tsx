"use client";
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from './bestSellingCard';
import { useAppSelector } from '@/app/store/hooks';

const FeaturedProduct = () => {
    //data
//     const bestSell = [
//         {
//         src:"/pictures/shirt9.webp",
//         alt: "multi Shirt",
//        title:" Printed shirt",
//        description:"Beautiful printed shirt for Women",
//        price:150,
//        category:"tops",
//        slug:"printed-shirt",
//     },
//     {
//         src:"/pictures/acesories3.jpg",
//         alt: "bracelet",
//        title:"Women Bracelets",
//        description:"Beautiful Women Bracelets ",
//        price:120,
//        category:"accessories",
//        slug:"Bracelets",
//     },
//     {
//         src:"/pictures/coat3.webp",
//         alt: "coat",
//        title:"Light Pink Coat",
//        description:"Beautiful Light Pink Coat ",
//        price:140,
//        category:"tops",
//        slug:"coat",
//     },
//   {
//     src:"/pictures/pant2.webp",
//     alt: "pant",
//    title:" Black Pant",
//    description:"Beautiful Black Pant for Women",
//    price:120,
//    category:"pants",
//    slug:"pants",
// },
// {
//   src:"/pictures/shoes4.webp",
//   alt: "shoes",
//  title:" Jogger Shoes",
//  description:"Beautiful Jogger Shoes for Women",
//  price:450,
//  category:"shoes",
//  slug:"joggers",
// },
// {
//   src:"/pictures/acesories4.webp",
//   alt: "locket",
//  title:"Golden Locket",
//  description:"Beautiful Golden Locket ",
//  price:60,
//  category:"accessories",
//  slug:"locket",
// },
// {
//   src:"/pictures/coat.jpg",
//   alt: "coat",
//  title:"Light Brown Coat",
//  description:"Beautiful Light Brown Coat ",
//  price:299,
//  category:"tops",
//  slug:"brown-coat",
// },
//  ];
//  const bestSell = useAppSelector(((state)=>state.products));
const product = useAppSelector(((state)=>state.products));
const bestSell = product.slice(0,10);
    //carosel settings
    var settings = {
      dots: true,
      arrows:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true,
            arrows:false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            },
          },
        ],
      };
  return (
    <div className='mb-[100px] mt-[100px]'>
                  {/* heading */}
                  <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl capitalize text-center">
      Featured Products
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* carosel */}
    <Slider {...settings}>
    {bestSell.map((items:any,i)=>(
        <BestSellingCard
        key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price}
        category={items.category} slug={items.slug} discount={items.discount}
        />
    ))}
        </Slider>
    </div>
  )
}

export default FeaturedProduct