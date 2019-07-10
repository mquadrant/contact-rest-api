## To get a Contact

```
GET: /api/contacts/contactId
```

status code 200 if the contact is successfully returned.

This returns a json object of the following;

```json
{
  "name": "Seun Jayeoba",
  "email": "seun@gmail.com",
  "phone": "07063712398",
  "address": "30, Akingbade street, ketu, Lagos",
  "organisation": "Decagon Institute",
  "image": "www.image.com/randomimage/avatar/3"
}
```

---

## To get all Contacts

```
GET: /api/contacts
```

status code 200 if all the contacts are successfully returned.

This returns a json object of the following;

```json
[{
  "name": "Jame Jackson",
  "email": "sample@gmail.com",
  "phone": "07063712398",
  "address": "30, Akingbade street, ketu, Lagos",
  "organisation": "Decagon Institute",
  "image": "www.image.com/randomimage/avatar/3"
},
...
]
```

---

## To add a Contact

```
POST: /api/contacts/contactId
```

### Request

Headers

```
Content-Type:application/json
```

Body

```json
{
  "name": "Daniel Oladele",
  "email": "seun@gmail.com",
  "phone": "07063712398",
  "address": "30, Akingbade street, ketu, Lagos",
  "organisation": "Decagon Institute",
  "image": "www.image.com/randomimage/avatar/3"
}
```

### Response

status code 201 if the contact was successfully created.

This returns a json object of the posted contact in this format;

```json
{
  "name": "Daniel Oladele",
  "email": "seun@gmail.com",
  "phone": "07063712398",
  "address": "30, Akingbade street, ketu, Lagos",
  "organisation": "Decagon Institute",
  "image": "www.image.com/randomimage/avatar/3"
}
```

---

## To Update a User

```
PUT: /api/contacts/contactId
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
