const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');
exports.addSubAdmin = async (req, res) => {
    try {
        let { username, fullname,address,phone,password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        var insertData = "INSERT INTO sub_admin(username, fullname,address,phone,password,created_at,updated_at)VALUES(?,?,?,?,?,now(),now())";
        db.query(insertData, [username, fullname,address,phone,hash], (err, result) => {
            if (err) {
                res.send({ status: 400, message: "Something went wrong might we a chance use are using duplicate phone/userName!" });

            } else {
                res.send({ status: 200, message: "Sub admin added successfully." });
            }
        })
    }
    catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        const query = `SELECT * FROM sub_admin WHERE username = ? AND is_delete = 0`;
        db.query(query, [username], async (err, results) => {
            if (err) {
                return res.status(500).json({ status: 500, message: "Internal server error" });
            }
            
            if (results.length === 0) {
                return res.status(404).json({ status: 404, message: "User not found" });
            }

            const user = results[0];
            const hashedPassword = user.password;
            const passwordMatch = await bcrypt.compare(password, hashedPassword);
            if (!passwordMatch) {
                return res.status(400).json({ status: 400, message: "Incorrect password" });
            }

            res.status(200).json({ status: 200, message: "Login successful", data: user });
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
  };
  
exports.getSubAdminDetails = async (req, res) => {
    try {
        const username = req.query.username;
        var query = `select * from sub_admin where ${username} and  is_delete = 0`;
    
        db.query(query, (err, result) => {
            if (result.length == 0) {
                console.log(result);
                res.send({ status: 404, message: `username Not found.May be the   ${username} is not in Database or deleted!` });
                
            } else {
                res.send({ status: 200, message: 'Sub admin details.', data: result });
            }
        })
    } catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.allSubAdmins = async (req, res) => {
    try {
        var query = `select * from sub_admin where  is_delete = 0`;
        db.query(query, (err, result) => {
            if (result.length == 0) {
                res.send({ status: 400, message: `something went wrong to fetch sub_admin list!` });
            } else {
                res.send({ status: 200, message: `sub admin list.`, data: result });
            }
        })
    } catch (err) {
        res.send({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.updateSubAdmin = async (req, res) => {
    try {
        let { fullname, address, username } = req.body;
        var updateData = `UPDATE sub_admin SET fullname = ?, address = ?, updated_at = NOW() WHERE username = ?`;
        var updatedData = [fullname, address, username];

        db.query(updateData, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while updating sub_admin details!" });
            } else {
                if (result.affectedRows === 0) {
                    // No rows were affected by the update (username not found)
                    res.status(404).json({ status: 404, message: "Sub admin with the provided username does not exist!" });
                } else {
                    // Update successful
                    res.status(200).json({ status: 200, message: "Sub admin details updated successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}

exports.removeSubAdmin = async (req, res) => {
    try {
        let username = req.query.username;
        var removeQuery = `UPDATE sub_admin SET is_delete = ? , updated_at = NOW() WHERE username = ?`;
        var updatedData = [1, username];

        db.query(removeQuery, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while deleting sub admin!" });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ status: 404, message: "Sub admin with the provided username does not exist!" });
                } else {
                    res.status(200).json({ status: 200, message: "Sub admin deleted successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}
