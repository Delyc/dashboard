[![UNITEST CI/CD](https://github.com/Delyc/lendsqr-fe-test/actions/workflows/unitest.yml/badge.svg)](https://github.com/Delyc/lendsqr-fe-test/actions/workflows/unitest.yml) [![Deploy MkDocs to github pages](https://github.com/Delyc/lendsqr-fe-test/actions/workflows/mkdocs.yml/badge.svg)](https://github.com/Delyc/lendsqr-fe-test/actions/workflows/mkdocs.yml)

# LEndsqr Frontend

## Introduction
This is a frontend application that allows admin to register, login, and view a dashboard that displays all users and their individual profiles.

## Deployment
This project has been deployed on Netlify. Check the link below to test the features:
- [LEndsqr Frontend](https://delyce-lendsqr-fe-test.netlify.app/)

## Documentation
live documentation with navigation accessible at https://delyc.github.io/lendsqr-fe-test/
## Running live documentation
```
mkdocs serve
```

## Technologies
- Next.js (React.js framework)
- TypeScript
- SCSS
- Jest (for testing)
- Axios
- RTK query

## Features
- Register: Admin can register a new user.
- Login: Admin can log in to the application.
- Dashboard: Admin can view the dashboard displaying all users.
- Get All Users: Admin can retrieve a list of all users.
- View Single User: Admin can view the profile of a single user.
- Update User Status: Admin can update the status of a user.

## Getting Started with Local Development
To get started on your local machine, follow the steps below:
to be able to test different features, you need to have backend running locally on your computer

### Pre-requisites
- Node.js installed on your machine.

## FRONTEND

### Instructions
1. Clone the repository:
   ```shell
   git clone https://github.com/Delyc/lendsqr-fe-test
   ```
2. Install dependencies
    ```shell
    npm install
    ```
3. Configur environoment variables
   check `.env.example` file and replace `backend_url` with backend server. Using backend given , In this case it will be
   ```
   NEXT_PUBLIC_BASEURL=http://localhost:4000
   ```
   
3. Run development server
    ```shell
    npm run dev
    ````
site will be live at `https://localhost/3000`

### BACKEND
A simple backend built using `json server` and `json server  auth` for authentication
clone backend
```
git clone https://github.com/Delyc/lendsql-be
```
Install dependencies
```
npm install
```
start development server
```
npm start
```
Backend server will be accessible at `https://localhost/4000`
## About author

[Delyce Twizeyimana](https://github.com/delyc) - An open-minded Software Engineer with a keen interest in creating elegant tech solutions

<footer>

Good things come to those who never stop dreaming.

</footer>
