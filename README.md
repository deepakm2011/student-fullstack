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



