import { useEffect, useState } from 'react';
import { SearchBar } from "./components/SearchBar";
import { ProductList } from "./components/ProductList";
import { Header } from './components/Header';


function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Obtener categorías únicas
  const categories = Array.from(
    new Set(products.map(product => product.category.name))
  );

  // Filtrar productos por búsqueda y categoría seleccionada
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === '' || product.category.name === selectedCategory)
  );

  return (
    <div className="mx-24">
      
      <Header/>

      {/* Buscador y botones de categorías */}
      <div className="flex flex-wrap gap-4 items-center mb-6 mt-10">
        <SearchBar search={search} onSearch={setSearch} />

        <button
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 rounded cursor-pointer ${
            selectedCategory === '' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Todos
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
