# Massage Reservation Management System

Welcome to our Massage Reservation Management System! This comprehensive web application facilitates seamless booking of massage services from various providers. Drawing inspiration from popular platforms like HungryHub and Airbnb, our system offers users a user-friendly interface to discover, book, and manage appointments across different massage shops.

## Tech Stack

### Frontend
- **Next.js**: A React framework known for server-rendered applications.
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **TailwindCSS**: A utility-first CSS framework for flexible and scalable designs.

### Backend
- **Node.js**: A JavaScript runtime environment for server-side applications.
- **Express.js**: A minimalistic web application framework for Node.js.

### Database
- **MongoDB**: A NoSQL database for storing flexible and scalable data.
- **MongoDB Atlas**: A cloud-hosted MongoDB service for database management.

### Tools
- **Postman**: An API development tool for testing and debugging APIs.
- **Git**: A version control system for tracking changes in code.
- **Vercel**: A platform for deploying serverless functions and static sites.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies for the frontend:
    ```bash
    $ cd frontend/
    $ npm install
    ```
3. Run the frontend development server:
    ```bash
    $ npm run dev
    ```
4. Open a new terminal window at the root directory.
5. Navigate to the backend directory:
    ```bash
    $ cd backend/
    ```
6. Install dependencies for the backend:
    ```bash
    $ npm install
    ```
7. Run the backend server:
    ```bash
    $ npm run dev
    ```

Before running the backend server, ensure you set up your environment variables in a `config.env` file with the following structure:

```plaintext
PORT=
NODE_ENV=

# Database config
MONGO_URI=

# JWT config
JWT_SECRET=
JWT_EXPIRE=
JWT_COOKIE_EXPIRE=
```

## Deployment

Check out our deployed website on Vercel: [Massage Reservation System](https://swdevprac2-project-bankyvineyardohoyo-and-friend.vercel.app/)

Feel free to explore, book appointments, and experience the convenience of our Massage Reservation Management System!

---
*Developed by Wiraphat Yodsri*
