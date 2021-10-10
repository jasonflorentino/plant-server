# 🪴 Plant Tracker Server
***A simple Express server for week 7 review***

- [Installation](#installation)
- [Authentication](#authentication)
- [REST API](#rest-api)
- [GraphQL API](#graphql-api)

# Installation

1. Clone or download [this repo](https://github.com/jasonflorentino/plant-server).
2. Install dependencies:
```bash
$ npm install
```
3. Set environment variables: Create `.env` based on `.env_sample` and set the port number and API key.
4. Start the server:
```bash
$ node index.js

# Or run with change watcher:
$ npm run dev
```

# Authentication
You must provide an API key as a query string to every request.  
```
?api_key=<YOUR API KEY>
```

# REST API

## 💐 GET
### /plants 
- Gets an array of all plants.

### /plants/:id
- Gets a single plant by its id.  
- Example response:
```json
{
  "id": 1,
  "name": "Pam",
  "type": "Big Green One",
  "water_frequency": 7,
  "image_url": "https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "last_watered": 1620925225646
}
```

## 🌱 POST
### /plants
- Adds a new plant record.  
- Requires a body:
```javascript
{
  "name": "Name",
  "type": "Type",
  "water_frequency": 5, // Number of days
  "image_url": "Url",
  "last_watered": "YYYY-MM-DD" // Optional
}
```
- Response: The newly created plant object

## 🥀 DELETE
### /plants/:id
- Deletes a single plant by its id.  
- Response: # of plant records

## 🍀 PUT
### /plants/edit/:id
- Edits a plant by its id.  
- Requires a body with the properties to be updated. Example:
```json
{
  "name": "Michael",
  "water_frequency": 5
}
```
- Response: The updated plant object

### /plants/water/:id
- Updates the last_watered date to the current time.  
- Response: The updated plant object

# GraphQL API

## 🌿 Endpoints
All GraphQL queries should be sent as GET or POST requests to `/graphql`

## 🌵 Objects

### Plant
```graphql
Plant {
  id ID
  name! String
  type! String
  water_frequency! Int
  image_url! String
  last_watered! Float
}
```

## 💐 Queries

### `plant`
Returns one plant by ID.

|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | `id` | `ID` | The ID of the plant to get | ✅ |
| **Possible Returns** | `plant.*` | `Plant` |  Any requested field from the Plant object | --- |

### `plants`
Returns a list of plants

|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | *none* | --- | --- | --- |
| **Possible Returns** | --- | `Plant[]` |  A list of Plant objects and any of their requested fields | --- |

## 🌱 Mutations

### `addPlant`
Creates a new plant

|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | `name` | `String` | The name of the new plant | ✅ |
|                | `type` | `String` | The type of the new plant | ✅ |
|                | `water_frequency` | `Int` | Number of days after which the plant should be watered | ✅ |
|                | `image_url` | `String` | The URL for the image of the plant | ✅ |
|                | `last_watered` | `String` | When the plant was last watered in "YYYY-MM-DD" format | ❌ |
| **Possible Returns** | `plant.*` | `Plant` |  Any requested field from the newly created Plant object | --- |

### `editPlant`
Edits a plant given its ID.

|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | `id` | `ID` | The ID of the plant to edit | ✅ |
|                | `name` | `String` | The new name for the plan | ❌ |
|                | `type` | `String` | The new type for the plant | ❌ |
|                | `water_frequency` | `Int` | Number of days after which the plant should be watered | ❌ |
|                | `image_url` | `String` | The new URL for the plant's image | ❌ |
|                | `last_watered` | `String` | When the plant was last watered in "YYYY-MM-DD" format | ❌ |
| **Possible Returns** | `plant.*` | `Plant` |  Any fields from the updated Plant object | --- |

### `deletePlant`
Deletes a plant given its ID.

|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | `id` | `ID` | The ID of the plant to delete | ✅ |
| **Possible Returns** | `plant.id` | `ID` |  The ID of the deleted plant | --- |

### `waterPlant`
Waters a plant given its ID.


|   | Name | Type | Description | Required? |
| :--- | :--- | :--- | :--- | :---: |
| **Arguments**  | `id` | `ID` | The ID of the plant to water | ✅ |
| **Possible Returns** | `plant.*` | `Plant` |  Any requested field from the updated Plant object | --- |

