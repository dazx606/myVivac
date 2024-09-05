import image from '../../assets/backGrounfHome.jpg';
import Book from '../../components/Book/Book';
import InformationHome from '../../components/InformationHome/InformationHome';
import InformationText from '../../components/InformationText/InformationText';
import Logos from '../../components/Logos/Logos';
import styles from './Home.module.css';

export const Home = () => {

  const texts = {
    title: 'En Myvivac encontrarás...',
    content: 'estadías, herramientas y experiencias que te ayuden a elevar tu nivel de consciencia e impacten positivamente tu vida.'
  }

  return (
    <>
      <div className={styles.backgroundImage}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.mask}></div>
        <Book />
      </div>
      <InformationText text={texts.content} title={texts.title} />
      <InformationHome />
      <Logos />
    </>
  );
};


