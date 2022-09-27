import { Post } from './components/Post'
import styles from './App.module.css'

export function App() {
    return (
        <div className={styles.wrapper}>
            <Post
                author='Rafael Nascimento'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa distinctio, nemo, dolorem eum deserunt dolore velit cumque labore facere, asperiores exercitationem magnam enim voluptates! Ipsum veritatis vitae sapiente ipsam.'
            />
            <Post
                author='João Roberto'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa distinctio, nemo, dolorem eum deserunt dolore velit cumque labore facere, asperiores exercitationem magnam enim voluptates! Ipsum veritatis vitae sapiente ipsam.'
            />
            <p>bolachas somos nozes</p>
        </div>
    )
}
