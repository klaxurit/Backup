import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Swiper from '../components/Networks/Swiper';
import Contact from '../components/Contact/Contact';
import Cosmos from '../components/Cosmos/Cosmos';

const Landing: React.FC = () => {
  return (
    <section className="Landing">
      <Header/>
      <Products/>
      <Swiper/>
      <Contact/>
      <Cosmos/>
    </section>
  );
}

export default Landing;