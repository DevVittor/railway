import userModel from "../models/userModel.js";
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).json({
      error: "É necessário ter o email e senha preenchidos corretamente",
    });
  }
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(403).json({ error: "Usuário já possui um cadastro" });
    }

    await userModel.create({ email, password });
    res.status(201).json({ msg: "Usuário cadastrado" });
  } catch (error) {
    return res.status(500).json({
      error: "Não foi possível cadastrar o usuário.",
      details: error.message,
    });
  }
};
export default registerUser;
