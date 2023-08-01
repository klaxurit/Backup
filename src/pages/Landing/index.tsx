import Header from './Header/Header';
import Products from './Product/Products';
import Swiper from './Swiper';
import Contact from '../../components/Contact';
import Cosmos from './Cosmos';

const Landing: React.FC = () => {
  return (
    <section className="Landing">
      <Header />
      <Products />
      <Swiper />
      <Contact />
      <Cosmos />
    </section>
  );
}

export default Landing;