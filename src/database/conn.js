import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URL);

const conn = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      dbName: process.env.MONGO_NAME,
    })
    .then(() => {
      console.log("Banco de dados sincronizado com sucesso!");
    })
    .catch((error) => {
      console.log(
        "Não foi possível sincronizar o banco de dados.",
        error.message
      );
    });
};

export default conn;
