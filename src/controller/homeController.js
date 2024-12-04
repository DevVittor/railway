const homePage = async (req, res) => {
  return res.status(200).json({ msg: "Tudo ok com o back." });
};
export default homePage;
