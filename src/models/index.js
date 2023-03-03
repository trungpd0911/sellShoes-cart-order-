const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://trungphan:09112003@test-01.awce2s2.mongodb.net/WDS_sellShoes?retryWrites=true&w=majority"
        );
        console.log("mongoose connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connectDb,
};