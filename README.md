# Event Registration Form
App build with Node.js, React.js and mongoDB

### Prerequisites
- NodeJS version => 14.15.3.
- MongoDB version => 3.6

## Development

### Install dependencies for both server and client
From main application directory type:

```bash
npm install
```
### Starting local mongodb server
You should use your local mongoDB instance. It is very important to make sure that mongod process is running before the next step.

```bash
mongod
```
### Starting Node.js (Rest API) Backend Server and React (Browser) application

From main application directory type:
```bash
npm run dev
```

### Running tests
To see tests for client app from main application directory type:
```bash
npm test
```

To see tests for node.js server type:
```bash
cd server
npm test
npm run test:coverage
```

