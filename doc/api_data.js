define({ "api": [
  {
    "type": "post",
    "url": "/actors/add",
    "title": "Add an actor",
    "permission": [
      {
        "name": "The user has to be logged in to access this route"
      }
    ],
    "name": "addActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the Actor (YYYY-MM-DD).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CountryId",
            "description": "<p>country of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "GenderId",
            "description": "<p>gender of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"firstname\": \"Jeremy\",\n    \"lastname\": \"Renner\",\n    \"birthdate\": \"1971-01-07\",\n    \"CountryId\" : 1,\n    \"GenderId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CountryId",
            "description": "<p>country of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "GenderId",
            "description": "<p>gender of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 6,\n     \"firstname\": \"Jeremy\",\n     \"lastname\": \"Renner\",\n     \"birthdate\": \"1971-01-07\",\n     \"CountryId\": 1,\n     \"GenderId\": 1,\n     \"updatedAt\": \"2020-03-19T17:43:42.369Z\",\n     \"createdAt\": \"2020-03-19T17:43:42.369Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Access denied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"You must be logged in to access this page\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "delete",
    "url": "/actors/:id",
    "title": "Delete an actor",
    "permission": [
      {
        "name": "The user has to be logged in to access this route"
      }
    ],
    "name": "deleteActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Actor deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Actor 6 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Access denied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"You must be logged in to access this page\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "put",
    "url": "/actors/:id",
    "title": "Edit an actor",
    "permission": [
      {
        "name": "The user has to be logged in to access this route"
      }
    ],
    "name": "editActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>firstname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>lastname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthdate",
            "description": "<p>birthdate of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CountryId",
            "description": "<p>country of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "GenderId",
            "description": "<p>gender of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\": \"Jane\",\n     \"GenderId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Actor updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Actor 6 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Access denied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"You must be logged in to access this page\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors",
    "title": "Show all actors",
    "permission": [
      {
        "name": "The user has to be logged in to access this route"
      }
    ],
    "name": "getActors",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Country",
            "description": "<p>foreign key for the country of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Gender",
            "description": "<p>foreign key for the gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Movies",
            "description": "<p>foreign key for the movie(s) of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n     \"id\": 5,\n     \"firstname\": \"Amy\",\n     \"lastname\": \"Adams\",\n     \"birthdate\": \"1974-08-20\",\n     \"createdAt\": \"2020-03-19T09:33:49.000Z\",\n     \"updatedAt\": \"2020-03-19T09:33:49.000Z\",\n     \"Country\": {\n         \"id\": 1,\n         \"name\": \"USA\"\n     },\n     \"Gender\": {\n         \"id\": 2,\n         \"gender\": \"female\"\n     },\n     \"Movies\": [\n         {\n             \"id\": 1,\n             \"title\": \"Arrival\",\n             \"year\": 2016,\n             \"MovieActor\": {\n                 \"createdAt\": \"2020-03-19T09:37:24.000Z\",\n                 \"updatedAt\": \"2020-03-19T09:37:24.000Z\",\n                 \"ActorId\": 5,\n                 \"MovieId\": 1\n             }\n         }\n     ]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Access denied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"You must be logged in to access this page\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/:id",
    "title": "Show details of an actor",
    "permission": [
      {
        "name": "The user has to be logged in to access this route"
      }
    ],
    "name": "getActorsDetail",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Actor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "birthdate",
            "description": "<p>birthdate of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Country",
            "description": "<p>foreign key for the country of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Gender",
            "description": "<p>foreign key for the gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Movies",
            "description": "<p>foreign key for the movie(s) of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n     \"id\": 5,\n     \"firstname\": \"Amy\",\n     \"lastname\": \"Adams\",\n     \"birthdate\": \"1974-08-20\",\n     \"createdAt\": \"2020-03-19T09:33:49.000Z\",\n     \"updatedAt\": \"2020-03-19T09:33:49.000Z\",\n     \"Country\": {\n         \"id\": 1,\n         \"name\": \"USA\"\n     },\n     \"Gender\": {\n         \"id\": 2,\n         \"gender\": \"female\"\n     },\n     \"Movies\": [\n         {\n             \"id\": 1,\n             \"title\": \"Arrival\",\n             \"year\": 2016,\n             \"MovieActor\": {\n                 \"createdAt\": \"2020-03-19T09:37:24.000Z\",\n                 \"updatedAt\": \"2020-03-19T09:37:24.000Z\",\n                 \"ActorId\": 5,\n                 \"MovieId\": 1\n             }\n         }\n     ]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Access denied</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"message\": \"You must be logged in to access this page\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "post",
    "url": "/categories/add",
    "title": "Add a category",
    "name": "addCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Romance\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 2,\n  \"name\": \"Romance\",\n  \"updatedAt\": \"2020-03-17T15:26:58.984Z\",\n  \"createdAt\": \"2020-03-17T15:26:58.984Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/category.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Delete a category",
    "name": "deleteCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Category deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Category 6 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/category.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "Edit a category",
    "name": "editCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Science Fiction\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Category updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Category 6 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/category.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Show all categories",
    "name": "getCategories",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"name\": \"Thriller\",\n     \"createdAt\": \"2020-03-19T09:30:19.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:19.000Z\"\n },\n {\n     \"id\": 2,\n     \"name\": \"Drama\",\n     \"createdAt\": \"2020-03-19T09:30:26.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:26.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/category.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Show detail of a category",
    "name": "getCategoriesDetail",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"name\": \"Thriller\",\n     \"createdAt\": \"2020-03-19T09:30:19.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:19.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/category.controller.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/countries/add",
    "title": "Add a country",
    "name": "addCountry",
    "group": "Country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Germany\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"Germany\",\n  \"updatedAt\": \"2020-03-17T15:26:58.984Z\",\n  \"createdAt\": \"2020-03-17T15:26:58.984Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/country.controller.js",
    "groupTitle": "Country"
  },
  {
    "type": "delete",
    "url": "/countries/:id",
    "title": "Delete a country",
    "name": "deleteCountry",
    "group": "Country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Country.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Country deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Country 1 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/country.controller.js",
    "groupTitle": "Country"
  },
  {
    "type": "put",
    "url": "/countries/:id",
    "title": "Edit a country",
    "name": "editCountry",
    "group": "Country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Sweden\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Country updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Country 1 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/country.controller.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries",
    "title": "Show all countries",
    "name": "getCountries",
    "group": "Country",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"name\": \"USA\",\n     \"createdAt\": \"2020-03-19T09:30:19.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:19.000Z\"\n },\n {\n     \"id\": 2,\n     \"name\": \"France\",\n     \"createdAt\": \"2020-03-19T09:30:26.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:26.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/country.controller.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries/:id",
    "title": "Show detail of a country",
    "name": "getCountriesDetail",
    "group": "Country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Country</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"name\": \"USA\",\n     \"createdAt\": \"2020-03-19T09:30:19.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:19.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/country.controller.js",
    "groupTitle": "Country"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E:\\fullStack\\projects-on-github\\nodejs-movie-dashboard-api\\doc\\main.js",
    "groupTitle": "E:\\fullStack\\projects-on-github\\nodejs-movie-dashboard-api\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/genders/add",
    "title": "Add a gender",
    "name": "addGender",
    "group": "Gender",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>value of the Gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"gender\": \"female\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>value of the Gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"gender\": \"female\",\n  \"updatedAt\": \"2020-03-17T15:26:58.984Z\",\n  \"createdAt\": \"2020-03-17T15:26:58.984Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/gender.controller.js",
    "groupTitle": "Gender"
  },
  {
    "type": "delete",
    "url": "/genders/:id",
    "title": "Delete a gender",
    "name": "deleteGender",
    "group": "Gender",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Gender.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Gender deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Gender 1 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/gender.controller.js",
    "groupTitle": "Gender"
  },
  {
    "type": "put",
    "url": "/genders/:id",
    "title": "Edit a gender",
    "name": "editGender",
    "group": "Gender",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>value of the Gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"gender\": \"male\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Gender updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Gender 1 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/gender.controller.js",
    "groupTitle": "Gender"
  },
  {
    "type": "get",
    "url": "/genders",
    "title": "Show all genders",
    "name": "getGenders",
    "group": "Gender",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>value of the Gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"gender\": \"female\",\n     \"createdAt\": \"2020-03-19T09:30:19.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:19.000Z\"\n },\n {\n     \"id\": 2,\n     \"gender\": \"male\",\n     \"createdAt\": \"2020-03-19T09:30:26.000Z\",\n     \"updatedAt\": \"2020-03-19T09:30:26.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/gender.controller.js",
    "groupTitle": "Gender"
  },
  {
    "type": "get",
    "url": "/genders/:id",
    "title": "Show detail of a gender",
    "name": "getGendersDetail",
    "group": "Gender",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Gender</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>value of the Gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"gender\": \"female\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/gender.controller.js",
    "groupTitle": "Gender"
  },
  {
    "type": "ActorMovie",
    "url": "/movies/actor/:id",
    "title": "Add an actor to a movie",
    "name": "addActor",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie in the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the actor in the body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"actorId\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MovieId",
            "description": "<p>id of the movie associated with the actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ActorId",
            "description": "<p>id of the actor associated with the movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Movie deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/movies/add",
    "title": "Add a movie",
    "name": "addMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>release of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>poster of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>director of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>category associated with the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"Arrival\",\n    \"year\": 2016,\n    \"picture\": \"Arrival picture\",\n    \"synopsis\": \"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.\",\n    \"director\": \"Denis Villeneuve\",\n    \"CategoryId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>release of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>poster of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>director of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>category associated with the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"title\": \"Arrival\",\n    \"year\": 2016,\n    \"picture\": \"Arrival picture\",\n    \"synopsis\": \"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.\",\n    \"director\": \"Denis Villeneuve\",\n    \"CategoryId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "delete",
    "url": "/movies/delete/:id",
    "title": "Delete a movie",
    "name": "deleteMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Movie deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Movie 6 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "put",
    "url": "/movies/edit/:id",
    "title": "Edit a movie",
    "name": "editMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "year",
            "description": "<p>release of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>poster of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "synopsis",
            "description": "<p>synopsis of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director",
            "description": "<p>director of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CategoryId",
            "description": "<p>category associated with the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"year\": 2010,\n     \"director\": \"Martin Scorsese\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Movie updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Movie 6 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movies",
    "title": "Show all movies",
    "name": "getMovies",
    "group": "Movie",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>release of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>poster of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>director of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Category",
            "description": "<p>category associated with the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Actors",
            "description": "<p>actor(s) associated with the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>note(s) associated with the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"title\": \"Arrival\",\n         \"year\": 2016,\n         \"picture\": \"Arrival picture\",\n         \"synopsis\": \"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.\",\n         \"director\": \"Denis Villeneuve\",\n         \"createdAt\": \"2020-03-19T09:34:59.000Z\",\n         \"updatedAt\": \"2020-03-19T09:34:59.000Z\",\n         \"Category\": {\n             \"id\": 6,\n             \"name\": \"Science Fiction\"\n         },\n         \"Actors\": [\n             {\n                 \"id\": 5,\n                 \"firstname\": \"Amy\",\n                 \"lastname\": \"Adams\",\n                 \"MovieActor\": {\n                     \"createdAt\": \"2020-03-19T09:37:24.000Z\",\n                     \"updatedAt\": \"2020-03-19T09:37:24.000Z\",\n                     \"ActorId\": 5,\n                     \"MovieId\": 1\n                 }\n             }\n         ],\n         \"Notes\": [\n             {\n                 \"note\": 5\n             },\n             {\n                 \"note\": 5\n             },\n         ]\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movies/:id",
    "title": "Show detail of a movie",
    "name": "getMoviesDetail",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Movie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>release of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>poster of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>synopsis of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>director of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Category",
            "description": "<p>category associated with the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Actors",
            "description": "<p>actor(s) associated with the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Notes",
            "description": "<p>note(s) associated with the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"title\": \"Arrival\",\n         \"year\": 2016,\n         \"picture\": \"Arrival picture\",\n         \"synopsis\": \"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.\",\n         \"director\": \"Denis Villeneuve\",\n         \"createdAt\": \"2020-03-19T09:34:59.000Z\",\n         \"updatedAt\": \"2020-03-19T09:34:59.000Z\",\n         \"Category\": {\n             \"id\": 6,\n             \"name\": \"Science Fiction\"\n         },\n         \"Actors\": [\n             {\n                 \"id\": 5,\n                 \"firstname\": \"Amy\",\n                 \"lastname\": \"Adams\",\n                 \"MovieActor\": {\n                     \"createdAt\": \"2020-03-19T09:37:24.000Z\",\n                     \"updatedAt\": \"2020-03-19T09:37:24.000Z\",\n                     \"ActorId\": 5,\n                     \"MovieId\": 1\n                 }\n             }\n         ],\n         \"Notes\": [\n             {\n                 \"note\": 5\n             },\n             {\n                 \"note\": 5\n             },\n         ]\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/notes/add",
    "title": "Add a note",
    "name": "addNote",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "note",
            "description": "<p>value of the Note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "MovieId",
            "description": "<p>movie associated with the Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"note\": 3,\n    \"MovieId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "note",
            "description": "<p>value of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "MovieId",
            "description": "<p>movie associated with the Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 6,\n     \"note\": 3,\n     \"MovieId\": 2,\n     \"updatedAt\": \"2020-03-19T18:42:23.171Z\",\n     \"createdAt\": \"2020-03-19T18:42:23.171Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/note.controller.js",
    "groupTitle": "Note"
  },
  {
    "type": "delete",
    "url": "/notes/:id",
    "title": "Delete a note",
    "name": "deleteNote",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Note.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Note deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Note 6 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/note.controller.js",
    "groupTitle": "Note"
  },
  {
    "type": "put",
    "url": "/notes/:id",
    "title": "Edit a note",
    "name": "editNote",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "note",
            "description": "<p>value of the Note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "MovieId",
            "description": "<p>movie associated with the Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"note\": 3,\n    \"MovieId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Note updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"Note 6 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/note.controller.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/notes",
    "title": "Show all notes",
    "name": "getNotes",
    "group": "Note",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "note",
            "description": "<p>value of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Movie",
            "description": "<p>movie associated with the Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"note\": 5,\n     \"createdAt\": \"2020-03-19T09:39:35.000Z\",\n     \"updatedAt\": \"2020-03-19T09:43:59.000Z\",\n     \"Movie\": {\n         \"id\": 1,\n         \"title\": \"Arrival\"\n     }\n },\n {\n     \"id\": 2,\n     \"note\": 1,\n     \"createdAt\": \"2020-03-19T09:47:30.000Z\",\n     \"updatedAt\": \"2020-03-19T09:47:30.000Z\",\n     \"Movie\": {\n         \"id\": 2,\n         \"title\": \"Star Wars IX : The Rise of Skywalker\"\n     }\n },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/note.controller.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/notes/:id",
    "title": "Show detail of a note",
    "name": "getNotesDetail",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Note</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "note",
            "description": "<p>value of the Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Movie",
            "description": "<p>movie associated with the Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"note\": 5,\n     \"createdAt\": \"2020-03-19T09:39:35.000Z\",\n     \"updatedAt\": \"2020-03-19T09:43:59.000Z\",\n     \"Movie\": {\n         \"id\": 1,\n         \"title\": \"Arrival\"\n     }\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/note.controller.js",
    "groupTitle": "Note"
  },
  {
    "type": "post",
    "url": "/users/signin",
    "title": "User signin",
    "name": "addUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"john.doe@gmail.com\",\n  \"password\": \"1234\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"email\": \"john.doe@gmail.com\",\n   \"password\": \"$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e\",\n   \"createdAt\": \"2020-03-19T10:03:44.000Z\",\n   \"updatedAt\": \"2020-03-19T10:03:44.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>email already used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"message\": \"This email is already used\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/delete/:id",
    "title": "Delete a user",
    "name": "deleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"User 6 has been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/edit/:id",
    "title": "Edit a user",
    "name": "editUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"john.doe@gmail.com\",\n  \"password\": \"1234\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>user updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"User 6 has been updated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Show all users",
    "name": "getUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"email\": \"john.doe@gmail.com\",\n   \"password\": \"$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e\",\n   \"createdAt\": \"2020-03-19T10:03:44.000Z\",\n   \"updatedAt\": \"2020-03-19T10:03:44.000Z\"\n },\n {\n   \"id\": 2,\n   \"email\": \"jane.doe@gmail.com\",\n   \"password\": \"$2b$10$oDtGs.Bzx/mvHpu4lG.JXOdFhLsW/jiSOtrIuRQZ3XrfjbdCSMCK.\",\n   \"createdAt\": \"2020-03-19T10:04:06.000Z\",\n   \"updatedAt\": \"2020-03-19T10:04:06.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Show detail of a user",
    "name": "getUsersDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"email\": \"john.doe@gmail.com\",\n   \"password\": \"$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e\",\n   \"createdAt\": \"2020-03-19T10:03:44.000Z\",\n   \"updatedAt\": \"2020-03-19T10:03:44.000Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "User login",
    "name": "loginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"john.doe@gmail.com\",\n  \"password\": \"1234\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>validation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>informations of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"message\": \"Authentication succeded\",\n   \"user\": {\n       \"id\": 1,\n       \"email\": \"john.doe@gmail.com\",\n       \"password\": \"$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e\",\n       \"createdAt\": \"2020-03-19T10:03:44.000Z\",\n       \"updatedAt\": \"2020-03-19T10:03:44.000Z\"\n   },\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU4NDY1MTE0MCwiZXhwIjoxNTg0Njc5OTQwfQ.G1XJOS7W_r-JMOGCzE_joWDKysiYXSWIXL_qSus6mIQ\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"message\": \"Authentication failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/user.controller.js",
    "groupTitle": "User"
  }
] });
