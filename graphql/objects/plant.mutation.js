// Imports
const {
  GraphQLString,
} = require("graphql");

const PlantType = require("./plant.type");
const PlantModel = require("../../routes/plants/plants.service");

// Default Field Types
const { 
  id, 
  name, 
  type, 
  water_frequency, 
  image_url, 
} = PlantType.fields;

// Mutations
module.exports = {
  addOne: {
    type: PlantType,
    args: {
      name,
      type,
      water_frequency,
      image_url,
      last_watered: { type: GraphQLString },
    },
    resolve(_parent, args) {
      return PlantModel.createPlant(args);
    },
  },
  editOne: {
    type: PlantType,
    args: {
      id,
      name,
      type,
      water_frequency,
      image_url,
      last_watered: { type: GraphQLString },
    },
    resolve(_parent, args) {
      const { id, ...body } = args;
      return PlantModel.editPlant(id, body);
    },
  },
  deleteOne: {
    type: PlantType,
    args: { id },
    resolve(_parent, args) {
      PlantModel.deletePlant(args.id); // Returns new count of plants
      const emptyPlant = { // Create empty PlantType to return
        id             : args.id,
        name           : null,
        type           : null,
        water_frequency: null,
        image_url      : null,
        last_watered   : null,
      };
      return emptyPlant;
    },
  },
};