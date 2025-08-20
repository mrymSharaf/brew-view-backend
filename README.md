# Project3: Brewview backend

The backend of our project is built using Node.js and Express, with MongoDB as the database. It handles user authentication, manages data for cafes and reviews, and provides secure APIs for seamless communication with the frontend.

## The front end 
- [Repository](https://github.com/mrymSharaf/brew-view-frontend)

## Auth Routes

| HTTP Method |      Route        |      Description      |             
|-------------|-------------------|-----------------------|
| POST        | /auth/signup      | Create a new user     | 
| POST        | /auth/login       | Login                 |

## Cafe Routes

| HTTP Method |      Route        |      Description      |             
|-------------|-------------------|-----------------------|
| POST        | /cafes/new        | Create a new cafe     | 
| GET         | /cafes/           | Get all cafes         | 
| GET         | /cafes/:id        | Get cafe details      | 
| PUT         | /cafes/:id        | Update a cafe         | 
| DELETE      | /cafes/:id        | Delete a cafe         |

## Drink Routes

| HTTP Method |      Route        |      Description      |             
|-------------|-------------------|-----------------------|
| POST        | /drinks/new       | Create a new drink    | 
| GET         | /drinks/          | Get all drinks        | 
| GET         | /drinks/:id       | Get drink details     | 
| PUT         | /drinks/:id       | Update a drink        | 
| DELETE      | /drinks/:id       | Delete a drink        |

## Review Routes

| HTTP Method |      Route        |      Description      |             
|-------------|-------------------|-----------------------|
| POST        | /reviews/new      | Create a new review   | 
| GET         | /reviews/         | Get all reviews       | 
| GET         | /reviews/:id      | Get review details    | 
| PUT         | /reviews/:id      | Update a review       | 
| DELETE      | /reviews/:id      | Delete a review       |