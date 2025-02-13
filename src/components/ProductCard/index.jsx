// import { Link } from 'react-router-dom';
// import './index.css';
// import PropTypes from 'prop-types';

// const ProductCard = ({ productData }) => {
//   const { title, brand, imageUrl, rating, price, id } = productData;

//   return (
//     <li className="product-item">
//       <Link to={`/products/${id}`} className="link-item">
//         <img src={imageUrl} alt={title} className="thumbnail" />
//         <h1 className="title">{title}</h1>
//         <p className="brand">by {brand}</p>
//         <div className="product-details">
//           <p className="price">Rs {price}/-</p>
//           <div className="rating-container">
//             <p className="rating">{rating}</p>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/star-img.png"
//               alt="star"
//               className="star"
//             />
//           </div>
//         </div>
//       </Link>
//     </li>
//   );
// };
// ProductCard.propTypes = {
//   productData: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     brand: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };


// export default ProductCard;

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const ProductCard = ({ productData }) => {
  const { title, brand, imageUrl, rating, price, id } = productData;

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt={title} className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
