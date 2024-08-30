const argon2 = require("argon2");
const UsersModel = require("../../database/models/UsersRepository");

exports.create = async (req, res) => {
  const { userName, userLastName, userEmail, userPassword } = req.body;
  const hashedPassword = await argon2.hash(userPassword);

  try {
    const user = new UsersModel({
      userName: userName,
      userLastName: userLastName,
      userEmail: userEmail,
      userPassword: hashedPassword,
      userRoles: 2,
    });

    (async () => {
      await user.save();
      res.json({ message: "Utilisateur enregistré avec succés" });
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "erreur lors de l'enregistrement de l'utilisateur !" });
  }
};

exports.findUserById = (req, res) => {
  try {
    (async () => {
      const userById = await UsersModel.findById(req.params.id);
      res.jsoormulairen(userById);
    })();
  } catch (err) {
    console.error(err);
    res.json({ message: "Erreur lors de la recherche de l'utilisateur" });
  }
};
