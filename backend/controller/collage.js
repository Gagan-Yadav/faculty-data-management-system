const db = require('../config/dbConfig');

exports.addCollege = async (req, res) => {
    try {
        let { college_code, college_name } = req.body;
        let insertData = "INSERT INTO college(college_code, college_name, created_at, updated_at) VALUES (?, ?, NOW(), NOW())";
        db.query(insertData, [college_code, college_name], (err, result) => {
            if (err) {
                return res.status(400).json({ status: 400, message: "Failed to add college or duplicate college code!", error: err });
            }
            return res.status(200).json({ status: 200, message: "College added successfully." });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.getCollegeDetails = async (req, res) => {
    try {
        const college_code = req.query.college_code;
        var query = `SELECT * FROM college WHERE college_code = ? AND is_delete = 0`;
        db.query(query, [college_code], (err, result) => {
            if (err) {
                return res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
            }
            if (result.length === 0) {
                return res.status(404).json({ status: 404, message: `College code ${college_code} not found or deleted.` });
            }
            return res.status(200).json({ status: 200, message: 'College details.', data: result });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.allCollege = async (req, res) => {
    try {
        var query = `SELECT * FROM college WHERE is_delete = 0`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
            }
            return res.status(200).json({ status: 200, message: `College list.`, data: result });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.updateCollege = async (req, res) => {
    try {
        let { college_name, college_code } = req.body;
        var updateQuery = `UPDATE college SET college_name = ?, updated_at = NOW() WHERE college_code = ?`;
        var updatedData = [college_name, college_code];
        db.query(updateQuery, updatedData, (err, result) => {
            if (err) {
                return res.status(400).json({ status: 400, message: "Failed to update college!", error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ status: 404, message: "College with the provided college_code does not exist!" });
            }
            return res.status(200).json({ status: 200, message: "College updated successfully." });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};

exports.removeCollege = async (req, res) => {
    try {
        let college_code = req.query.college_code;
        var removeQuery = `UPDATE college SET is_delete = 1, updated_at = NOW() WHERE college_code = ?`;
        db.query(removeQuery, [college_code], (err, result) => {
            if (err) {
                return res.status(400).json({ status: 400, message: "Failed to delete college!", error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ status: 404, message: "College with the provided college_code does not exist!" });
            }
            return res.status(200).json({ status: 200, message: "College deleted successfully." });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
};
