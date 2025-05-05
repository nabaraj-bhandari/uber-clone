# User API Documentation

## Register User

Creates a new user account and returns an authentication token.

### Endpoint

```
POST /users/register
```

### Request

The request body should be in JSON format with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Validation Rules

- `fullname.firstname`: Minimum 3 characters
- `fullname.lastname`: Minimum 3 characters
- `email`: Valid email format
- `password`: Minimum 6 characters

### Response

#### Success Response

- **Status Code**: 201 Created
- **Content**:

```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

##### Validation Error

- **Status Code**: 400 Bad Request
- **Content**:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

### Example

#### Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

#### Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65df12345678901234567890",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Notes

- The password is automatically hashed before storing in the database
- The response includes a JWT token that should be used for authenticated requests
- The password field is excluded from the user object in the response
