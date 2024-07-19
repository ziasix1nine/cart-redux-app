
import './App.css';
import AddCartItem from './Components/AddCartItem';
import ItemList from './Components/ItemList';
import Navbar from './Components/NavBar';
import ShoppingCart from './Components/ShoppingCart';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <ShoppingCart/>
    <AddCartItem></AddCartItem>
    <ItemList></ItemList>
    </>
  );
}

export default App;
