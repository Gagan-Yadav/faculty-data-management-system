const router = require("express").Router()
  const {addCollege,getCollegeDetails,allCollege ,updateCollege,removeCollege} = require("../controller/collage"),
  { upload }    = require('../helper/multerUpload');
  
  router.post("/add-college", addCollege);
  router.get("/get-college-details", getCollegeDetails);
  router.get("/college-list", allCollege);
  router.post("/edit-college", updateCollege);
  router.get("/remove-college", removeCollege);

  module.exports = router;