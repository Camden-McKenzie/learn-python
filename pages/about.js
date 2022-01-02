import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout title={'Camden McKenzie'} subtitle={'BS Computer Science - University of Southen Maine'}>
      <Head>
        <title>{'About'}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p> About Page </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
      </section>
    </Layout>
  )
}

