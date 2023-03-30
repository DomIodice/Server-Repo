import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <nav className={navStyles.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/author'>Author</Link>
                    </li>
                    <li>
                        <Link href='/article'>Article</Link>
                    </li>
                    <li>
                        <Link href='/newAuthor'>Add New Author</Link>
                    </li>
                    <li>
                        <Link href='/newArticle'>Add New Article</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Nav