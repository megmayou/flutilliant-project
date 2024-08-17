const argon2 = require("argon2");
const AuthModel = require("../../database/models/UsersRepository");

exports.create = async (req, res) => {
  const { userName, userLastName, userEmail, userPassword, userRoles } =
    req.body;
  const hashedPassword = await argon2.hash(userPassword);

  try {
    const user = new AuthModel({
      userName: userName,
      userLastName: userLastName,
      userEmail: userEmail,
      userPassword: hashedPassword,
      userRoles: userRoles,
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
