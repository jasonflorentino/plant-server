# Plants API

## AUTHENTICATION
You must provide an API key as a query string to every request.  
`?api_key=<YOUR API KEY>`

## GET
### /plants 
Gets an array of all plants.

### /plants/:id
Gets a single plant by its id.  
Example response:
```
{
  "id": 1,
  "name": "Pam",
  "type": "Big Green One",
  "water_frequency": 7,
  "image_url": "https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "last_watered": 1620925225646
}
```

## POST
### /plants
Adds a new plant record.  
*Requires a body:
```
{
  "name": "Name",
  "type": "Type",
  "water_frequency": # of Days,
  "image_url": "Url",
  "last_watered": "YYYY-MM-DD" (optional)
}
```
Response: The newly created plant object

## DELETE
### /plants/:id
Deletes a single plant by its id.  
Response: # of plant records

## PUT
### /plants/edit/:id
Edits a plant by its id.  
*Requires a body with the properties to be updated.  
Response: The updated plant object

### /plants/water/:id
Updates the last_watered date to the current time.  
Response: The updated plant object
