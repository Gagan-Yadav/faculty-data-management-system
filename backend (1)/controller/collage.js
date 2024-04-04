const db = require('../config/dbConfig');

exports.addCollege = async (req, res) => {
    try {
        let { college_code, college_name } = req.body;
        var insertData = "INSERT INTO college(college_code,college_name,created_at,updated_at)VALUES(?,?,now(),now())";
        db.query(insertData, [college_code, college_name], (err, result) => {
            if (err) {
                res.send({ status: 400, message: "Something went wrong while Add college or you are using same college code!" });

            } else {
                res.send({ status: 200, message: "college Added successfully." });
            }
        })
    }
    catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.getCollegeDetails = async (req, res) => {
    try {
        const college_code = req.query.college_code;
        var query = `select * from college where college_code = ${college_code} and is_delete = 0`;
        db.query(query, (err, result) => {
            if (result.length == 0) {
                res.send({ status: 404, message: `college code Not found.May be the college code  ${college_code}  is not in Database or deleted!` });
            } else {
                res.send({ status: 200, message: 'college details.', data: result });
            }
        })
    } catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.allCollege = async (req, res) => {
    try {
        var query = `select * from college where  is_delete = 0`;
        db.query(query, (err, result) => {
            if (result.length == 0) {
                res.send({ status: 400, message: `something went wrong to fetch college list!` });
            } else {
                res.send({ status: 200, message: `college list.`, data: result });
            }
        })
    } catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.updateCollege = async (req, res) => {
    try {
        let { college_name, college_code } = req.body;
        var updateQuery = `UPDATE college SET college_name = ?, updated_at = NOW() WHERE college_code = ?`;
        var updatedData = [college_name, college_code];

        db.query(updateQuery, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while updating college!" });
            } else {
                if (result.affectedRows === 0) {
                    // No rows were affected by the update (college_code not found)
                    res.status(404).json({ status: 404, message: "College with the provided college_code does not exist!" });
                } else {
                    // Update successful
                    res.status(200).json({ status: 200, message: "College updated successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}


exports.removeCollege = async (req, res) => {
    try {
        let college_code = req.query.college_code;
        var removeQuery = `UPDATE college SET is_delete = ? , updated_at = NOW() WHERE college_code = ?`;
        var updatedData = [1, college_code];

        db.query(removeQuery, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while deleting college!" });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ status: 404, message: "College with the provided college_code does not exist!" });
                } else {
                    res.status(200).json({ status: 200, message: "College deleted successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}
