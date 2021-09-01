# Express - Passport - JWT Authentication 

## Dive in with a simple API example.

![Whale Tail](https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80)

## Motivation
Work through setting up a simple authentication workflow for an express app.  Nothing fancy just the basics. dotenv was used to supply the JWT_SECRET so you will need to impolement that as well.Using a few packages:

```
yarn add express
```
```
yarn add passport
```
```
yarn add passport-jwt
```

This project is the express API server only with 2 simple routes:
- **POST** /loginUser ( no credentials are required, it returns a Json Web Token (JWT))
- **GET** /protected/data  (simulates a routed protected by authentication)


Start the server with
```
    yarn start
```

### To Use the Server
- Make a request to the loginUser route ( Using something like Postman)
- Make a request to the /protected/data route and include the token that  was returned from the login request