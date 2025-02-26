---
sidebar_position: 1
---

# Introduction to MCPMonkey

**MCPMonkey** is an MCP server and Firefox extension that enables AI agents to access and interact with your browser.

## What is MCPMonkey?

MCPMonkey is a fork of Violentmonkey that adds support for MCP (Model Context Protocol) servers. This allows AI language models like Claude to interact with your browser in meaningful ways.

## Quick Install Guide

MCPMonkey consists of three components that you need to install:

### 1. Configure Cursor to Use MCPMonkey

1. Open Cursor (v0.45.7+) and go to Settings > Features > MCP Servers
2. Add a new MCP server:
   - Name: MCPMonkey
   - Type: command
   - Command: `npx mcpmonkey-server`
3. Save your settings

### 2. Install the Firefox Extension

1. Download the .xpi file from [GitHub Releases](https://github.com/kstrikis/MCPMonkey/releases/download/v0.4.0/MCPMonkey-0.4.0.xpi)
2. In Firefox, go to Add-ons and Themes (about:addons)
3. Click the gear icon and select "Install Add-on From File..."
4. Select the downloaded .xpi file and follow the prompts

### 3. Install the Page Styles Userscript

1. After installing the extension, click this link: [getPageStyles.user.js](https://github.com/kstrikis/MCPMonkey/releases/download/v0.4.0/getPageStyles.user.js)
2. The MCPMonkey extension will show an install dialog
3. Click "Install" to add the userscript

For advanced installation options including building from source, see the [Installation and Development Guide](/docs/installation-and-development) page.

## What Do I Do With It?

Once you've completed the installation:

1. Start a new Cursor session. You should see a green light in the MCP server status, and MCPMonkey tools should appear in the available tools list.
2. Open Firefox with some tabs (make sure the MCPMonkey extension is active).
3. Now you can ask Cursor natural language questions about your browser, such as:

* **"Please look at what tabs I have open"** - Cursor will use MCPMonkey to get information on your current Firefox tabs
* **"Open up a website that I might like"** - Cursor can create new tabs in your browser
* **"Get the page styles from my current tab and help me use those colors in my project"** - Cursor can extract styling information like colors, fonts, and spacing from the active tab

These are just a few examples - the power of MCPMonkey is that it allows AI assistants to interact with your browser through natural language commands.

## Key Features

* **MCP Protocol Support**: Connect AI tools to your browser through a standardized Model Context Protocol interface
* **Tab Management**: Programmatic control of browser tabs (create, close, activate, duplicate)
* **Page Style Extraction**: AI can analyze web page styling information
* **User Script Support**: Full compatibility with existing userscripts
* **Cursor Integration**: Full support for Cursor's MCP integration (v0.45.7+)

## Planned Features (Not Yet Implemented)

* **Enhanced Browser Access**: Access to browsing history, bookmarks, and more
* **Permissions Control**: Fine-grained control over what resources each MCP server can access
* **Custom MCP Scripts**: Create `.mcp.js` files that add website-specific tools and functionality, allowing AI to interact with web applications through custom JavaScript
* **MCP Server Management**: Install and manage multiple MCP servers directly from your browser
* **Community Hub**: Share and discover useful MCP configurations and tools

## How It Works

MCPMonkey consists of two main components:

1. **MCP Server**: Communicates with AI tools via stdio and provides MCP tools
2. **Browser Extension**: Interacts with Firefox and communicates with the MCP server

These components work together through an internal WebSocket connection, allowing the AI tools to interact with your browser through the standardized MCP interface.

In future versions, we plan to add a third component:

3. **Custom MCP Scripts**: Website-specific JavaScript files (`.mcp.js`) that will enable AI assistants to interact with specific web applications through tailored tools

## Use Cases

Here are some examples of what you can do with MCPMonkey:

* Let your AI assistant help you manage your browser tabs
* Allow AI tools to analyze and extract styling information from web pages
* Give your AI the ability to research topics across multiple tabs
* Automate browser interactions through natural language commands
* Efficiently manage browser tabs programmatically through AI

## Next Steps

Learn more about:
* [Installation and Development](/docs/installation-and-development)
* [Custom MCP Scripts](/docs/mcp-servers)
* [Security and Privacy](/docs/security)
