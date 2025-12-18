import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { fetchProducts, fetchCategories } from '../../api/fetchProduct.js';
import ProductCard from '../ProductCard/ProductCard';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import Loader from '../Loader/Loader';

import './ProductSlider.sass';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  if (loading) return <Loader />;
  if (error)
    return <p>Failed to load products or categories. Please try again.</p>;

  return (
    <section id='products-cards'>
      <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <Slider {...settings} className='products-slider'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
