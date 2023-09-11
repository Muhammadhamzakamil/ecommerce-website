import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* heading */}
        <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
       Our Promotions
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* promotions starts here */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* 1st child */}
        <div className="hero h-[25rem] promo-1 rounded-xl" >
  <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className='text-myOrange'>60% 
        </span> off
        </h1>
      <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">Flash Sale, get upto 60% off on the season variant.</p>
     
    </div>
  </div>
</div>
        {/* 2nd child */}
        <div className="hero h-[25rem] promo-2 rounded-xl" >
  <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get upto <span className='text-myOrange'>30% 
        </span> off
        </h1>
      <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">Flash Sale, get upto 30% off on the New shirt.</p>
     
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Promotion