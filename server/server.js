const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');


const app = express();
const PORT = process.env.PORT || "8000";

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

