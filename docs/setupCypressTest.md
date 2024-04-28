# Setup Sphinx Stack to run Cypress Test Locally

## Prerequisite

1. Ensure you have [docker](https://www.docker.com/) installed on your Machine.

## Setup Sphinx Stack

1. Clone the Sphinx Stack Repo [here](https://github.com/stakwork/sphinx-stack)

    ```bash
    git clone https://github.com/stakwork/sphinx-stack.git
    ```

2. Navigate to the root directory of the Sphinx stack repo cloned on your machine and open a terminal. Then, execute the following command:

    ```bash
    docker-compose -f ./alts/navfiber.yml --project-directory . up -d
    ```

The above command will pull images from Docker Hub and start up docker compose

Note: Please allow the following container to exit before you proceed

`relaysetup-1`

`lndsetup-1`

`tribes-setup-1`

***If you require real Stakwork token or Twitter API keys for the test you're about to write, please reach out to the repository maintainer.***

### Next time you want to run Stack

Please when next you want to run sphinx stack ensure you pull the current boltwall and jarvis-backend images. Run the command below to pull their latest image. This is to ensure you have the latest image version as this images change very often and they're both very critical components for the test.

```bash
docker pull sphinxlightning/sphinx-boltwall:latest
```

```bash
docker pull sphinxlightning/sphinx-jarvis-backend:latest
```

If you are using the Apple Silicon(M1), use the command below to pull latest images

```bash
docker pull --platform linux/x86_64 sphinxlightning/sphinx-boltwall:latest
```

```bash
docker pull --platform linux/x86_64 sphinxlightning/sphinx-jarvis-backend:latest
```

## Setup Frontend with Cypress

1. Go to the sphinx-stack folder, locate the `NODES.json` file located in `sphinx-stack/relay/NODES.json` and copy the content of the file.
PS: the content should be an array of objects

2. In your sphinx-nav-fiber repository locate the `relay` folder located in the root directory, in the `nodes.json` file please highlight everything there and delete, then you paste all of the content you copied from the above step.

### Reset Sphinx Stack Data

1. Stop the Docker Compose if it's currently running.

2. Open your terminal in the root directory of Sphinx Stack.

3. Run the following command:

    ```bash
    ./clearall.sh
    ```

4. Proceed to run step 2 in the `Setup Sphinx Stack` section and don't forget to wait for `relaysetup`, `lndsetup` adnd `tribe-setup-1` to exit before you procced.

5. Finally, rerun the steps outlined in the `Setup Frontend with Cypress` section

## Cypress Test

1. If this is your first time running this project, please open a terminal inside the root directory of this repository and run the command below:

    ```bash
    yarn install
    ```

2. Use the command below to start the app.

    ```bash
    yarn run start-e2e
    ```

3. Use the command below to run current cypress test.

    ```bash
    yarn cy-run
    ```

4. If you will like to see Cypress run in a UI, run the command below:

    ```bash
    yarn run cy-open
    ```

With the above commands executed properly you should be able to start writing your test in the `cypress/e2e` folder.

## Help

1. The code below helps with initial setup, also if you want to simulate a user coming from the sphinx app, You can pass in a username in the case of this example `carol` and a budget of 300 sats. Remember if you don't want to add this, that's fine also.

    ```bash
    cy.initialSetup('carol', 300)
    ```
