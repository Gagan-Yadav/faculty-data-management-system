const router = require("express").Router()
  const {addSubAdmin,login,getSubAdminDetails,allSubAdmins,updateSubAdmin,removeSubAdmin} = require("../controller/subAdmin");
  
  router.post("/add-sub-admin", addSubAdmin);
  router.post("/sub-admin-login", login);
  router.get("/sub-admin-details", getSubAdminDetails);
  router.get("/sub-admin-list", allSubAdmins);
  router.post("/edit-sub-admin", updateSubAdmin);
  router.get("/remove-sub-admin", removeSubAdmin);




  
  module.exports = router;