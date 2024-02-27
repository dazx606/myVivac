import styles from './Book.module.css';
import marker from '../../assets/marker.png';
import calendar from '../../assets/calendar.png';
import user from '../../assets/user.png'

const Book = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.iconLine}>
          <img src={marker} alt="" className={styles.icon}/>
          <p className={styles.text1}>Destino</p>
        </div>
        <p className={styles.text2}>¿A dónde quieres ir?  ▼</p>
      </div>

      <div>
        <div className={styles.iconLine}>
        <img src={calendar} alt="" className={styles.icon}/>

          <p>Llegada - salida</p>
        </div>
        <p className={styles.text2}>Agregar fechas ▼</p>
      </div>

      <div>
        <div className={styles.iconLine}>
        <img src={user} alt="" className={styles.icon}/>

          <p>Huéspedes</p>
        </div>
        <p className={styles.text2} style={{color:'black'}}>2 huéspedes ▼</p>
      </div>

      <div>
        <button className={styles.button}>Buscar</button>
      </div>
    </div>
  );
};

export default Book;
