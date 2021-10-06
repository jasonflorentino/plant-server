// Imports
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} = require("graphql");

// Object Type
module.exports = new GraphQLObjectType({
  name: "Plant",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    water_frequency: { type: GraphQLInt },
    image_url: { type: GraphQLString },
    last_watered: { type: GraphQLFloat },
  })
});