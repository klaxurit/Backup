// import ButtonTest from './ButtonTest';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Swiper from './components/Networks/Swiper';
import Contact from './components/Contact/Contact';
import Cosmos from './components/Cosmos/Cosmos';
import { Footer } from './components/Footer/Footer';

function App() {
  return(
    <>
      <Navbar/>
      <Header/>
      <Products/>
      <Swiper/>
      <Contact/>
      <Cosmos/>
      <Footer/>
      {/* <ButtonTest/> */}
    </>
  );
}

export default App;
