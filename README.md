# Backend Repo

This is the backend code for the project. It handles the server-side operations, including user authentication, data retrieval, and other RESTful API functionalities.

## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [API Endpoints](#api-endpoints)
5. [Environment Variables](#environment-variables)
6. [Testing](#testing)
7. [License](#license)

## Features

- **User Authentication**: Secure login and registration using Firebase.
- **Firestore Integration**: Data storage and management using Firebase Firestore.
- **User Data Management**: Fetch, update, and manage user data.
- **Real-time Updates**: Uses Firebase Cloud Functions to handle real-time updates (like "recently active" status).

## Technologies

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for Node.js to handle HTTP requests and routing.
- **Firebase Admin SDK**: For Firebase authentication and Firestore integration.
- **TypeScript**: For type-safe JavaScript development.
- **Dotenv**: To load environment variables from a `.env` file.
- **CORS**: To enable cross-origin requests for frontend-backend communication.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/muelava/backend-repo.git
cd backend-repo
