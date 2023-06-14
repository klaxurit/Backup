// import ButtonTest from './ButtonTest';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplayFormat } from './store/actions/displayFormat';

import Navbar from './components/Navbar/Navbar'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDisplayFormat(window.innerWidth >= 768 ? 'desktop' : 'mobile'));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
  return(
    <>
      <Navbar/>
      {/* <ButtonTest/> */}
    </>
  );
}

export default App;
