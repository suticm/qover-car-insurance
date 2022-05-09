# Qover Car Insurance

### Prerequisites
- nodejs
- mongodb
- docker

### Docker

1. Start server
```sh
$ cd backend
$ docker-compose --env-file ./dev.env up -d --build
```
2. Inject default data in db
```sh
$ npm run injectData
```
3. Start client
```sh
$ cd ../frontend
$ npm start
```


### Without docker - usage

1. Install dependencies in each folder (backend && frontend)
```sh
$ npm install
```
2. Start server
```sh
// qover-car-insurance/backend/
$ npm run start
```
3. Inject default data
```sh
$ npm run injectData
```
5. Start client
```sh
// qover-car-insurance/frontend/
$ npm start
```
