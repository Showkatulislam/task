const jwt = require("jsonwebtoken");
const createJwtToken = (user) => {
  console.log(user);

  if (typeof user !== "object") {
    throw new Error("User must be object");
  }
  try {
    const token = jwt.sign(user, "saikat", {
      algorithm: "HS512",
      expiresIn: "20m",
    });
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = createJwtToken;
