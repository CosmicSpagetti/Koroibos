# Koroibos
An Api Designed 

## About 

This was The Final project in Mod 4 at Turing [Turing School of Software & Design](https://turing.io/) 

## Local Build

To install this project locally, follow these directions.

### Requirements
* PostgreSQL
* NPM Version `6.11.3`
* Express Version: `4.16.1`

### Setup

* Download this project into a working directory.

* Install the requirements using npm:
> npm install

  This will install the required pacakges for the project.

* Create and migrate the local database using sequelize:
> npx sequelize db:create
> npx sequelize db:migrate 
> npx jake seedDataBase

* As an Express app, you are able to start the server using the following command:
> npm start

## Endpoints

The following endpoints are exposed on this API:

* /api/v1/olympians
* /api/v1/olympians?age=youngest
* /api/v1/olympians?age=oldest
* /api/v1/olympian_stats

#### /api/v1/olympians
This endpoint takes a get request. It returns a list of all Olympian athletes in the database, and an error message if no athletes are present in the database.

An example response is as follows:
```
{
  "olympians":
  [
    {
      "name":"Brian Richard Baker",
      "team":"United States",
      "age":31,
      "sport":"Tennis",
      "total_medals_won":"0"
    },
    {
      "name":"Inna Vasilyevna Deriglazova",
      "team":"Russia",
      "age":26,
      "sport":"Fencing",
      "total_medals_won":"1"
    },
    {...}
  ]
}
```

#### /api/v1/olympians?age=youngest
This endpoint takes a get request. It returns the youngest of all Olympian athletes in the database, and an error message if no athletes are present in the database.

An example response is as follows:
```
{
  "olympians":
    [
      {
        "name":"Ana Iulia Dascl",
        "team":"Romania",
        "age":13,
        "sport":"Swimming",
        "total_medals_won":"0"
      }
    ]
  }
}
```


#### /api/v1/olympians?age=oldest
This endpoint takes a get request. It returns the oldest of all Olympian athletes in the database, and an error message if no athletes are present in the database.

An example response is as follows:
```
{
  "olympians":
    [
      {
        "name":"Julie Brougham",
        "team":"New Zealand",
        "age":62,
        "sport":"Equestrianism",
        "total_medals_won":"0"
      }
    ]
  }
}
```
