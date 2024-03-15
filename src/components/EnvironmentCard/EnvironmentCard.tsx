import styles from './EnvironmentCard.module.css'

interface Props {
    img: string,
    text: string,
}
const EnvironmentCard = ({ text, img }: Props) => {

    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default EnvironmentCard
