const router = require("express").Router()
  const {login,updateAdmin} = require("../controller/admin");
  
  router.post("/admin-login", login);
  router.post("/edit-admin", updateAdmin);

  
  module.exports = router;