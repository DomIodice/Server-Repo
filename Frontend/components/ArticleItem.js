import articleStyles from '../styles/Layout.module.css'
import Link from 'next/link'
import RedLink from 'next/link'

const ArticleItem = ({article, href}) => {
    return(
        <div>
            <Link href="/article/id" as={`/article/${article.id}`} passHref legacyBehavior>          
                <Link legacyBehavior>    
                    <h3>{article.name} &rarr;</h3>
                </Link>    
            </Link>
        </div>
    )
}

export default ArticleItem