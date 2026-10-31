# QuoteKeeper

A quote management application built with HTML, CSS, and vanilla JavaScript, using Local Storage for local persistence and Google Sheets through Google Apps Script for remote storage.

## Features

- Create, read, update, and delete quotes.
- Save quotes to Local Storage.
- Back up and synchronize quote data with Google Sheets.
- Communicate with Google Sheets through Google Apps Script using `doGet()` and `doPost()`.
- Automatically send email notifications when a quote is added, edited, trashed, restored, or permanently deleted, as applicable.
- Move trashed quotes to a separate trash storage and mark them as `trashed` in Google Sheets.
- Restore trashed quotes to the active quote collection.
- Permanently delete quotes from Local Storage and Google Sheets.
- Update edited quotes in both Local Storage and Google Sheets.
- Search quotes by ID, quote text, author, and source.
- Sort quotes by date added and ID.
- Validate required fields before creating or updating quotes.
- Trim unwanted leading and trailing whitespace from input values.
- Prevent unnecessary double spaces in text fields where appropriate.
- Generate unique quote IDs that remain stable when quotes are edited, trashed, or deleted.
- Display loading, success, and error states for relevant operations.
- Handle failed API requests without silently treating them as successful.
- Allow failed synchronization attempts to be retried.
- Prevent duplicate records when retrying requests.
- Confirm destructive actions when appropriate.
- Provide a responsive interface for desktop and mobile devices.

## Architecture

### Model — Quote

- Represent quote data and its properties.
- Define the structure of a quote.
- Keep quote-related rules and data handling separate from DOM manipulation.
- Support the application's quote operations without depending on the UI renderer.

### View — UI Renderer

- Render quotes and update the DOM.
- Display quote lists, forms, search results, and sorted data.
- Render empty states, loading indicators, success messages, and error messages.
- Handle DOM events and collect user input.
- Keep presentation logic separate from API requests and persistence logic.

### Controller — Orchestrator

- Coordinate interactions between the View, Model, Local Storage, and Google Sheets API.
- Handle application workflows such as adding, editing, trashing, restoring, and deleting quotes.
- Validate input before performing operations.
- Initiate asynchronous requests and await the results when subsequent operations depend on them.
- Check request status and response data before proceeding.
- Call the appropriate Model, storage, and rendering methods in the correct order.
- Manage loading states, success messages, errors, and retry actions.
- Coordinate local updates and remote synchronization.
- Prevent rendering or updating dependent state based on unsuccessful requests.
- Keep application workflows centralized instead of scattering request-handling logic throughout the codebase.

### Persistence and API Module

- Handle Local Storage operations.
- Communicate with the Google Apps Script web app.
- Send requests and process responses.
- Handle JSON serialization and parsing.
- Check HTTP responses and application-level success or failure.
- Report errors to the orchestrator instead of directly controlling the UI.
- Keep persistence and network logic separate from rendering.

### Google Apps Script Backend

- Handle server-side quote operations.
- Read and write quote data in Google Sheets.
- Implement `doGet()` and `doPost()` request handlers.
- Validate incoming requests and data.
- Return consistent responses that indicate success or failure.
- Handle trash status, restoration, and permanent deletion.
- Send email notifications for applicable operations.
- Handle server-side errors and relevant Apps Script service limitations.

## Programming Concepts Practiced

- CRUD functionality.
- State management.
- Asynchronous JavaScript.
- Promises, `async`, and `await`.
- HTTP requests, APIs, and JSON.
- Google Apps Script.
- Google Sheets as a remote data store.
- Local Storage and data persistence.
- Factory functions.
- JavaScript arrays and objects.
- Closures and private state.
- DOM manipulation and traversal.
- Event handling and event delegation.
- Form validation and input sanitization.
- Unique ID generation.
- Separation of concerns.
- Model-View-Controller-inspired architecture.
- Orchestration of asynchronous operations.
- Error handling and retry logic.
- Data synchronization and consistency.
- HTML and responsive CSS.
- CSS custom properties and design tokens.
- Git and GitHub.
- Debugging, testing, and incremental development.

## Color Palette

### Backgrounds

#0B1220 - Main background
#111C2D - Card background
#17243A - Table header / hover
#1A2740 - Input background

### Text Colors

#F8FAFC - Primary labels / headings
#B8C7E0 - Body text
#8FA8CC - Muted labels / placeholders
#64748B - Disabled / subtle text

### Brand and Action Colors

