# Playwright Automation Project with MCP

This is a Playwright automation project integrated with Model Context Protocol (MCP) server. It provides a robust framework for browser automation and end-to-end testing.

## Project Structure

```
.
├── tests/
│   └── e2e/                 # End-to-end test files
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── .github/                 # GitHub-related files
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npm run install:browsers
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (browser visible)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### UI mode (interactive)
```bash
npm run test:ui
```

### View test report
```bash
npm run test:report
```

### Generate test code
```bash
npm run codegen
```

## MCP Integration

This project is configured with Playwright MCP server support in your VS Code settings. The MCP server enables advanced browser automation capabilities through the Model Context Protocol.

## Configuration

- **playwright.config.ts**: Main Playwright configuration file
  - Configured browsers: Chromium, Firefox, WebKit
  - Default base URL: http://localhost:3000
  - Screenshots and videos on failure
  - HTML reporting

- **tsconfig.json**: TypeScript configuration with path aliases

## Creating Tests

Create test files in `tests/e2e/` with `.spec.ts` extension:

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## CI/CD Integration

The configuration supports CI/CD pipelines:
- Serial execution in CI
- Retry logic enabled in CI
- Screenshot and video capture on failures

## Documentation

- [Playwright Docs](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Guide](https://playwright.dev/docs/writing-tests)

## License

ISC
