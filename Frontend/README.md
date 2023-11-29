# Book Store Frontend
## Overview
This is the frontend for the Book Store application, built with React and Tailwind CSS. It provides a user-friendly interface for managing books, including creating, viewing, editing, and deleting book records.

## Key Features
- Interactive UI for book management.
- Integration with the backend API for CRUD operations.
- Responsive design using Tailwind CSS.
- Custom components for displaying and interacting with book data.
## Installation
### Prerequisites
- Node.js and npm installed.
- Backend API running (refer to the backend setup guide).
### Setting Up
1. Clone the Frontend Repository:
```
git clone https://github.com/YourUsername/FrontendRepositoryName.git
```
Replace YourUsername and FrontendRepositoryName with your GitHub username and repository name.
2. Navigate to the project directory:
```
cd FrontendRepositoryName

```
3. Install dependencies:
```
npm install

```
4. Start the Development Server:
```
npm run dev
```
This will start the frontend application on http://localhost:3000 (default port).

## Usage
+ The application routes are defined in App.jsx.
+ Navigate through different components like Home, EditBook, CreateBook, DeleteBook, and ShowBook using the routes defined.
+ Interact with the book records through the UI. The data is fetched and managed using Axios from the backend API.
## Components Overview
* BookModal.jsx: Displays detailed information about a book in a modal.
* BooksCard.jsx: A card component to show book summaries.
* BookSingleCard.jsx: Shows detailed view for a single book.
* BooksTable.jsx: Displays books in a table format.
* BackButton.jsx, Spinner.jsx: Utility components for navigation and loading states.
## Note
Ensure the backend server is running to fetch and manage book data.
Tailwind CSS is used for styling; you can customize styles in index.css.