import React from 'react';
import Head from 'next/head';
import Theme from '../styles/theme';
import '../components/Projects/carousel-style.css';

export default function App({ Component, pageProps }) {
  const { seo = {} } = pageProps;
  const title = seo.title || 'Keitel Jovin - Full Stack Web Developer';
  const description = 'This is my Portfolio, with  an introduction of myself, my Projects and Skills, a timeline of what I accomplished, personal achievements globally.';
  const desc = seo.desc || description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
