const bcrypt = require("bcryptjs");

const fmsg = async (res, msg = "success", result = []) => {
  res.status(200).json({
    con: true,
    msg,
    result,
  });
};

module.exports = { 
    encode: password => bcrypt.hashSync(password),
    fmsg
 };
