# Documentation Microservice for kintoblocks

## First time setup
- create `.env` file (it is ignored) and setup all the env vars in it, you can check `~/.env.sample` for reference

## Commands

The following command shortcuts are available during development:

* `npm install`: Installs all NPM dependencies.
* `npm start`: Starts a local web server at `http://localhost:8000` (can be overwritten with env vars).
* `npm run debug`: Starts a local/debug web servers at `http://localhost:8000` (can be overwritten with env vars).
* `npm run build`: clean and compile the app
* `npm run prod`: run the production version (must do `npm run build` before)
* `npm test`: Runs unit tests.
* `npm run apidoc`: generates the api doc, only needed to validate the format is correct
