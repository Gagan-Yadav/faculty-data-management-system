const router = require("express").Router()
  const {addFaculty,getFacultyDetails,getAllFacultyList,editFaculty,removeFaculty} = require("../controller/faculty"),
  { upload }    = require('../helper/multerUpload');
  
  router.post("/add-faculty",upload.single("image"), addFaculty);
  router.get("/faculty-details", getFacultyDetails);
  router.get("/faculty-list", getAllFacultyList);
  router.post("/edit-faculty",upload.single("image"), editFaculty);
  router.get("/remove-faculty",removeFaculty);

  module.exports = router;