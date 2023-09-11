
import Hero from '@/components/hero'
import Services from '@/components/services'
import Promotion from '@/components/promotion'
import Categories from '@/components/categories'
import BestSelling from '@/components/bestSelling'
import FeaturedProduct from '@/components/featuredProduct'


export default function Home() {
  return (
   <div>
    <Hero />
    <FeaturedProduct />
    <Services />
    <Promotion />
    <Categories />
    <BestSelling />
   </div>
  )
}
