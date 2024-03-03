import image from '../../assets/backGrounfHome.jpg';
import Book from '../../components/Book/Book';
import InformationHome from '../../components/InformationHome/InformationHome';
import InformationText from '../../components/InformationText/InformationText';
import Logos from '../../components/Logos/Logos';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <div className={styles.backgroundImage}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.mask}></div>
        <Book />
      </div>
        <InformationText />
        <InformationHome/>
        <Logos/>
    </>
  );
};


