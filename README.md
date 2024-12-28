# nodeplace-rest-api-mongodb
This is a starter template for building RESTful APIs with NodePlaceJS and MongoDB.

## Getting Started
1. Install NodePlace CLI:

```bash
npm install -g @nodeplace/cli
```

2. Create Project:

```bash
npx create-nodeplace-app --template@nodeplace-rest-api-mongodb
```

3. Configure Environment:
  - Create a .env file in the project root.
  - Add your MongoDB connection string:

`
PORT= 
DB_CONN_STR=<your_mongodb_connection_string> 
`

4. Run the application:

```bash
npm run dev
```

### Features:
  - * RESTful API: Supports GET, POST, PUT, PATCH, and DELETE operations.
  - * MongoDB Integration: Connects to a MongoDB database using Mongoose.
  - * Data Validation: Includes basic data validation for API requests.
  - * Clean Architecture: Follows a well-structured architecture with clear separation of concerns.
  - * Easy Customization: Easily adapt the template to your specific project needs.

  Contributions are welcome!