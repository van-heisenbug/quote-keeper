# QuoteKeeper

Responsive quote management app built with JavaScript and Google Apps Script. Combines Local Storage caching with Google Sheets permanent storage via async API workflows. Structured using MVC for clean state management, supporting CRUD operations, array search/sorting, trash/restore, and email notifications.

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
