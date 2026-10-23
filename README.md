\# Student Full Stack Application



A full-stack application using Spring Boot, React, and MySQL.



\## Project Structure



\- `backend/` - Spring Boot REST API

\- `frontend/student-ui/` - React frontend



\## Backend Setup



1\. Install Java and MySQL.

2\. Create the MySQL database `studentdb`.

3\. Configure your local `application.properties` with your database credentials.

4\. Open a terminal in the `backend` folder and run:



&#x20;  ```bash

&#x20;  .\\mvnw.cmd spring-boot:run

&#x20;  ```



Backend URL: `http://localhost:8080`



\## Frontend Setup



1\. Install Node.js.

2\. Open a terminal in `frontend/student-ui`.

3\. Run:



&#x20;  ```bash

&#x20;  npm install

&#x20;  npm run dev

&#x20;  ```



4\. Open the local URL shown in the terminal, usually `http://localhost:5173`.



\## Security



Do not commit real passwords or `.env` files. Use placeholder credentials in example configuration files.

## API Endpoints

Base URL: `http://localhost:8080/api/students`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Add a student |
| DELETE | `/api/students/{id}` | Delete a student |
| GET | `/api/students/search?name=Harish` | Search students by name |

### Testing the API

1. Start the Spring Boot backend.
2. Start the React frontend.
3. Open `http://localhost:5173/` in your browser.
4. Use the student form to add students and the search box to find them.

The backend must be running on port 8080 for the frontend API requests to work.

