---
sidebar_position: 2
---

# Configuration

This guide explains how to configure and use MCPMonkey with AI tools.

> **Note:** Advanced configuration features and settings interface are planned for future releases but are not currently implemented.

## AI Tool Integration

Here's how to connect MCPMonkey with popular AI tools:

### Claude Desktop

To use MCPMonkey with Claude Desktop:

1. Ensure MCPMonkey is installed and running in Firefox
2. Edit your Claude Desktop config.json file:

```json
{
  "mcp": {
    "servers": [
      {
        "name": "MCPMonkey",
        "command": "npx mcpmonkey-server"
      }
    ]
  }
}
```

Location of config.json:
* Mac: `~/Library/Application Support/Claude/config.json`
* Windows: `%APPDATA%\Claude\config.json`

3. Restart Claude Desktop
4. Claude will now be able to interact with your browser through MCPMonkey

### Cursor (v0.45.7+)

To integrate MCPMonkey with Cursor:

1. Ensure MCPMonkey is installed and running in Firefox
2. Open Cursor and go to Settings > Features > MCP Servers
3. Add a new MCP server with this configuration:
   - Name: MCPMonkey
   - Type: command
   - Command: `npx mcpmonkey-server`
4. Save your settings
5. Cursor's AI agent will now be able to use MCPMonkey's browser tools

Note: In Cursor 0.46+, MCP settings are in their own tab and there is support for .cursor/mcp.json configuration files.

### Other AI Tools

For other AI tools that support the Model Context Protocol:

1. Configure the tool to connect to the MCPMonkey server
2. Use stdio transport to connect to the server
3. Use `npx mcpmonkey-server` as the command

## How MCPMonkey Works

MCPMonkey consists of two main components:

### 1. MCP Server

- Communicates with AI tools using stdio transport
- Provides MCP tools (browserAction, getPageStyles)
- Runs as a Node.js process

### 2. Browser Extension

- Firefox extension that interacts with your browser
- Communicates with the MCP server via internal WebSocket connection
- Provides the actual browser functionality

The internal communication between these components happens over WebSocket on port 3025, but this is not exposed as a connection method for external clients. 