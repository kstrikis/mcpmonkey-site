---
sidebar_position: 3
---

# Custom MCP Scripts

Model Context Protocol (MCP) is a standardized way for AI assistants to access tools and resources. MCPMonkey extends this capability, allowing you to create custom MCP scripts that can interact with websites directly.

## What is an MCP Server?

An MCP server is a standardized interface that allows AI models to access real-world tools and information. It provides three main components:

1. **Tools**: Functions that AI can call to perform actions
2. **Resources**: Data sources the AI can access
3. **Prompts**: Special instructions prefixed with @MCP that configure how the AI operates

For MCPMonkey, the MCP server specifically provides browser access capabilities to AI tools like Claude or Cursor's AI assistant.

The server runs locally on your machine and communicates with both:
1. The AI tool (via stdio transport)
2. The MCPMonkey browser extension (via internal WebSocket connection)

## Custom MCP Scripts (.mcp.js)

MCPMonkey's long-term plan is to allow you to extend its capabilities through custom `.mcp.js` files. These files would let you:

- Define additional tools with custom schemas
- Inject JavaScript code into matching websites
- Create website-specific tools that can interact with page elements
- Provide AI agents with predefined tooling for specific websites

### How Custom MCP Scripts Work

1. **Tool Definition**: Each `.mcp.js` file defines tools with names, descriptions, and parameter schemas (just like standard MCP tools)
2. **Website Matching**: Scripts specify which websites they should run on (similar to userscripts)
3. **Code Injection**: When you visit a matching website, the custom JavaScript is injected
4. **Tool Implementation**: The script provides the actual JavaScript implementation for the tool
5. **AI Access**: AI assistants can then use these tools to interact with the website

### Example Uses

- Create a tool that can fill out forms on specific websites
- Add a tool that can extract structured data from a particular web application
- Provide a navigation tool optimized for a specific web service
- Enable AI assistants to interact with web-based editors or tools

## MCPMonkey Architecture

MCPMonkey consists of these main components that work together:

1. **MCP Server**:
   - Communicates with AI tools using stdio transport
   - Implements the Model Context Protocol
   - Provides tools for browser interaction
   - Runs as a Node.js process

2. **Browser Extension**:
   - Firefox extension that interacts with your browser
   - Communicates with the MCP server via internal WebSocket connection (port 3025)
   - Executes browser operations requested by the server
   - Loads and manages custom MCP scripts

3. **Custom MCP Scripts** (`.mcp.js` files):
   - Define additional tools and capabilities
   - Inject code into matching websites
   - Provide website-specific functionality to AI tools

The components communicate securely, allowing AI tools to interact with both the browser and specific websites in a controlled manner.

## Built-in MCP Tools

The MCPMonkey server provides these built-in tools to AI models:

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

## Creating Custom MCP Scripts (Not yet supported)

To create a custom MCP script for MCPMonkey:

1. Create a `.mcp.js` file with your tool definitions and implementations
2. Define the websites the script should match (using patterns)
3. Implement the JavaScript functions that will handle tool invocations
4. Install the script through the MCPMonkey dashboard (coming soon)

### Sample Script Structure

```javascript
// ==MCP==
// @name           Example Website Helper
// @match          https://example.com/*
// @description    Tools for interacting with Example.com
// ==/MCP==

// Define your MCP tool
const exampleTool = {
  name: "exampleWebsiteTool",
  description: "Interact with example.com",
  parameters: {
    action: {
      type: "string",
      enum: ["search", "navigate", "extract"],
      description: "The action to perform"
    },
    query: {
      type: "string",
      description: "The search query or navigation target"
    }
  },
  
  // Implement the actual tool functionality
  execute: async function(params) {
    if (params.action === "search") {
      const searchBox = document.querySelector('#search-input');
      searchBox.value = params.query;
      document.querySelector('#search-button').click();
      return { success: true, message: "Search performed" };
    }
    // Additional actions...
  }
};

// Register the tool with MCPMonkey
registerMCPTool(exampleTool);
```

## Security Considerations

When using custom MCP scripts, be aware of the following security considerations:

- Scripts can access and modify web page content
- Each script should be granted only the permissions it requires
- Review script code or use trusted sources before installation
- MCPMonkey provides granular permission controls for each script

For more information, see the [Security](/docs/security) documentation. 