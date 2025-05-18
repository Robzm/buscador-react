
//import './App.css'
import { SearchBar } from "./components/SearchBar"
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <>
      <div class="w-56 h-56">
        <h1>Productos</h1>
        <SearchBar search={search} onSearch={setSearch} />
      </div>
    </>
  )
}

export default App
