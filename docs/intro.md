---
sidebar_position: 1
---

# Introduction to MCPMonkey

**MCPMonkey** is an MCP server and Firefox extension that enables AI agents to access and interact with your browser.

## What is MCPMonkey?

MCPMonkey is a fork of Violentmonkey that adds support for MCP (Model Context Protocol) servers. This allows AI language models like Claude to interact with your browser in meaningful ways.

### Key Features

* **MCP Server Integration**: Connect AI tools to your browser through a standardized MCP interface
* **Tab Management**: Programmatic control of browser tabs (create, close, activate, duplicate)
* **Page Style Extraction**: AI can analyze web page styling information
* **User Script Support**: Full compatibility with existing userscripts
* **Cursor Integration**: Full support for Cursor's MCP integration (v0.45.7+)

### Planned Features (Not Yet Implemented)

* **Enhanced Browser Access**: Access to browsing history, bookmarks, and more
* **Permissions Control**: Fine-grained control over what resources each MCP server can access
* **MCP Server Management**: Install and manage multiple MCP servers directly from your browser
* **Community Hub**: Share and discover useful MCP configurations and tools

## Getting Started

### Requirements

1. **Node.js** - Install from [nodejs.org](https://nodejs.org) (needed to run dependencies)
2. **Firefox Browser** - MCPMonkey is currently available as a Firefox extension
3. **An AI Tool** - Such as Claude Desktop, Cursor (v0.45.7+), or other AI applications that support MCP

### Installation

MCPMonkey is currently available as a development build that needs to be installed manually:

1. Clone the repository:
```bash
git clone https://github.com/kstrikis/mcpmonkey.git
cd mcpmonkey
```

2. Install dependencies:
```bash
yarn
```

3. Build the extension:
```bash
yarn dev
```

4. Install in Firefox:
   - Open Firefox and navigate to `about:debugging`
   - Click "This Firefox" in the left sidebar
   - Click "Load Temporary Add-on..."
   - Navigate to the `dist` folder in your MCPMonkey build directory
   - Select any file from the `dist` folder to load the extension

## Cursor Integration

If you're using Cursor v0.45.7 or higher, MCPMonkey is supported through Cursor's built-in MCP integration:

1. Install MCPMonkey as described above
2. Open Cursor and go to Settings > Features > MCP Servers
3. Configure Cursor to connect to MCPMonkey:
   - Name: MCPMonkey
   - Type: command
   - Command: `npx mcpmonkey-server`
4. Cursor's AI agent will automatically use MCPMonkey's browser tools when relevant

Note: In Cursor 0.46+, MCP settings are in their own tab and there is support for .cursor/mcp.json configuration files.

## How It Works

MCPMonkey consists of two main components:

1. **MCP Server**: Communicates with AI tools via stdio and provides MCP tools
2. **Browser Extension**: Interacts with Firefox and communicates with the MCP server

These components work together through an internal WebSocket connection, allowing the AI tools to interact with your browser through the standardized MCP interface.

## Use Cases

Here are some examples of what you can do with MCPMonkey:

* Let your AI assistant help you manage your browser tabs
* Allow AI tools to analyze and extract styling information from web pages
* Give your AI the ability to research topics across multiple tabs
* Automate browser interactions through natural language commands
* Efficiently manage browser tabs programmatically through AI

## Next Steps

Learn more about:
* [Configuring MCPMonkey](/docs/configuration)
* [MCP Servers](/docs/mcp-servers)
* [Security and Privacy](/docs/security)
* [Developing for MCPMonkey](/docs/development)
