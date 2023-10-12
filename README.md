## Running the app

For running the app locally through terminal use one of following commands in the app root folder:

```bash
# development
$ npm run start
```

use `localhost:5170` in the browser to see the app.

## Running the app in Docker

To run the app in docker simply make sure that you have docker installed on your machine, then in the app folder run:

```bash
$ npm run start:docker
```

use `localhost:5170` in the browser to see the app.

## Note

If you encounter a permission error while runnig using `npm run start:docker`, run the following command in the root of application:

```
$ chmod +x start-app.sh
```
