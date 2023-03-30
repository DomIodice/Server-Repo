import Head from "next/head"
import AuthorList from "../components/AuthorList"
import * as React from 'react';


export default function Author ({ authors }) {
  return (
    <>
    <div>
        <Head>
            <title>
                Author
            </title>
        </Head>
    </div>
    <div>
        <h1>Author</h1>
    </div>
      <div>
        <AuthorList authors={authors}/>
      </div>
    </>
  );
}



export const getStaticProps  = async () => {
    const res = await fetch (`http://localhost:3001/author`)
    const authors = await res.json()
  
    return {
      props: {
        authors
      }
    }
}