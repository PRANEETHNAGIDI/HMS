# Hospital Management System (HMS)

This is a comprehensive Hospital Management System built with Angular 20. The application provides a complete solution for managing hospital operations, including user authentication, patient management, doctor management, room allocation, billing, reporting, and administrative dashboards.

## Features

- **User Authentication**: Secure login and signup functionality for different user roles (admin, patient, etc.)
- **Dashboards**: Separate dashboards for administrators and patients with role-based access
- **Patient Management**:
  - Admit and discharge patients
  - View patient details and history
  - Patient billing and payment processing
- **Doctor Management**: View and manage doctor information
- **Room Management**: Allocate rooms, handle room shifting, and view room availability
- **Billing & Payments**: Generate bills, process payments, and manage patient financial records
- **Reporting**: Generate and view various hospital reports
- **Services**: Additional hospital services management
- **Navigation**: Intuitive navigation bar for easy access to all features

## Technologies Used

- **Angular 20**: Modern web framework for building scalable single-page applications
- **Angular SSR**: Server-side rendering for improved performance and SEO
- **Bootstrap 5**: Responsive UI framework for consistent styling
- **ng-bootstrap**: Angular components powered by Bootstrap
- **Bootstrap Icons**: Icon library for enhanced UI elements
- **TypeScript**: Strongly typed programming language
- **RxJS**: Reactive programming library for handling asynchronous operations

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hospital-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Server-Side Rendering

To serve the application with server-side rendering, run:

```bash
npm run serve:ssr:hospital-management
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
