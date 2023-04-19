// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        async user(root, {id}){
        
        },
        async allUsers(root){
            return [
                {
                    id:10,
                    name: "Rakesh Jangid",
                    email: "rakesh@gmail.com",
                    menu:[]
                },
                {
                    id:11,
                    name: "Devkinandan Sharma",
                    email: "devki@gmail.com"
                } 
            ]
        },
        
        async receipe(root, {id}){

        }
    },
    Mutation:{
        async createUser(root, {name, email, password}, {models}){
            return models.User.create({
                name,
                email,
                password : await bcrypt.hash(password, 10)
            })
        },

        async createReceipe(root, {userId, title, direction, ingredients}, {models}){
            return models.User.create({
                userId,
                title,
                direction,
                ingredients
            })
        }
    }
};
 
module.exports = resolvers;
 