const db = require('../config/dbConfig');
const { getImageUrl } = require("../helper/imageUpload");

exports.addFaculty = async (req, res) => {
    try {
        let { college_id, faculty_name, gender, address, phone, designation, department, job_natures, date_of_joining, image } = req.body;
        let imagePath = "";

        if (req.file) {
            imagePath = await getImageUrl(req.file);
        }

        var insertData = "INSERT INTO faculty (college_id, faculty_name, gender, address, phone, designation, department, job_natures, date_of_joining, image, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
        db.query(insertData, [college_id, faculty_name, gender, address, phone, designation, department, job_natures, date_of_joining, imagePath], (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while adding faculty!" });
            } else {
                res.status(200).json({ status: 200, message: "Faculty added successfully." });
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.getFacultyDetails = async (req, res) => {
    try {
        const faculty_id = req.query.id;
        var query = `SELECT faculty.*, clg.college_name FROM faculty LEFT JOIN college AS clg ON clg.id = faculty.college_id WHERE faculty.id = ? AND faculty.is_delete = 0`;
        db.query(query, [faculty_id], (err, result) => {
            if (err) {
                res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
            } else {
                if (result.length == 0) {
                    res.status(404).json({ status: 404, message: `Faculty ID ${faculty_id} not found or deleted!` });
                } else {
                    res.status(200).json({ status: 200, message: 'Faculty details.', data: result });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.getAllFacultyList = async (req, res) => {
    try {
        var query = `SELECT faculty.*, clg.college_name FROM faculty LEFT JOIN college AS clg ON clg.id = faculty.college_id WHERE faculty.is_delete = 0`;
        db.query(query, (err, result) => {
            if (err) {
                res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
            } else {
                res.status(200).json({ status: 200, message: 'Faculty list.', data: result });
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.editFaculty = async (req, res) => {
    try {
        let { college_id, address, phone, designation, department, job_natures, date_of_joining, faculty_id } = req.body;
        let imagePath = "";

        if (req.file) {
            imagePath = await getImageUrl(req.file);
        }

        var updatedQuery = "UPDATE faculty SET college_id = ?, address = ?, phone = ?, designation = ?, department = ?, job_natures = ?, date_of_joining = ?, image = ?, updated_at = NOW() WHERE id = ?";
        var updatedData = [college_id, address, phone, designation, department, job_natures, date_of_joining, imagePath, faculty_id];

        db.query(updatedQuery, updatedData, (err, result) => {
            if (err) {
                if (err.message.includes('phone')) {
                    res.status(400).json({ status: 400, message: "Something went wrong while updating faculty or you are using the same phone number!" });
                } else {
                    res.status(400).json({ status: 400, message: "Something went wrong while updating faculty!" });
                }
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ status: 404, message: "Faculty with the provided ID does not exist!" });
                } else {
                    res.status(200).json({ status: 200, message: "Faculty updated successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.removeFaculty = async (req, res) => {
    try {
        let faculty_id = req.query.id;
        var removeQuery = `UPDATE faculty SET is_delete = ?, updated_at = NOW() WHERE id = ?`;
        var updatedData = [1, faculty_id];

        db.query(removeQuery, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while deleting faculty!" });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ status: 404, message: "Faculty with the provided ID does not exist!" });
                } else {
                    res.status(200).json({ status: 200, message: "Faculty deleted successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};
