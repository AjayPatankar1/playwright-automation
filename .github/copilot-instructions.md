# Playwright Automation Project - Copilot Instructions

## Project Overview
This is a Playwright automation project integrated with MCP (Model Context Protocol) server support in VS Code. The project is designed for end-to-end testing and browser automation.

## Key Technologies
- **Playwright**: Browser automation framework
- **TypeScript**: For type-safe test code
- **MCP Integration**: Model Context Protocol server for advanced AI-assisted automation

## Project Structure
- `tests/e2e/`: End-to-end test files
- `playwright.config.ts`: Playwright configuration
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Project dependencies and scripts

## Development Guidelines

### Creating Tests
1. Create test files in `tests/e2e/` with `.spec.ts` extension
2. Use the `@playwright/test` framework
3. Follow Playwright best practices for selectors and waits

### Running Tests
- Development: `npm test`
- Headed mode: `npm run test:headed`
- Debug mode: `npm run test:debug`
- UI mode: `npm run test:ui`

### Code Style
- Use TypeScript strict mode
- Include proper type annotations
- Use meaningful test names

## MCP Server Configuration
The project uses Playwright MCP server as configured in VS Code settings:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

## Common Tasks

### Add a new test
1. Create a new file in `tests/e2e/` with `.spec.ts` extension
2. Import necessary Playwright modules
3. Write test cases using `test()` function

### View test reports
Run `npm run test:report` to view the HTML report

### Debug a failing test
Run `npm run test:debug` to step through test execution

### Record new tests
Run `npm run codegen` to use Playwright's code generation feature

## Useful Commands
- `npm install`: Install dependencies
- `npm run install:browsers`: Install Playwright browsers
- `npm test`: Run all tests
- `npm run test:headed`: Run tests with visible browser
- `npm run test:ui`: Run tests in interactive UI mode
- `npm run test:report`: View HTML test report
- `npm run codegen`: Generate test code interactively

## Best Practices
1. Write tests that are independent and can run in any order
2. Use page fixtures for common setup
3. Implement proper waits instead of hardcoded delays
4. Use descriptive test names
5. Keep test data separate from test logic
6. Use helper functions for repeated actions

## Next Steps
1. Install dependencies: `npm install`
2. Install Playwright browsers: `npm run install:browsers`
3. Create your first test in `tests/e2e/`
4. Run tests: `npm test`
