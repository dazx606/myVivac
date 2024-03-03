import styles from './InformationText.module.css'

const InformationText = () => {
    return (
        <div className={styles.container}>
            <div style={{maxWidth:1200}}>
                <h3>En Myvivac encontrarás...</h3>
                <p>estadías, herramientas y experiencias que te ayuden a elevar tu nivel de
                    consciencia e impacten positivamente tu vida.</p>

            </div>
        </div>
    )
}

export default InformationText
