# Image Processing API

Simple Nodejs API for resizing images using [Sharp](https://www.npmjs.com/package/sharp) package

## Getting Started

### Installing dependencies

After cloning the repo, all the project dependencies can be installed using npm:

```
npm install
```

### Running the server

To execute the application use the following command in terminal:

```
npm run start
```

the app will be available on port 3000

### Scripts

The following actions can be executed through npm scripts:

#### compile typescript to javascript

```
npm run build
```

The compiled code will be in `build` folder.

#### Testing

jasmine testing can be done to test main endpont /api and image resizing funtionality using the below command

```
npm run test
```

#### Formatting

prettier has been used on this project to format the code it can be run through the below command

```
npm run prettier
```

#### Linting

ESlint has benn used for to correct errors and formating issues the below command can helps to run eslint

```
npm run lint
```

---

## API Usage

The API can be accessed using api on the below pattern

- /api/images?filename=danceforme&width=400&height=400

All Files used are available in the `assets/images/full` folder.
