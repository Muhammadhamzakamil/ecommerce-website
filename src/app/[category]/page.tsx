
import CategoryPage from './categoryPage'



const Category = ({params}:{params:{category:string}}) => {


//   {
//     src:"/pictures/shirt9.webp",
//     alt: "multi Shirt",
//    title:" Printed shirt",
//    description:"Beautiful printed shirt for Women",
//    price:150,
//    category:"tops",
//    slug:"printed-shirt",
// },
// {
//     src:"/pictures/glasses.webp",
//     alt: "glasses",
//    title:" Black glasses",
//    description:"Beautiful Black glasses for Women in summer season",
//    price:180,
//    category:"accessories",
//    slug:"black-glasses",
// },
// {
//     src:"/pictures/watch.jpg",
//     alt: "watch",
//    title:" Golden watch",
//    description:"Beautiful golden watchs for Women in every season",
//    price:200,
//    category:"accessories",
//    slug:"golden-watch",
// },
// {
//     src:"/pictures/acesories3.jpg",
//     alt: "bracelet",
//    title:"Women Bracelets",
//    description:"Beautiful Women Bracelets ",
//    price:120,
//    category:"accessories",
//    slug:"Bracelets",
// },
// {
//     src:"/pictures/coat3.webp",
//     alt: "coat",
//    title:"Light Pink Coat",
//    description:"Beautiful Light Pink Coat ",
//    price:140,
//    category:"tops",
//    slug:"coat",
// },
// {
//   src:"/pictures/hat.jpg",
//   alt: "hat",
//  title:"Black Hat",
//  description:"Beautiful Black Hat ",
//  price:120,
//  category:"accessories",
//  slug:"hat",
// },
// {
// src:"/pictures/pant2.webp",
// alt: "pant",
// title:" Black Pant",
// description:"Beautiful Black Pant for Women",
// price:120,
// category:"pants",
// slug:"pants",
// },
// {
// src:"/pictures/pant3.webp",
// alt: "pant",
// title:" Red Pant",
// description:"Beautiful Red Pant for Women",
// price:110,
// category:"pants",
// slug:"pant-red",
// },
// {
// src:"/pictures/shoes.jpg",
// alt: "shoes",
// title:" Simple Shoes",
// description:"Beautiful Simple Shoes for Women",
// price:100,
// category:"shoes",
// slug:"shoes",
// },
// {
// src:"/pictures/shoes4.webp",
// alt: "shoes",
// title:" Jogger Shoes",
// description:"Beautiful Jogger Shoes for Women",
// price:450,
// category:"shoes",
// slug:"joggers",
// },
// {
// src:"/pictures/acesories4.webp",
// alt: "locket",
// title:"Golden Locket",
// description:"Beautiful Golden Locket ",
// price:60,
// category:"accessories",
// slug:"locket",
// },
// {
// src:"/pictures/shoes3.webp",
// alt: "shoes",
// title:" Jogger Shoes",
// description:"Beautiful Jogger Shoes for Women",
// price:500,
// category:"shoes",
// slug:"pink-shoes",
// },
// {
// src:"/pictures/coat.jpg",
// alt: "coat",
// title:"Light Brown Coat",
// description:"Beautiful Light Brown Coat ",
// price:299,
// category:"tops",
// slug:"brown-coat",
// },
// {
// src:"/pictures/pant4.webp",
// alt: "pant",
// title:" Geans Pant",
// description:"Beautiful Geans Pant for Women",
// price:180,
// category:"pants",
// slug:"geans",
// },
// ];
  return (
    <div className=' mt-[50px] mb-[100px] '>
         <CategoryPage params={params}/>
         </div>
  )
}

export default Category