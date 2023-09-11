"use client";
import { title } from "process"
import BestSellingCard from "./bestSellingCard"
import { useAppSelector } from "@/app/store/hooks"


const BestSelling = () => {

  const product = useAppSelector(((state)=>state.products));
  const bestSell = product.slice(0,3);
//     const bestSell = [
//         {
//         src:"/pictures/shirt.jpg",
//         alt: "White Shirt",
//        title:"Women printed shirt",
//        description:"Beautiful printed shirt for Women",
//        price:150,
//        category:"tops",
//        slug:"printed-shirt",
//     },
//     {
//         src:"/pictures/glasses.webp",
//         alt: "glasses",
//        title:"Women Black glasses",
//        description:"Beautiful Black glasses for Women in summer season",
//        price:180,
//        category:"accessories",
//        slug:"black-glasses",
//     },
//     {
//         src:"/pictures/watch.jpg",
//         alt: "watch",
//        title:"Women golden watch",
//        description:"Beautiful golden watchs for Women in every season",
//        price:200,
//        category:"accessories",
//        slug:"golden-watch",
//     },
    

// ]
  return (
    <div className='mb-[100px] mt-[100px]'>
             {/* heading */}
             <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
      Best Selling Products
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* best selling products */}
    <div className="flex flex-wrap justify-center gap-5 ">
{
    bestSell.map((items :any,i)=>(
        <BestSellingCard
        key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price}
        category={items.category} slug={items.slug} discount={items.discount}
        />
    ))
}
    </div>
 
        </div>
  )
}

export default BestSelling