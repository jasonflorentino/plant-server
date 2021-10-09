// Imports
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

// Fields Definition
const fields = {
  id             : { type: GraphQLID },
  name           : { type: GraphQLString },
  type           : { type: GraphQLString },
  water_frequency: { type: GraphQLInt },
  image_url      : { type: GraphQLString },
  last_watered   : { type: GraphQLFloat },
};

// Object Type
const objectType = new GraphQLObjectType({
  name  : "Plant",
  fields: () => fields,
});

// Exports
module.exports = objectType;
module.exports.fields = fields;