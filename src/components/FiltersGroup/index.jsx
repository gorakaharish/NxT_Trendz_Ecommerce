import PropTypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'

import './index.css'

const FiltersGroup = ({
  ratingsList,
  changeRating,
  activeRatingId,
  categoryOptions,
  changeCategory,
  activeCategoryId,
  enterSearchInput,
  changeSearchInput,
  searchInput,
  clearFilters,
}) => {
  const renderRatingsFiltersList = () =>
    ratingsList.map(({ ratingId, imageUrl }) => (
      <li
        key={ratingId}
        className="rating-item"
        onClick={() => changeRating(ratingId)}
      >
        <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-img" />
        <p className={`and-up ${activeRatingId === ratingId ? 'active-rating' : ''}`}>& up</p>
      </li>
    ))

  const renderProductCategories = () =>
    categoryOptions.map(({ categoryId, name }) => (
      <li
        key={categoryId}
        className="category-item"
        onClick={() => changeCategory(categoryId)}
      >
        <p className={`category-name ${activeCategoryId === categoryId ? 'active-category-name' : ''}`}>{name}</p>
      </li>
    ))

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={e => changeSearchInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && enterSearchInput()}
        />
        <BsSearch className="search-icon" />
      </div>

      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderProductCategories()}</ul>

      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>

      <button type="button" className="clear-filters-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

FiltersGroup.propTypes = {
  ratingsList: PropTypes.arrayOf(
    PropTypes.shape({
      ratingId: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeRating: PropTypes.func.isRequired,
  activeRatingId: PropTypes.number.isRequired,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeCategory: PropTypes.func.isRequired,
  activeCategoryId: PropTypes.number.isRequired,
  enterSearchInput: PropTypes.func.isRequired,
  changeSearchInput: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  clearFilters: PropTypes.func.isRequired,
}

export default FiltersGroup
