# user_app

## Getting started

### Installing Dependencies

Nodejs 16.18.0 Follow instructions to install the latest version of nodejs for your platform in the [nodejs](https://nodejs.org/en/docs/) docs

### NPM Dependencies

Once you have your virtual environment setup and running, install dependencies by navigating to the /backend directory and running:

`npm install`
This will install all of the required packages we selected within the package.json.

### Key Dependencies

[Express](http://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

[Mongoose](https://mongoosejs.com/) provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

### Running the server

From within the ./user_app directory
`npm run dev` - development mode

## API Reference

### Getting Started

Base URL: https://user-app-yfyx.onrender.com/api/v1/

### API Endpoints

GET /users General: Returns all users.

Sample: curl https://user-app-yfyx.onrender.com/api/v1/users/

```JSON
    {
    "status": "success",
    "results": 8,
    "data": {
        "users": [
            {
                "_id": "5c8a1d5b0190b214360dc053",
                "name": "Opeyemi Odebode",
                "email": "odebode@user.io",
                "photo": "user-3.jpg",
                "role": "user"
            },
            {
                "_id": "637a12b0d7f067212d269764",
                "name": "Onu Victor",
                "email": "onu@user.io",
                "photo": "user-5.jpg",
                "role": "user"
            },
            {
                "_id": "637a130b04b3fc21ec8a30cb",
                "name": "Okeowo Abdul-qudus",
                "email": "okeowo@user.io",
                "photo": "user-6.jpg",
                "role": "user"
            }
        ]
    }
}
```

GET /users/:id General: Returns user based on id.

Sample: curl https://user-app-yfyx.onrender.com/api/v1/users/637a0db02ad3631a74214773

```JSON
    {
    "status": "success",
    "data": {
        "user": {
            "_id": "637a0db02ad3631a74214773",
            "name": "Abeeb Raheem",
            "email": "admin1@user.io",
            "photo": "user-1.jpg",
            "role": "admin",
            "__v": 0
        }
    }
}
```

PATCH /users/:id General: Returns updated data.

Sample: curl -d {"name": "Okeowo Abdulqudus"} https://user-app-yfyx.onrender.com/api/v1/users/63ceb99a03b75aee4ab3f556 -H "Content-Type: application/json" -X PATCH

```JSON
    {
    "status": "success",
    "data": {
        "user": {
            "_id": "63ceb99a03b75aee4ab3f556",
            "name": "Okeowo Abdulqudus",
            "email": "qudus@gmail.io",
            "role": "user",
            "__v": 0
        }
    }
}
```

DELETE /users/:id General: Returns null.

Sample: curl https://user-app-yfyx.onrender.com/api/v1/users/63ceb99a03b75aee4ab3f556 -H "Content-Type: application/json" -X DELETE

```JSON
    {
    "status": "success",
    "data": null
}
```
