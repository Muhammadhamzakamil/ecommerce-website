"use client";
import BestSellingCard from "../../components/bestSellingCard"
import { useAppSelector } from '../store/hooks';

const CategoryPage = ({params}:{params:{category:string}}) => {
    const product = useAppSelector((state)=>state.products);
    const bestSell = product.filter((val)=> val.category == params.category); 
  return (
    <div>
        
                    {/* heading */}
                    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
     {params.category}
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* category page starts here */}
    <div className="flex flex-wrap justify-center gap-5 ">
{
    bestSell.map((items: any, i)=>(
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

export default CategoryPage