import './App.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
import CartDetails from './components/CartDetails';
// import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Cart/>}></Route>
          <Route path='/cart' element={<CartDetails/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
