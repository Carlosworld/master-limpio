import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ShopCategories />
      {/* <FeaturedProducts /> */}
      <Mapa />
      <Contacto />
    </>
  );
}
