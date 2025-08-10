# URL Shortener (MERN Stack)

A full-stack URL Shortener built using the MERN stack that allows users to create short links for long URLs, track click analytics, and manage links from a personal dashboard. Includes secure authentication and support for custom slugs. 

## Features
- **Short Link Generation** — Convert long URLs into short, shareable links.
- **Custom Slugs** — Users can define their own custom short link.
- **Click Analytics** — Track how many times a short link has been visited.
- **User Dashboard** — Manage all created links in one place.
- **JWT Authentication** — Secure access to protected routes.
- **Password Hashing** — User passwords are securely hashed using `bcrypt`.


## Tech Stack
**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  

### Other Libraries & Tools
- **nanoid** — Generate short unique IDs
- **bcrypt** — Secure password hashing
- **jsonwebtoken** — JWT-based authentication

## Overview

When a user enters a long URL, the app generates a short unique ID using **nanoid** and stores it in MongoDB along with:

- Original URL  
- Short link slug  
- Click count  
- User ID (if logged in)  

When someone visits a short URL, the backend redirects them to the original link and increments the click count.

Users can register, log in, and view their personal dashboard to:

- See all their created links   
- View click statistics  


## Setup & Installation

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/sreehithakambhampati/url_shortener.git
    cd url_shortener
    ```

2. **Install dependencies**
    
    From the project root, run:
    
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. **Setup environment variables**
    
    Create a `.env` file in the `backend` folder and add:
    
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**
    
    In one terminal:
    
    ```bash
    cd backend
    npm start
    ```
    
    In another terminal:
    
    ```bash
    cd frontend
    npm start
    ```

5. **Access the app**
    
    Open your browser and go to:
    
    ```
    http://localhost:3000
    ```

## Contact

For inquiries, collaborations, or suggestions:  

**Email:** [kambhampatisreehitha@gmail.com](mailto:kambhampatisreehitha@gmail.com)  
