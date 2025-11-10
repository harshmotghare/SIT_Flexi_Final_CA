import app from "./app.js";
//import { dbConnection } from "./database/dbConnection.js";
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


