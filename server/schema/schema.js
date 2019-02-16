const {buildSchema} = require('graphql');

module.exports = buildSchema(`

    type AuthData {
        token: String!
    }
    type RootQuery {
        twitter: String
    }
    
    schema {
        query: RootQuery
    }
`);