# Typescript-React-Boilerplate

A bolier plate to get started on typescript-react projects quicker.

*************************

## To copy this frontend boilerplate

- `git clone <url from github>`
- `rm -rf .git` to remove git files
- `git remote -v` check that there is no remote for the project you cloned this one from (check you are not going to overwrite this project!)
- `git init` to start your new project
- `git add/commit` as required
- `git remote add origin <url from github>`
- `git push -u origin main` to add project to github

*************************

## To run the project

- `npm init`
- `npm install`
- `npm start`
*See package.json for more commands*

## Frontend localhost
- Frontend localhost is setup for this project on localhost:8080



## Backend localhost

This project has one component called home which displays all the data for the page. There are two axios querys to a backend at `http://localhost:5000` which will return data from the server based on port 5000. This is where the flask app api data from the project called 'backend' will be sent to. Unless you follow the instructions and start a terminal on port 5000 as per the 'backend' instructions this app will not return results from the database.
