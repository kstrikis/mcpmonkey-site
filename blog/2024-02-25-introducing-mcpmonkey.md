---
slug: introducing-mcpmonkey
title: Introducing MCPMonkey
authors: [kriss]
tags: [mcpmonkey, firefox, extension, ai, mcp]
---

# Introducing MCPMonkey: AI Agents in Your Browser

Today marks the official introduction of **MCPMonkey**, an open-source project that bridges the gap between AI language models and browser interactions. As we increasingly rely on AI assistants for our digital tasks, enabling these tools to interact meaningfully with our browsers has become essential.

## What is MCPMonkey?

MCPMonkey is a fork of Violentmonkey that extends its powerful userscript capabilities to support Model Context Protocol (MCP) servers. This allows AI language models like Claude or models used in tools like Cursor to access and interact with your browser in meaningful ways.

The project consists of two main components:
1. A Firefox extension that enables browser interaction
2. An MCP server that connects AI tools to your browser

## Current Features

In its current implementation, MCPMonkey focuses on several key features:

- **Tab Management** - Get information about open tabs, create new tabs, close tabs, activate tabs, and duplicate tabs
- **Page Style Extraction** - Extract styling information from web pages for AI analysis
- **User Script Support** - Full compatibility with existing userscripts
- **Cursor Integration** - Works with Cursor v0.45.7+ through its built-in MCP integration

## Getting Started

If you're interested in trying MCPMonkey, check out our [installation guide](/docs/intro) or visit the [GitHub repository](https://github.com/kstrikis/mcpmonkey).

## The Road Ahead

This is just the beginning for MCPMonkey. We have plans to expand its capabilities in the future, including:

- Enhanced browser access (history, bookmarks, etc.)
- Granular permission controls
- Multiple MCP server management
- Community hub for sharing configurations

Stay tuned for updates and feel free to contribute to the project on GitHub!

---

*MCPMonkey is an experimental project and is currently available as a development build. Please use it responsibly and be aware of privacy considerations when allowing AI tools to access your browser data.* 