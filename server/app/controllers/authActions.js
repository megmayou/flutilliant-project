const argon2d = require("argon2");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const AuthModel = require("../../database/models/UsersRepository");

exports.login = async (req, res) => {
  try {
    const findUserAccount = await AuthModel.findOne({
      userEmail: req.body.userEmail,
    });

    if (findUserAccount == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2d.verify(
      findUserAccount.userPassword,
      req.body.userPassword
    );
    if (verified) {
      delete AuthModel.userPassword;
      const token = await jwt.sign(
        { sub: AuthModel._id },
        process.env.APP_SECRET,
        {
          expiresIn: "12000",
        }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      );

      res.json({
        token,
        findUserAccount,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
    res.json({ message: "Authentification impossible" });
  }
};
