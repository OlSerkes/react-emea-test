import './ProductCard.sass';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { title, price, description, image } = product;

  return (
    <article className='product-card'>
      <section className='product-card__inner'>
        <div className='product-card__image'>
          <img src={image} alt={title} />
        </div>
        <div className='product-card__content'>
          <div className='product-card__txt'>
            <h3>{title}</h3>
            <p className='description'>{description?.slice(0, 100)}...</p>
          </div>
          <div className='product-card__price'>
            <p className='price'>${price}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
