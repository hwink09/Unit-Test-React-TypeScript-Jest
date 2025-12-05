# Unit Testing React TypeScript with Jest

A comprehensive React + TypeScript project demonstrating best practices for unit testing with Jest and React Testing Library. This project showcases various testing patterns including component testing, custom hooks testing, utility functions testing, and form validation testing.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies & Libraries](#technologies--libraries)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Components & Features](#components--features)
- [Testing Patterns](#testing-patterns)
- [Code Coverage](#code-coverage)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project serves as a learning resource and reference implementation for writing effective unit tests in a React TypeScript application. It includes practical examples of testing various React patterns including components, custom hooks, forms, debounced inputs, and utility functions.

## ✨ Features

- ✅ **Comprehensive Unit Tests** - Full test coverage for components, hooks, and utilities
- 🎨 **Modern React** - Built with React 19 and TypeScript 5.8
- 🧪 **Jest & React Testing Library** - Industry-standard testing tools
- 📦 **Vite** - Fast development and build tool
- 🎣 **Custom Hooks** - Reusable logic with full test coverage
- 📝 **Form Validation** - React Hook Form integration with validation testing
- ⚡ **Debounced Search** - Performance optimization patterns
- 📊 **Code Coverage Reports** - Detailed coverage tracking with lcov reports

## 🛠 Technologies & Libraries

### Core Dependencies
- **React** (v19.1.1) - UI library
- **TypeScript** (v5.8.3) - Type-safe JavaScript
- **Vite** (v7.1.2) - Build tool and dev server

### Testing Tools
- **Jest** (v30.1.2) - Testing framework
- **React Testing Library** (v16.3.0) - Component testing utilities
- **@testing-library/jest-dom** (v6.8.0) - Custom DOM matchers
- **@testing-library/user-event** (v14.6.1) - User interaction simulation
- **ts-jest** (v29.4.1) - TypeScript preprocessor for Jest
- **jest-environment-jsdom** (v30.1.2) - DOM environment for Jest

### Additional Libraries
- **React Hook Form** (v7.62.0) - Form state management
- **Lodash** (v4.17.21) - Utility functions
- **ESLint** - Code linting and quality

## 📝 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 22.x
- **npm** or **yarn** or **pnpm**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hwink09/Unit-Test-React-TypeScript-Jest.git
   cd Unit-Test-React-TypeScript-Jest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Project

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🧪 Running Tests

### Watch Mode (Development)

Run tests in watch mode with automatic re-runs:

```bash
npm test
```

### CI Mode with Coverage

Run tests once with coverage report (suitable for CI/CD):

```bash
npm run test:ci
```

This generates coverage reports in the `coverage/` directory:
- HTML report: `coverage/lcov-report/index.html`
- LCOV format: `coverage/lcov.info`
- JSON format: `coverage/coverage-final.json`

## 📁 Project Structure

```
Unit-Test-React-TypeScript-Jest/
├── src/
│   ├── components/          # React components with tests
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.test.tsx
│   │   ├── Counter/
│   │   │   ├── Counter.tsx
│   │   │   └── Counter.test.tsx
│   │   ├── DebounceSearch/
│   │   │   ├── DebounceSearch.tsx
│   │   │   └── DebounceSearch.test.tsx
│   │   ├── SignUpForm/
│   │   │   ├── SignUpForm.tsx
│   │   │   └── SignUpForm.test.tsx
│   │   └── TodoList/
│   │       ├── TodoList.tsx
│   │       └── TodoList.test.tsx
│   ├── hooks/               # Custom React hooks with tests
│   │   ├── useCounter.ts
│   │   └── useCounter.test.ts
│   ├── utils/               # Utility functions with tests
│   │   ├── sum.ts
│   │   ├── sum.test.ts
│   │   ├── validateEmail.ts
│   │   ├── validateEmail.test.ts
│   │   ├── mapOrder.ts
│   │   └── mapOrder.test.ts
│   ├── assets/              # Static assets
│   ├── App.tsx              # Root component
│   ├── App.css              # Global styles
│   ├── main.tsx             # Application entry point
│   └── index.css            # Base styles
├── public/                  # Public static files
├── coverage/                # Test coverage reports
├── jest.config.ts           # Jest configuration
├── jest.setup.ts            # Jest setup file
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Project dependencies
```

## 🧩 Components & Features

### Button Component
A reusable button component with TypeScript props extending native HTML button attributes.

**Location:** `src/components/Button/`

### Counter Component
A counter with increment/decrement functionality that prevents negative values.

**Features:**
- Increment counter
- Decrement counter (with non-negative constraint)
- State management with React hooks

**Location:** `src/components/Counter/`

### Debounce Search Component
A search input with debounce functionality to optimize performance.

**Features:**
- Debounced input to reduce unnecessary function calls
- Controlled component pattern
- Performance optimization

**Location:** `src/components/DebounceSearch/`

### SignUp Form Component
A registration form with validation using React Hook Form.

**Features:**
- Email validation
- Password validation
- Confirm password matching
- Form submission handling
- Error messaging

**Location:** `src/components/SignUpForm/`

### TodoList Component
A todo list application with add, complete, and delete functionality.

**Features:**
- Add new todos
- Mark todos as completed
- Delete todos
- State management

**Location:** `src/components/TodoList/`

## 🔧 Custom Hooks

### useCounter Hook
A custom hook for counter logic with increment, decrement, and reset functionality.

**API:**
```typescript
const { count, increment, decrement, reset } = useCounter(initialValue);
```

**Location:** `src/hooks/useCounter.ts`

## 🛠 Utility Functions

### sum
Basic arithmetic sum function with full test coverage.

### validateEmail
Email validation utility using regex pattern.

### mapOrder
Array ordering utility using Lodash to reorder items based on a reference order.

## 🧪 Testing Patterns

This project demonstrates various testing patterns:

1. **Component Testing**
   - Rendering components
   - User interaction simulation
   - State changes verification
   - Event handler testing

2. **Custom Hook Testing**
   - Hook behavior testing
   - State updates verification
   - Side effects testing

3. **Utility Function Testing**
   - Pure function testing
   - Edge cases handling
   - Input validation

4. **Form Testing**
   - Form submission
   - Validation logic
   - Error messages
   - User input simulation

5. **Async Testing**
   - Debounce behavior
   - Async operations
   - Timers and delays

## 📊 Code Coverage

View detailed coverage reports after running `npm run test:ci`:

```bash
# Open the HTML coverage report in your browser
open coverage/lcov-report/index.html
```

Coverage reports include:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines
- Write tests for new features
- Maintain existing code style
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is available for educational and reference purposes. Feel free to use it as a learning resource.

## 👤 Author

**HwinkDev**

## 🙏 Acknowledgments

- React Team for the amazing library
- Testing Library maintainers for excellent testing utilities
- Jest team for the robust testing framework
- The open-source community for inspiration and best practices

---

**Happy Testing! 🚀**
