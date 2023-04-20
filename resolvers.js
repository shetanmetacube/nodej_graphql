// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        async user(root, {id}){
            if(id==10)
                return {
                    id:10,
                    name: "Albert Eiensten",
                    email: "albert@gmail.com",
                    
            }
        },
        async allUsers(root, {limit}){
            return [
                {
                    id:10,
                    name: "Albert Eiensten",
                    email: "albert@gmail.com",
                    menu:[]
                },
                {
                    id:11,
                    name: "Thomas Edison",
                    email: "thomas@gmail.com"
                } ,
                {
                    id:12,
                    name: "Larry Phase",
                    email: "larray@gmail.com"
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
 