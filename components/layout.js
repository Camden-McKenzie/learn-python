import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'

const name = 'Learn Python'
export const siteTitle = 'Learn Python'

export default function Layout({ children, home, title, subtitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Learn Python"
          content="A modern introduction to Python3 notebooks."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className={styles.headerContainer}>
        <div className={styles.contentContainer}>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </>
            ) : (
              <>
                <h2 className={`${utilStyles.headingLg} ${utilStyles.centerText}`}>
                  <Link href="/">
                    <a className={utilStyles.title}>{title}</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a className={utilStyles.subtitle}>{subtitle}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div >
  )
}
