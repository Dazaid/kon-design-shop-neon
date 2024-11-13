import { Route, Routes } from 'react-router-dom';

import BuyLightBox from './components/BuyComponents/BuyLightBox';
import BuyNeon from './components/BuyComponents/BuyNeon';
import Footer from './components/Footer';
import { FormProvider } from './context/FormContext';
import Home from './components/Home';
import Layout from './components/Layout';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <FormProvider>
      <NavBar />
        <Routes>
          <Route
            path="/neon"
            element={<BuyNeon />}
          />
          <Route
            path="/lightBox"
            element={<BuyLightBox />}
          />
        </Routes>
      <Routes>
        <Route
          path="/kon-design-shop-neon"
          element={<Layout />}>
          <Route
            index
            element={<Home />}
            />
        </Route>
      </Routes>
      <Footer />
            </FormProvider>
    </>
  );
}

export default App;
