// Imports
const {
  GraphQLObjectType, 
  GraphQLSchema,
} = require("graphql");

const PlantQuery = require("./objects/plant.query");
const PlantMutation = require("./objects/plant.mutation");

// RootQuery
const RootQuery = new GraphQLObjectType({
  name  : "RootQueryType",
  fields: {
    plant : PlantQuery.getOne,
    plants: PlantQuery.getAll,
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name  : "Mutation",
  fields: {
    addPlant   : PlantMutation.addOne,
    editPlant  : PlantMutation.editOne,
    deletePlant: PlantMutation.deleteOne,
  },
});

// Build Schema
module.exports = new GraphQLSchema({
  query   : RootQuery,
  mutation: Mutation,
});
