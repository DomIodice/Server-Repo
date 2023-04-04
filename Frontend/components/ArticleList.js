import articleStyle from '../styles/Layout.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleItem article={article}/>
            ))}
        </div>
    )
}



export default ArticleList