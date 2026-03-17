import mongoose from "mongoose";

const ConnectDB = async ()=>{
    try {
        if(!process.env.MONGO_URI){
            throw new Error("not Found URI");
            
        }
         const connect = await mongoose.connect(process.env.MONGO_URI, {
  dbName: "TaskDB"
});
         console.log("Mongo Connected",`${connect.connection.host}`) 
         console.log("DB",`${connect.connection.name}`) 
    } catch (error) {
        console.error("Mongo BASE field to connect", error.message)
        process.exit(1);
    }
   
};
export default ConnectDB

// import mongoose from "mongoose";

// const ConnectDB = async () => {
//     try {
//         if (!process.env.MONGO_URI) {
//             throw new Error("MONGO_URI not found");
//         }

//         console.log("Connecting to MongoDB...");

//         const connect = await mongoose.connect(process.env.MONGO_URI, {
//             family: 4, // ✅ force IPv4 (fixes many connection issues)
//         });

//         console.log("Mongo Connected:", connect.connection.host);
//         console.log("DB Name:", connect.connection.name);

//     } catch (error) {
//         console.error("MongoDB Connection Error ❌:", error.message);
//         process.exit(1);
//     }
// };

// export default ConnectDB;