#4F46E5 - Primary purple / brand
#6366F1 - Accent / selected page
#2563EB - Add button / blue action
#818CF8 - Quote marks / highlights

### Borders and Status Colors

#263750 - Card borders / dividers
#22C55E - Success / confirmation
#EF4444 - Delete / destructive action
#EF4444 - Delete / destructive action

## Stages to Build

### 01. UI Foundation

- Rebuild the HTML structure.
- Rebuild the CSS and responsive layout.
- Establish the color palette and reusable design tokens.
- Create the quote form and quote list or table.
- Create empty states and basic interface feedback.
- Establish accessible labels, controls, and form behavior.

### 02. Quote Model and Local Storage

- Define the quote data structure.
- Implement quote creation, retrieval, and editing.
- Implement trashing, restoration, and permanent deletion.
- Generate unique quote IDs.
- Implement required-field validation and whitespace handling.
- Implement Local Storage persistence.
- Implement search by ID, quote, author, and source.
- Implement sorting by date added and ID.
- Test edge cases and confirm that data persists after refreshing the page.

### 03. Google Sheets and Apps Script Backend

- Create the Google Sheet structure and define its columns.
- Implement server-side functions for adding, retrieving, editing, and deleting quotes.
- Implement trash and restoration behavior.
- Create `doGet()` and `doPost()` request handlers.
- Validate incoming data and handle invalid requests.
- Define consistent success and error responses.
- Implement email notification functions.
- Test backend operations independently before connecting the frontend.

### 04. API Module and Orchestrator

- Deploy Google Apps Script as a web app and obtain the deployment URL.
- Create a dedicated module for communicating with the Apps Script API.
- Implement request methods and response handling.
- Check HTTP status codes and application-level responses.
- Create the orchestrator to coordinate application workflows.
- Await asynchronous requests before performing dependent operations.
- Call the appropriate Model, persistence, and View methods based on request results.
- Centralize loading states, error handling, and success feedback.
- Test successful requests, failed requests, and unexpected responses.

### 05. Synchronization and Data Consistency

- Define how Local Storage and Google Sheets stay synchronized.
- Decide which data source is authoritative when records conflict.
- Handle cases where local persistence succeeds but remote synchronization fails.
- Display synchronization status and provide retry options.
- Prevent duplicate records when requests are retried.
- Handle interrupted requests and repeated operations safely.
- Ensure edits, trashing, restoration, and permanent deletion are reflected consistently.
- Define how the application behaves when offline or when Google Sheets is unavailable.

### 06. Email Notifications

- Send email notifications for applicable quote operations.
- Include relevant quote details in notification emails.
- Handle email sending failures separately from quote operation failures.
- Prevent unnecessary duplicate notifications when operations are retried.
- Account for Apps Script authorization requirements and email quotas.

### 07. Polish and Testing

- Test all CRUD operations and quote lifecycle transitions.
- Test search, sorting, validation, and unique ID generation.
- Test asynchronous workflows and request failures.
- Test synchronization and retry behavior.
- Verify that UI updates occur only when appropriate.
- Check responsive layouts and accessibility.
- Review code organization and remove unnecessary duplication.
- Test edge cases and fix discovered bugs.
- Review Git history and commit meaningful changes.
- Write a concise README explaining the project, architecture, features, and setup.
- Prepare the project for portfolio presentation and deployment.

## Development Notes

- Build incrementally and test each stage before moving forward.
- Prefer refactoring individual components over rewriting working functionality without a clear reason.
- Keep responsibilities separated between the Model, View, Controller, and persistence modules.
- Avoid duplicating asynchronous request logic across multiple files.
- Handle errors explicitly instead of assuming requests will succeed.
- Distinguish between a successful local update, a successful remote update, and a successful email notification.
- Record important bugs, the reasoning behind solutions, and lessons learned during development.
- Use AI as a learning aid when useful, but understand and explain the code being implemented.
- Prioritize a working, understandable application over unnecessary architectural complexity.

# If I finish this project.

**QuoteKeeper — Quote Management Application**

Built a responsive quote management application using HTML, CSS, vanilla JavaScript, Google Apps Script, and Google Sheets. Implemented CRUD operations, Local Storage persistence, asynchronous API communication, and a modular application architecture with centralized request orchestration. Added quote search, sorting, trash and restoration workflows, and email notifications.

**Technologies:** HTML, CSS, JavaScript, Google Apps Script, Google Sheets, Git, GitHub.
