---
sidebar_position: 3
---

# MCP Servers

MCP (Model Context Protocol) servers are a core component of the MCPMonkey architecture. They act as a bridge between AI language models and your browser.

## What is an MCP Server?

An MCP server is a standardized interface that allows AI models to access real-world tools and information. For MCPMonkey, the MCP server specifically provides browser access capabilities to AI tools like Claude or OpenAI models.

The server runs locally on your machine and communicates with both:
1. The AI tool (via stdio transport)
2. The MCPMonkey browser extension (via internal WebSocket connection)

## MCPMonkey Architecture

MCPMonkey consists of two main components that work together:

1. **MCP Server**:
   - Communicates with AI tools using stdio transport
   - Implements the Model Context Protocol
   - Provides tools for browser interaction
   - Runs as a Node.js process

2. **Browser Extension**:
   - Firefox extension that interacts with your browser
   - Communicates with the MCP server via internal WebSocket connection (port 3025)
   - Executes browser operations requested by the server

The browser extension and MCP server communicate via a WebSocket connection, but this is purely internal. External AI tools connect to the MCP server only through stdio transport.

## Available MCP Tools

The MCPMonkey server provides the following tools to AI models:

### browserAction Tool

This tool provides comprehensive tab management capabilities:

- `getTabs`: Retrieve information about all open tabs
- `createTab`: Open a new tab with a specified URL
- `closeTabs`: Close one or more tabs by ID
- `activateTab`: Switch to a specific tab
- `duplicateTab`: Clone an existing tab

### getPageStyles Tool

This tool extracts styling information from web pages:

- Retrieves global styles and computed styles
- Extracts color schemes and typography information
- Assists AI in understanding web page design
- Uses content script bridge for secure communication



Note: In Cursor 0.46+, MCP settings are in their own tab and there is support for .cursor/mcp.json configuration files.

## Custom MCP Tools (Not yet supported)

You can also develop custom MCP servers that extend MCPMonkey's capabilities. Custom servers can be installed and managed through the MCPMonkey dashboard.

### Benefits of Custom Servers

- Add specialized functionality for specific use cases
- Implement custom security policies
- Integrate with other tools and services
- Provide domain-specific capabilities to AI models

### Developing Custom Servers (Not yet implemented)

To develop a custom MCP tool for MCPMonkey: (Not yet supported)

1. Use the MCPMonkey Server SDK
2. Define your server's permissions and capabilities
3. Implement your custom tools following the MCP specification
4. Package your server as a .mcp.js file
5. Publish to our community hub

## Security Considerations

When using MCP servers, be aware of the following security considerations:

- Servers run locally on your machine and can access browser data
- Each server should be granted only the permissions it requires
- Review server code or use trusted sources before installation
- MCPMonkey provides granular permission controls for each server

For more information, see the [Security](/docs/security) documentation. 