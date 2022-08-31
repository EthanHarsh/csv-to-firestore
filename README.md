# csv-to-firebase
_Typescript application to read CSV files and send to [save-to-firestore](https://github.com/EthanHarsh/save-to-firestore-public)._

![Typescript Badge](https://img.shields.io/badge/Node.js-Typescript-green) ![Firebase Badge](https://img.shields.io/badge/GCP-Firebase-red)

## Description

I built this application to assist a client transition from a traditional monolithic application to Firebase. This application reads a CSV, encrypts a request and ssends it to save-to-firestore. In order to prevent outside abuse, this application includes a key for requests. I would recommend using this application system as a temporary measure.

## Quick Start
### Using Docker
```
sudo docker build . -t csv-to-firestore
```

### Using NPM - Production Start
#### Install Dependencies
```
npm run install
```

#### Build
```
npm run build
```

#### Start Command
```
npm run start
```
## Development
### Dev Container
Activate Development container using your prefered IDE.
### Using NPM - Development Start
#### Start for Development - _Nodemon_
```
// Terminal 1
npm run typeWatch
//Terminal 2
npm run devStart
```