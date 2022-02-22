# levacc-log-api
REST API p/ receber e armazenar logs provenientes de usuarios do LEVACC


## Requirements
- npm
- Node.js
- mongoDB


## Rodar em ambinte de desenvolviment
```console
levacc@dev:~$ npm start
```

Caso nao exista uma pasta "node-modules" no diretorio, rodar:
```console
levacc@dev:~$ npm install
```

## Endpoints

### /add_log (POST)
Recebe um _json_ contendo os seguintes campos:
```js
{
				"id":"1",
				"date":"d1",
				"level":	"INFO",
				"source":	"login",
				"msg":	"this is a log msg"
}
```
Enviar token no campo _x-access-token_ do _header_ de uma mensagem http POST, com _Content-Type_ application/json.

### /log/:logID
### /logs
### /logs/:date
### /logs/:level
### /logs/:source