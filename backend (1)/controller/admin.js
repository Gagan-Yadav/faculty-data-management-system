const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = `SELECT * FROM admin WHERE email = ?`;
        db.query(query, [email], async (err, results) => {
            if (err) {
                return res.status(500).json({ status: 500, message: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(404).json({ status: 404, message: "User not found" });
            }

            const user = results[0];
            const hashedPassword = user.password;

            console.log("Hashed Password from Database:", hashedPassword);
            console.log("Password Input:", password);

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


exports.updateAdmin = async (req, res) => {
    try {
        let { name, phone, address,email } = req.body;
        var updateData = `UPDATE admin SET name = ?, phone = ?,address= ?, updated_at = NOW() WHERE email = ?`;
        var updatedData = [name, phone, address,email];

        db.query(updateData, updatedData, (err, result) => {
            if (err) {
                res.status(400).json({ status: 400, message: "Something went wrong while updating admin details!" });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ status: 404, message: "admin with the provided email does not exist!" });
                } else {
                    res.status(200).json({ status: 200, message: "admin details updated successfully." });
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal server error", subMessage: err.message });
    }
}