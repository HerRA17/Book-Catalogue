# Book Store API
* [Overview](#overview)
* [Environment](#environment)
* [Testing](#testing)
* [Example of the requests & formats](#example)

<a id="overview"></a> 
## Overview
This will be a guide to what you can expect from the API. 
This is the server side of the application.
This Web-application will provide users with access to information about different books, authors, subgenres, and Publish Year.
<!-- Users will be able to sig up, update personal information, and create a list of their favourite movies.  -->

<a id="environment"></a> 
## Environment & Installation
To set up your environment for the Book Store API, follow these steps:

1. Ensure you have Node.js and npm installed. (this are the versions I used node = 16.14.2 & npm = 9.8.1 ).

The following npm packages are used in this project:

To install the dependecies you should use in your terminal npm i or npm install and the respective dependency.
"cors": "^2.8.5" -> Used to resctrict which origins(domain, scheme, port) are allowed to access the API.
"dotenv": "^16.3.1" -> Used to store sensitive information in a .env file. 
"express": "^4.18.2" -> Used as middleware and for defining API routes. 
"mongodb": "^6.1.0" -> MongoDB driver for Node.js.
"mongoose": "^7.5.3" -> Mongoose was used to write a model about the Book data.   
"nodemon": "^3.0.1" -> Nodemon was used to for testing purposes, that way every time there was a new saved change, the site would actualize to render the most updated version. 

<a id="testing"></a> 
## Testing
I used Postman to test CRUD operations. The port selected was 5555.

1. Install Postman if not already installed.

2. Open Postman.

3. Create a new request.

4. Set the request type (GET, POST, PUT, DELETE).

5. Set the request URL (e.g., `http://localhost:5555/books`).

6. Add request body data (if required).

7. Send the request and check the response.


<a id="example"></a> 
## Example of the requests & formats
## Example of Requests & Formats
Here are examples of requests and their respective data formats:

### Landing in the Home Page

- Request: GET
- URL: `/`
- Request Body: None
- Response Body Format: `Welcome to the Book Store`

### Get All Books

- Request: GET
- URL: `/books`
- Request Body: None
- Response Body Format: An array of JSON objects, each representing a book.

```json
[
 {
     "title": "Example Book 1",
     "subgenre": "Fiction",
     "author": "John Doe",
     "publishYear": 2023
 },
 {
     "title": "Example Book 2",
     "subgenre": "Non-fiction",
     "author": "Jane Smith",
     "publishYear": 2022
 },
 //...
]
### Get a book by ID
- Request: GET
- URL: `/books/:id`
- Request Body: None
- Response Body Format: A JSON object representing the specific Book.

{
    "title": "ex",
    "subgenre": "ex",
    "author": "ex",
    "publishYear": 1000
}

### Edit a book 
- Request: PUT
- URL: `/books/:id`
- Request Body: an object with at least one field changed.
- Response Body Format:  An updated JSON object representing the book and a message indicating success.

{
    "title": "ex",
    "subgenre": "ex",
    "author": "exxx",
    "publishYear": 1000
}

### Create a new Book  
- Request: POST
- URL: /books
- Request Body Format: An object containing four key-value pairs, including three strings and one integer.
- Response Body Format: A JSON object representing the newly created book.

{
    "title": "ex",
    "subgenre": "ex",
    "author": "ex",
    "publishYear": 1000,
    "createdAt": "2023-10-06T09:44:55.642Z",
    "updatedAt": "2023-10-06T09:44:55.642Z",
    "__v": 0
}
### Delete a Book
- Request: DELETE
- URL: /books/:id
- Request Body Format: none.
- Response Body Format: message:"Book deleted successfully"
