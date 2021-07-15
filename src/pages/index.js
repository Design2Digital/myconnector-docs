import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

/**
 *
 * @param {{
 *   title: string | React.ReactNode;
 *   description: string | React.ReactNode;
 *   link?: string;
 * }} param0
 */
function Section({ title, description, link }) {
  const sectionComponent = <h3>{title}</h3>;
  const fullLink = link;
  return (
      <>{link ? <Link to={fullLink}>{sectionComponent}</Link> : sectionComponent}</>
  );
}
const section = {
  title: <>Using ApiDoc Component</>,
  link: '/custom-layout/',
  description: (
    <>
      A page using ApiDoc component in{' '}
      <a href="https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc">
        docusaurus-theme-redoc
      </a>
    </>
  ),
}
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            For management{/* Start Learning - 5min ⏱️ */}
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/api/"
          >
            For Developers
          </Link>
          {/* <Section {...section} /> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
