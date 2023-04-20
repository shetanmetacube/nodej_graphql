const typeDefs = `#graphql
    type User {
        id: Int
        name: String
        email: String
        menu: [Receipe]
    }

    type Receipe {
        id: Int
        title: String
        ingredients: String
        direction: String
        user: User
    }

    type Query {
        user(id: Int): User
        allUsers(limit: Int):  [User]
        allReceipe: [Receipe]
        receipe(id: Int): Receipe
    }

    type Mutation {
        createUser(
            name: String,
            email: String,
            password: String
        ) : User, 

        createReceipe(
            userId: Int,
            title: String,
            direction: String!,
            ingredients: String!
        ) : Receipe
    }
`;

module.exports = typeDefs;