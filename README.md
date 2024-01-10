# Instructions to Run Project - 

- **Clone this git repo** using command git clone ...
- **Run command** - npm install
- **create file** - create a .env file and  define two constants MongoDBURI,JWT_SECRET
- **Run command** - npm start

# Instructions to Test Api - 

- **Signup** - Url (localhost:3000/api/signup) -> Post -> Body -> x-www-form-urlencoded -> key - [email,name,password]
- **Signin** - Url (localhost:3000/api/signin) -> Post -> Body -> x-www-form-urlencoded -> key - [email,password] -> keep the "data" value from response
- **Create Tweet** - Url (localhost:3000/api/tweets) Post -> x-www-form-urlencoded -> key - [content,likes,noOfRetweets,comment] and Authorization -> Type (Bearer Token) - (put the "data" value copied during signin)
- **Get Tweets** - Url (localhost:3000/api/tweets/:id) -> Get -> id - tweet object_id - Authorization -> Type (Bearer Token) - (put the "data" value copied during signin)
- **Like a Tweet** - Url (localhost:3000/api/likes/toggle) -> Post -> Body -> x-www-form-urlencoded -> key - [userId,modelId,modelType]