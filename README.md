# Features

- Create, Update, Read, Delete Quotes.
- Save to Local Storage.
- Save back up to Google Sheet.
- Connect with Google Sheet with simple doGet() and doPost() only.
- Automatically sends email confirmation when a new quote is added, edited, trashed, deleted.
- Trashed quotes gets stored in a trash storage and gets marked as "trashed" in Google Sheet.
- Deleted quotes will be permanently deleted from Local Storage and Google Sheet.
- Edited Quotes will be edited both in Local Storage and Google Sheet.
- Search Quotes by ids, quotes, authors, sources.
- Sort Quotes by date added, id.

# Programming Concepts Practiced

- CRUD functionality.
- State Management.
- AppScript.
- API.
- Git and GitHub.
- HTML-CSS Responsive Design.
- DOM Manipulation and Traversal.
- JS Arrays and Objects.
- Factory Functions.
- Google Sheet.
- Local Storage.

# Collor Palette

## Backgrounds

#0B1220 - Main background
#111C2D - Card background
#17243A - Table header / hover
#1A2740 - Input background

## Text Colors

#F8FAFC - Primary labels / headings
#B8C7E0 - Body text
#8FA8CC - Muted labels / placeholders
#64748B - Disabled / subtle text

## Brand and Action Colors

#4F46E5 - Primary purple / brand
#6366F1 - Accent / selected page
#2563EB - Add button / blue action
#818CF8 - Quote marks / highlights

## Borders and Status Colors

#263750 - Card borders / dividers
#22C55E - Success / confirmation
#EF4444 - Delete / destructive action
#EF4444 - Delete / destructive action

# Stages To Build

- Rebuild The UI (HTML and CSS).
- Rebuild Google Sheet.
- Create AppScript CRUD functions (Add, Retrieve, Edit, Delete).
- Create AppScript doGet and doPost to handle request.
- Deploy as a web app and get web app URL.
- Create a module that talks to my Google Sheet AppScript. (Orchestrator/Controller)
- Create the module for Quote. (Model)
- Create a module for the UI renderer. (View)
