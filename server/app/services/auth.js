const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      return res
        .status(401)
        .json({ message: "Authorization header has not the 'Bearer' type" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET);
    if (!decoded.sub) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.auth = { id: decoded.sub };
    next();
  } catch (err) {
    console.error("Erreur lors de la vérification du token:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
