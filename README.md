Connection to the ec2 instance with the sphinx-nav code (ask for the pem key)

`ssh -i ./pemFiles/knowlege-graph-api.pem ec2-user@3.80.198.201`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Run Docker locally

For run the docker build locally use the commands bellow

build docker image
`docker build --build-arg REACT_APP_API_URL={{custom_api_irl}}  -t sphinx_nav_fiber .`

run the image on localhost

`docker run -p 3004:80 sphinx_nav_fiber`
