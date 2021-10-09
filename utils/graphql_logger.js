module.exports = graphqlLogger;

function graphqlLogger(req, _res, next) {
  if (process.env.NODE_ENV === "production") next();
  console.log("Incoming GraphQL Query:");
  console.log(req.body.query);
  next();
}