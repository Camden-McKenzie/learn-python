import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import Notebook from '../../../components/notebook'

export default function Post({ postData }) {
  return (
    <Layout title={postData.title} subtitle={postData.subtitle}>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <Notebook postData={postData} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
