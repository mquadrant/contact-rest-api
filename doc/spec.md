## To get all Contacts

```
GET: /api/contacts
```

status code 200 if all the contacts are successfully returned.

This returns a json object of the following;

```json
[{
  "id": 23,
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power",
  "created" : "2019-01-21T08:24:05+01:00",
  "isBlocked": false
},
...
]
```

---

## To get blocked Contacts

```
GET: /api/contacts/blocked
```

status code 200 if the contacts is successfully returned.

This returns a json object of the following;

```json
[{
  "id": 23,
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power",
  "created" : "2019-01-21T08:24:05+01:00",
  "isBlocked": true
},...
]
```

---

## To get a Contact

```
GET: /api/contacts/contactId
```

status code 200 if the contact is successfully returned.

This returns a json object of the following;

```json
{
  "id": 23,
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power",
  "created": "2019-01-21T08:24:05+01:00",
  "isBlocked": false
}
```

---

## To create a Contact

```
POST: /api/contact
```

### Request

Headers

```
Content-Type:application/json
```

Body

```ts
interface CreateContact {
  first_name: string;
  last_name?: string;
  phone: string; // This should be a valid phone number in international format e.g +2348034324562
  email?: string;
  str_address?: string;
  gender?: string;
  company_name: string;
}
```

for example

```json
{
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power"
}
```

### Response

status code 201 if the contact was successfully created.

This returns a json object of the posted contact in this format;

```ts
interface CreateContactResponse {
  id: string; // The uuid of the newly created contact
  created: string; // The ISO date of when the contact was created
  contact: CreateContact; // An Object with the contact information
}
```

```json
{
  "id": 4,
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power",
  "created": "2019-01-21T08:24:05+01:00"
}
```

---

## To Update a User

```
PUT: /api/contacts/contactId
```

### Request

Body

for example

```json
{
  "first_name": "Obasanjo",
  "last_name": "anila",
  "phone": "182-779-3953",
  "email": "anila@ihg.com",
  "str_address": "63 Chinook Terrace",
  "gender": "Male",
  "company_name": "Steel Power"
}
```

### Response

status code 200 if the contact is successfully deleted and the ID of the contact in the response body.

### Response

status code 404 if the contact to be deleted was not found.

This returns a json error object after the contact has been deleted;

```json
{
  "error": "error.unauthorized"
}
```

---

## To delete a Contact

```
DELETE: /api/users/userId
```

### Response

status code 200 if the contact is successfully deleted and the ID of the contact in the response body.

### Response

status code 404 if the contact to be deleted was not found.

This returns a json error object after the contact has been deleted;

```json
{
  "error": "error.unauthorized"
}
```

```
200 OK - the request was successful (some API calls may return 201 instead).

201 Created - the request was successful and a resource was created.

204 No Content - the request was successful but there is no representation to return (i.e. the response is empty).

400 Bad Request - the request could not be understood or was missing required parameters.

401 Unauthorized - authentication failed or user doesn't have permissions for requested operation.

403 Forbidden - access denied.

404 Not Found - resource was not found.

405 Method Not Allowed - requested method is not supported for resource.
```
