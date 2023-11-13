# Baffin Baywatch

Baffin Baywatch is a project that consists of a backend server and a frontend application. The backend is a Node.js server that provides various endpoints, while the frontend is a Vite-based React application that fetches data from the backend.

## Running the Application with Docker

The entire application, including both the backend and frontend, can be run using Docker. Ensure Docker is installed on your system and then run the following command:

```bash
docker compose up --build
```

This command will build the necessary Docker images, start the backend server at [http://localhost:8000](http://localhost:8000), and the frontend application at [http://localhost:4915](http://localhost:4915).

## Project Structure

- `backend`: Contains the Node.js backend server code.
- `frontend`: Contains the Vite-based React frontend application code.
- `docker-compose.yml`: Defines the Docker Compose configuration for running the entire application.