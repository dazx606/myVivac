import image from '../../assets/backGrounfHome.jpg';
import Book from '../../components/Book/Book';
import InformationText from '../../components/InformationText/InformationText';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.backgroundImage}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.mask}></div>
        <Book />
      </div>
        <InformationText />
    </>
  );
};

export default Home;
