import styles from './InformationText.module.css'

interface Props{
    title:string,
    text:string,
}

const InformationText = ({title, text}:Props) => {
    return (
        <div className={styles.container}>
            <div style={{maxWidth:1200}}>
                <h3>{title}</h3>
                <p>{text}</p>

            </div>
        </div>
    )
}

export default InformationText
