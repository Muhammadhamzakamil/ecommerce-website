import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className=" body-font mb-[100px] mt-[100px]">
  <div className="container px-5  mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
       Our Services
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* delivery */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={require("/public/pictures/delivery.png")} alt='delivery' width={200} height={200} />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
           Free Delivery
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
           Free Delivery on order Above $1000
          </p>
          
        </div>
      </div>
           {/* 24/7 services */}
           <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={require("/public/pictures/service.jpg")} alt='delivery' width={200} height={200} />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
           24/7 Customer Services
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
           For Queries and Questions Feel Free to Contact
          </p>
          
        </div>
      </div>
         {/* money back*/}
         <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={require("/public/pictures/money2.jpg")} alt='delivery' width={200} height={200} />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
          Money Back Guarantee
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
        Get Money Back Guarantee on Damage Products
          </p>
          
        </div>
      </div>
    </div>
   
  </div>
</section>

  )
}

export default Services