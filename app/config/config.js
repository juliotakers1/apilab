module.exports = {
    PORT: process.env.PORT || 3000,
    // DB: process.env.DB || 'mongodb://localhost:27017/labapi'
    // DB: process.env.DB || 'mongodb://JVASQUEZ:jROBERTO12@0.0.0.0:27017/labapi?authSource=admin'
        DB: process.env.DB || 'mongodb://JVASQUEZ:jROBERTO12@localhost:27017/miapp?authSource=admin'


    // DB: process.env.DB || 'mongodb+srv://JROBERTO:jROBERTO12@cluster0.rlrqi.mongodb.net/labapi?retryWrites=true&w=majority'
}