import { BsFilterRight } from 'react-icons/bs';
import './index.css';
import PropTypes from 'prop-types';

const ProductsHeader = ({ sortbyOptions, activeOptionId, changeSortby }) => {
  const onChangeSortby = (event) => {
    changeSortby(event.target.value);
  };

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map((eachOption) => (
            <option key={eachOption.optionId} value={eachOption.optionId} className="select-option">
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
ProductsHeader.propTypes = {
  sortbyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      optionId: PropTypes.string.isRequired,
      displayText: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeOptionId: PropTypes.string.isRequired,
  changeSortby: PropTypes.func.isRequired,
};

export default ProductsHeader;

