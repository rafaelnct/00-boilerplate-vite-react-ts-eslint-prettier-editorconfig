import styles from './index.module.css'

interface PostPros {
    author: string
    content: string
}

export function Post({ author, content }: PostPros) {
    return (
        <div className={styles.bola}>
            <p>{content}</p>
            <small>
                <strong>{author}</strong>
            </small>
        </div>
    )
}
