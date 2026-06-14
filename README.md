## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `run tests`

Run e2e and component tests (cypress non-headless mode) like so

```bash
yarn run cy-open
```

Run e2e test in headless mode like so

```bash
yarn run cy-run
```

Run component test in headless mode like so

```bash
yarn run cy-comp
```

To create a test coverage report

- while running the application do

```bash
yarn run cy-run
```

- whithout running the application do

```bash
yarn run test-coverage
```

The `coverage` folder contains generated coverage report

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Run Docker locally

For run the docker build locally use the commands bellow

build docker image
`docker build -t sphinx_nav_fiber .`

run the image on localhost with a runtime API host

`docker run -p 3004:80 -e VITE_APP_API_URL=https://custom-api.example.com/api sphinx_nav_fiber`

`API_URL` and `BOLTWALL_URL` are also accepted as runtime API host aliases for older deployments.

### Generate icons for latest layout

Add svg icon to public/svg-icons with proper naming

run `node ./svgLibBuilder.js`

it will generate React Icon in src/components/Icons
