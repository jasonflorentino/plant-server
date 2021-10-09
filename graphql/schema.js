// Imports
const {
  GraphQLObjectType, 
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const PlantType = require("./objectTypes/plant");
const PlantModel = require("../routes/plants/plants.service");

// RootQuery
const RootQuery = new GraphQLObjectType({
  name  : "RootQueryType",
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
      resolve() {
        return PlantModel.getAll();
      },
    },
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name  : "Mutation",
  fields: {
    addPlant: {
      type: PlantType,
      args: {
        name           : { type: GraphQLString },
        type           : { type: GraphQLString },
        water_frequency: { type: GraphQLInt },
        image_url      : { type: GraphQLString },
        last_watered   : { type: GraphQLString },
      },
      resolve(_parent, args) {
        return PlantModel.createPlant(args);
      },
    },
    editPlant: {
      type: PlantType,
      args: {
        id             : { type: GraphQLID },
        name           : { type: GraphQLString },
        type           : { type: GraphQLString },
        water_frequency: { type: GraphQLInt },
        image_url      : { type: GraphQLString },
        last_watered   : { type: GraphQLString },
      },
      resolve(_parent, args) {
        const { id, ...body } = args;
        return PlantModel.editPlant(id, body);
      },
    },
  },
});

// Build Schema
module.exports = new GraphQLSchema({
  query   : RootQuery,
  mutation: Mutation,
});
