---
sidebar_position: 5
---

# Development Guide

This guide is for developers who want to contribute to MCPMonkey or build the extension from source.

## Building MCPMonkey

### Prerequisites

* Node.js (version specified in package.json)
* Yarn v1.x
* Firefox for testing

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/kstrikis/mcpmonkey.git
cd mcpmonkey
```

2. Install dependencies:
```bash
yarn
```

3. Start the development build:
```bash
yarn build
```

This will create a `dist` folder with the extension files.

4. Load the extension in Firefox:
   - Navigate to `about:debugging`
   - Click "This Firefox"
   - Click "Load Temporary Add-on..."
   - Select any file from the `dist` folder

5. `cd` to the server folder:
```bash
cd mcpmonkey-server
```

2. Install dependencies:
```bash
yarn
```

3. Start the development build:
```bash
yarn build
```

## Testing with the MCP Inspector

For development and testing, you can run the server with the MCP inspector:

```bash
yarn inspector
```

Then browse to localhost:5173 to manually start the server, list and run available tools, etc.

## Current Implementation

MCPMonkey currently implements these key tools:

* **browserAction Tool**:  
   * Get information about all open tabs  
   * Create new tabs  
   * Close tabs  
   * Activate (focus) tabs  
   * Duplicate tabs
* **getPageStyles Tool**:  
   * Extract styling information from web pages for AI analysis  
   * Returns structured JSON data about styles  
   * Includes global styles, computed styles, color schemes, typography

The current implementation is based on Violentmonkey and maintains full compatibility with existing userscripts. 