import Header from '../components/Header/Header';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import './Home.sass';

const Home = () => {
  return (
    <main id='products'>
      <div className='products__wrapper'>
        <Header />
        <ProductSlider />
      </div>
    </main>
  );
};

export default Home;
