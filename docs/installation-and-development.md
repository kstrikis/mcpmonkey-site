---
sidebar_position: 2
---

# Installation and Development

This guide provides detailed installation, configuration, and development instructions for MCPMonkey. For a quick start, see the [Quick Install Guide](/docs/intro#quick-install-guide).

> **Note:** Advanced configuration features and settings interface are planned for future releases but are not currently implemented.

## Components Overview

MCPMonkey consists of three main components:

1. **MCP Server**: The server that connects your AI tools to the browser extension
2. **Firefox Extension**: The browser extension that enables interaction with Firefox
3. **Page Styles Userscript**: A userscript that extracts styling information from web pages

## Installation Methods

### Standard Installation (Recommended)

1. Configure Cursor to use the MCPMonkey server
2. Install the Firefox Extension using the .xpi file
3. Install the Page Styles Userscript

See the [Quick Install Guide](/docs/intro#quick-install-guide) for step-by-step instructions.

### Developer Installation

If you prefer to build the extension yourself rather than using the pre-packaged .xpi file:

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
yarn build
```
This will create a `dist` folder with the extension files.

4. Load the extension in Firefox:
   - Open Firefox and navigate to `about:debugging`
   - Click "This Firefox" in the left sidebar
   - Click "Load Temporary Add-on..."
   - Navigate to the `dist` folder in your MCPMonkey build directory
   - Select any file from the `dist` folder to load the extension

### Debugging the Extension

After loading the extension as a temporary add-on, you can:

- **View Console Logs**: Click the "Inspect" button next to the MCPMonkey extension in the about:debugging page to open the browser toolbox. This shows you console logs and errors from the extension.
- **Reload the Extension**: Click the "Reload" button next to the MCPMonkey extension to refresh it without having to remove and re-add it. This is particularly useful if the WebSocket service has timed out or if you've made changes to the extension code.

> **Note**: As this is a temporary installation, you'll need to reload the extension each time you restart Firefox.

## MCP Server Configuration

### Cursor Integration (v0.45.7+)

To integrate MCPMonkey with Cursor, you have several options:

#### Option 1: Use the Published NPM Package (Recommended)

1. Open Cursor and go to Settings > Features > MCP Servers (or MCP tab in Cursor 0.46+)
2. Add a new MCP server with this configuration:
   - Name: MCPMonkey
   - Type: command
   - Command: `npx mcpmonkey-server`
3. Save your settings
4. Ensure MCPMonkey extension and userscript are installed in Firefox
5. Cursor's AI agent will now be able to use MCPMonkey's browser tools

#### Option 2: Build and Run the Server Yourself

If you prefer to build the server from source:

1. Clone and build the server:
```bash
git clone https://github.com/kstrikis/mcpmonkey.git
cd mcpmonkey-server
yarn
yarn build
```

2. Configure in Cursor:
   - Name: MCPMonkey
   - Type: command
   - Command: `node /absolute/path/to/mcpmonkey-server/build/index.js`

#### Option 3: Project-Specific Configuration (Cursor 0.46+)

In Cursor 0.46+, MCP settings are in their own tab and there is support for .cursor/mcp.json configuration files.

For project-specific integration, create a `.cursor/mcp.json` file in your project root:

Using the NPM package:
```json
{
  "mcpServers": {
    "mcpmonkey-server": {
      "command": "npx",
      "args": [
        "mcpmonkey-server"
      ]
    }
  }
}
```

Or using a local build:
```json
{
  "mcpServers": {
    "mcpmonkey-server": {
      "command": "node",
      "args": [
        "/path/to/built/files/build/index.js"
      ]
    }
  }
}
```

### Other AI Tools

For other AI tools that support the Model Context Protocol:

1. Configure the tool to connect to the MCPMonkey server
2. Use stdio transport to connect to the server
3. Use `npx mcpmonkey-server` as the command

## MCP Tools

MCPMonkey provides the following tools to AI models:

### browserAction Tool

This tool provides tab management capabilities:

- `getTabs`: Retrieve information about all open tabs
- `createTab`: Open a new tab with a specified URL
- `closeTabs`: Close one or more tabs by ID
- `activateTab`: Switch to a specific tab
- `duplicateTab`: Clone an existing tab

### getPageStyles Tool

This tool extracts styling information from web pages:

- Returns structured JSON data about global styles and computed styles
- Provides color schemes and typography information
- Helps AI understand web page design

## Technical Architecture

MCPMonkey's architecture consists of:

### 1. MCP Server

- Communicates with AI tools using stdio transport
- Provides MCP tools (browserAction, getPageStyles)
- Runs as a Node.js process

### 2. Browser Extension

- Firefox extension that interacts with your browser
- Communicates with the MCP server via internal WebSocket connection
- Provides the actual browser functionality

### 3. Page Styles Userscript

- Runs in the context of web pages
- Extracts styling information when requested
- Communicates with the extension via messaging

The internal communication between these components happens over WebSocket on port 3025, but this is not exposed as a connection method for external clients. 