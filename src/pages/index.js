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
              
              <div className={styles.quickStart}>
                <Heading as="h3">Quick Start</Heading>
                <ol>
                  <li>Add <code>npx mcpmonkey-server</code> to Cursor (Settings > Features > MCP Servers)</li>
                  <li>Install <a href="https://github.com/kstrikis/MCPMonkey/releases/download/v0.4.0/MCPMonkey-0.4.0.xpi">the Firefox browser extension</a></li>
                  <li>Click <a href="https://github.com/kstrikis/MCPMonkey/releases/download/v0.4.0/getPageStyles.user.js">here</a> to install the page style extractor userscript</li>
                </ol>
                <p><strong>Try it:</strong> Browse to a website and ask Cursor: "get the page styles and apply it to my project"</p>
              </div>
              
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
              
              <Heading as="h2">Coming Soon</Heading>
              <p>
                One of our most exciting planned features is <strong>Custom MCP Scripts</strong>. These special 
                <code>.mcp.js</code> files will let you create website-specific tools that AI assistants can use to 
                interact directly with web applications. Imagine giving your AI assistant custom abilities for your 
                favorite websites - from filling forms to extracting data or navigating complex interfaces!
              </p>
              
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
