import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import { Cart } from './pages/Cart';
import NavbarComponent from './components/Navbar';
import Product from './components/Product';


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>

        </BrowserRouter>

      </Provider>


    </>
  );
}

export default App;
