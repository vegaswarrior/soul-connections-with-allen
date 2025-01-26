import Hero from "@/components/hero";
import ProductList from "@/components/shared/product/product-list";
import  {getLatestProducts } from '@/lib/actions/product.actions'

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return(
    <>
     <Hero />
     <ProductList data={latestProducts} title="Featured Products" limit={4} />

    </>
  )
}

export default HomePage;

