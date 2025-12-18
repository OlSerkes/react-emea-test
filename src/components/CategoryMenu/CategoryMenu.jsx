import './CategoruMenu.sass';

const CategoryMenu = ({ categories, activeCategory, onSelect }) => {
  return (
    <nav className='category-menu'>
      <button
        className={`btn category-menu__btn ${
          activeCategory === 'all' ? 'active' : ''
        }`}
        onClick={() => onSelect('all')}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`btn category-menu__btn ${
            activeCategory === category ? 'active' : ''
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryMenu;
