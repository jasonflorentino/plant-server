// Imports
const {
  GraphQLObjectType, 
  GraphQLID,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

const PlantType = require('./objectTypes/plant');
const PlantModel = require('../routes/plants/plants.service');

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    plant: {
      type: PlantType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return PlantModel.getById(args.id);
      },
    },
    plants: {
      type: new GraphQLList(PlantType),
      resolve(_parent, _args) {
        return PlantModel.getAll();
      },
    },
  },
});

// Build Schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
