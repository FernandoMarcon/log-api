# Logger RESTful API

## Requirements
- npm
- Node.js
- mongoDB


## Endpoints
host: http://localhost:4000

### POST
**/log**

POST /log
```js
{
				"id":"1",
				"date":"d1",
				"level":	"INFO",
				"source":	"login",
				"msg":	"this is a log msg"
}
```

Intialization:
```bash
npm install
```

Run:
```bash
npm start
```
