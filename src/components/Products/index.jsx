import AllProductsSection from '../AllProductSection';
import PrimeDealsSection from '../PrimeDealsSection';
import Header from '../Header';

import './index.css';

const Products = () => {
  return (
    <>
      <Header />
      <div className="product-sections">
        <PrimeDealsSection />
        <AllProductsSection />
      </div>
    </>
  );
};

export default Products;
