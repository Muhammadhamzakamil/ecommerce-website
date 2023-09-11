import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
          {/* heading */}
          <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
       Our Categories
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    {/* categoeies */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {/* category 1 */}
<div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
    <Link href={"/tops"}>
    <Image src={require("/public/pictures/coat2.webp")} alt='Tops' width={350} height={350}
    className='rounded-xl duration-500 group-hover:scale-125 '  />
    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Tops</h1>
    </div>
    <div className='block lg:hidden absolute  bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Tops</h1>
    </div>
    </Link>
</div>
        {/* category 2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
    <Link href={"/pants"}>
    <Image src={require("/public/pictures/pant4.webp")} alt='Pants' width={350} height={350}
    className='rounded-xl duration-500 group-hover:scale-125 '  />
    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Pants</h1>
    </div>
    <div className='block lg:hidden absolute  bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Pants</h1>
    </div>
    </Link>
</div>
        {/* category 3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
    <Link href={"/accessories"}>
    <Image src={require("/public/pictures/acesories2.webp")} alt='Accessories' width={350} height={350}
    className='rounded-xl duration-500 group-hover:scale-125 '  />
    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Accessories</h1>
    </div>
    <div className='block lg:hidden absolute  bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Accessories</h1>
    </div>
    </Link>
</div>
      {/* category 4 */}
      <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
    <Link href={"/shoes"}>
    <Image src={require("/public/pictures/shoes3.webp")} alt='Shoes' width={350} height={350}
    className='rounded-xl duration-500 group-hover:scale-125 '  />
    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Shoes</h1>
    </div>
    <div className='block lg:hidden absolute  bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
        <h1 className='uppercase'>Shoes</h1>
    </div>
    </Link>
</div>
    </div>
    </div>
  )
}

export default Categories