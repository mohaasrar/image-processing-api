# Image Processing API

Nodejs image resizing API using [Sharp](https://www.npmjs.com/package/sharp) package

## Getting Started

### Installing dependencies

After cloning the repo, all the project dependencies can be installed using the below command

```
npm install
```

### Running the server

To execute the application use the following command on terminal:

```
npm run start
```

the app will be available on  localhost:3000

### Scripts

The following scripts can be using npm build, to test and linting:

#### compile typescript to javascript

```
npm run build
```

The compiled code will be in `build` folder.

#### Testing

jasmine testing can be done to test main endpont /api and image resizing functionality using the below command

```
npm run test
```

#### Formatting

prettier has been used on this project to format the code it can be run through the below command

```
npm run prettier
```

#### Linting

ESlint has been used to correct errors and formatting issues the below command can helps to run eslint

```
npm run lint
```

---

## API Usage

The API can be accessed using api on the below pattern

- http://localhost:3000/api/images?fname=fjord&width=200&height=200

All Files used are available in the `assets/images/full` folder and the thumbnails file are stored in public/images folder
