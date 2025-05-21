import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {

    if (products.length === 0) {
    return <p className="text-gray-500">No se encontraron productos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
