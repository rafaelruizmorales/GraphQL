const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const cors = require('cors')

const schema = require('./schema')

const app = express();

// Allow Cross-Origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}.`));
