# Book Club API Integration with React and Node.js - Part1. -  Backend only


## Overview
This project focuses on creating REST API endpoints to facilitate CRUD (create, read, update, delete) operations between a React front-end and a Node.js back-end.  
This is CODECADEMY tutorial.  
The application serves as a management tool for a local book club to efficiently track book titles and their reading schedules.  

API Endpoints  
Base URL  
https://books-app-backend-2.onrender.com  

Endpoints  
Get all books  
GET /books  
Response: JSON array of all books.  

Get a specific book  
GET /books/:id  
Params: id - ID of the book.  
Response: JSON object of the book.  

Add a new book  
POST /books  
Body: JSON object with title, start, and end fields.  
Response: JSON object of the created book.  

Update a book  
PUT /books/:id  
