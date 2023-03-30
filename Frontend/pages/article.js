import Head from "next/head"
import ArticleList from '../components/ArticleList'

export default function Article ({articles}) {

    return (
        <div>
            <Head>
                <title>Article</title>
            </Head>
            <div>
                <h1>Article</h1>
            </div>
            <div>
                <ArticleList articles={articles}/>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch (`http://localhost:3001/article`)
    const articles = await res.json()
  
    return {
      props: {
        articles
      }
    }
  }


