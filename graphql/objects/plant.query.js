// Imports
const {
  GraphQLList,
} = require("graphql");

const PlantType = require("./plant.type");
const PlantModel = require("../../routes/plants/plants.service");

// Default Field Types
const { id } = PlantType.fields;

// Queries
module.exports = {
  getOne: {
    type: PlantType,
    args: { id },
    resolve(_parent, args) {
      return PlantModel.getById(args.id);
    },
  },
  getAll: {
    type: new GraphQLList(PlantType),
    resolve() {
      return PlantModel.getAll();
    },
  },
};