to get started:

1. `npm i` to install
2. `npm start` to start the server running at localhost:3000


| VERB           |ROUTE                          |WHAT IT DOES                                     |
|----------------|-------------------------------|-------------------------------------------------|
| GET            |`/game`                        |get the game state                               |
| POST           |`/game`                        |add a guess using JSON body ` { "letter": "x" } `|
| PUT            |`/reset`                       |resets the game                                  |
