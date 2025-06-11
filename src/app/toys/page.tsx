import { ProductItem } from '@/components/ProductItem';
import { products } from '@/data/products';

export default function toys() {
  return (
    <div className='animate-fade-in grid grid-cols-1 gap-7 sm:grid-cols-2'>
      {products.map((product) => (
        <ProductItem key={product.name} productInfo={product} />
      ))}
    </div>
  );
}
