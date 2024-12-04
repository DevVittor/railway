import mongoose from "mongoose";

const conn = async () => {
  mongoose
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