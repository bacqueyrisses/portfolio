/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
export default function Home() {
    // const projects = [
    //   {
    //     title: 'Documentation',
    //     description: 'Find in-depth information about Next.js features and API.',
    //     link: 'https://nextjs.org/docs',
    //   },
    //   {
    //     title: 'Documentation',
    //     description: 'Find in-depth information about Next.js features and API.',
    //     link: 'https://nextjs.org/docs',
    //   },
    //   {
    //     title: 'Documentation',
    //     description: 'Find in-depth information about Next.js features and API.',
    //     link: 'https://nextjs.org/docs',
    //   },
    //   {
    //     title: 'Documentation',
    //     description: 'Find in-depth information about Next.js features and API.',
    //     link: 'https://nextjs.org/docs',
    //   },
    // ]
    const projects = [];

    return (
        <div className={styles.container}>
            <Head>
            <div className="content" dangerouslySetInnerHTML={{__html: 
            
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHP355G');</script>
            
            
  
            }}></div>
                <title>Enzo Bacqueyrisses | Portfolio</title>
                <meta
                    name="description"
                    content="Welcome to Enzo Bacqueyrisses' Portfolio"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>🌍</text></svg>"
                />
             

            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    🌎{' '}
                    <a
                        target="_blank"
                        href="https://github.com/bacqueyrisses/"
                        rel="noreferrer"
                    >
                        Enzo Bacqueyrisses
                    </a>
                </h1>


                <p className={styles.description}>
                    Work in progress being a{' '}
                    <code className={styles.code}>dEvElOpEr</code>
                </p>

                {projects.length > 0 && (
                    <div className={styles.grid}>
                        {projects.map((project, key) => (
                            <a
                                key={key}
                                href={project.link}
                                className={styles.card}
                            >
                                <h2>{project.title} &rarr;</h2>
                                <p>{project.description}</p>
                            </a>
                        ))}
                    </div>
                )}
                {projects.length == 0 && (
                    <p style={{ fontSize: '2rem' }}>No projects yet :(</p>
                )}
            </main>

            <footer className={styles.footer}>
                <div>Made with 🍺</div>
            </footer>
        </div>
    );
}
