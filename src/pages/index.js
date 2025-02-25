import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img 
            src="img/mcpmonkey.webp" 
            alt="MCPMonkey Logo" 
            className={styles.mainLogo} 
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with MCPMonkey 🐒
          </Link>
          <Link
            className="button button--lg button--secondary"
            href="https://github.com/kstrikis/mcpmonkey"
            style={{marginLeft: '12px'}}>
            GitHub Repository
          </Link>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.projectDescription}>
              <Heading as="h2">What is MCPMonkey?</Heading>
              <p>
                MCPMonkey is a fork of Violentmonkey, extending its powerful userscript capabilities to support
                Model Context Protocol (MCP) servers. This project bridges the gap between AI language models 
                and browser interactions.
              </p>
              
              <Heading as="h2">Key Features</Heading>
              <ul>
                <li>
                  <strong>Tab Management:</strong> Get information about open tabs, create new tabs, 
                  close tabs, activate tabs, and duplicate tabs
                </li>
                <li>
                  <strong>Page Style Extraction:</strong> Extract styling information from web pages 
                  for AI analysis with structured JSON data
                </li>
                <li>
                  <strong>User Script Support:</strong> Full compatibility with existing userscripts 
                  (inherited from Violentmonkey)
                </li>
                <li>
                  <strong>Cursor Integration:</strong> Full support for Cursor's MCP integration (v0.45.7+)
                </li>
              </ul>
              
              <Heading as="h2">Getting Started</Heading>
              <p>
                To start using MCPMonkey, follow our{' '}
                <Link to="/docs/intro">installation guide</Link> or check out the{' '}
                <Link href="https://github.com/kstrikis/mcpmonkey">GitHub repository</Link>.
              </p>
              
              <div className={styles.callToAction}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Read the Documentation
                </Link>
                <Link
                  className="button button--primary button--lg"
                  href="https://github.com/kstrikis/mcpmonkey"
                  style={{marginLeft: '12px'}}>
                  View Source
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="MCPMonkey - An MCP server and Firefox extension that enables AI agents to access and interact with your browser">
      <HomepageHeader />
      <main>
        <MainContent />
      </main>
    </Layout>
  );
}
