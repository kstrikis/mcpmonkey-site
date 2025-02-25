---
sidebar_position: 4
---

# Security and Privacy

> **Note:** Detailed security and permission features are planned for future versions of MCPMonkey, but are not yet implemented.

## Current Security Considerations

When using MCPMonkey, please be aware:

- The browser extension and MCP server communicate via an internal WebSocket connection on port 3025
- This connection is local-only (localhost)
- The MCP server can access browser data via the MCPMonkey extension
- AI tools connected to the MCP server may store or process information they access

## Planned Security Features

In future releases, MCPMonkey plans to implement:

- Granular permission controls for different browser resources
- Per-server permission settings
- Enhanced security for the internal WebSocket communication
- Detailed activity logging

Until these features are implemented, please exercise caution when using MCPMonkey with sensitive browser data or websites. 