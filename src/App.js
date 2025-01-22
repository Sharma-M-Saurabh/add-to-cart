import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import { Cart } from './pages/Cart';
import NavbarComponent from './components/Navbar';
import Product from './components/Product';
// import ('https://fonts.cdnfonts.com/css/playfair-display');



function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            {/* <div style={{backgroundColor : "#e6e8fa"}}> */}

            <Route path="/" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            {/* </div> */}

          </Routes>

        </BrowserRouter>

      </Provider>


    </>
  );
}

export default App;
