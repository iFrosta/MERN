# MERN template
MongoDB Express React Node.js
<br>**ready to prod | with simple auth**

**Frontend**
- proxy on port:5000
- React-router-dom
- normalize.css
- SCSS
- M - Toast (custom) (for message-hook)
- http-hook
- message-hook

**Backend**
- nodemon 
- concurrently 
- express-validator
- express-json
- config
- bcryptsjs
- jsonwebtoken

**Package**
- cross-env

## scripts
**start** | **server** | **client** | **client:install** | **client:build** | **dev** - with cross_env

## Start
**Don't forget to add your MongoDB**
in /config/default at **"mongoUri"**
```js
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {...})
```

Run
```npm
npm run dev 
```

[GitHub](https://github.com/iFrosta)
[iFrosta](https://ifrosta.com)
