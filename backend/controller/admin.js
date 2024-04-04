const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
       
        var uname = req.body.username;
        var pass = req.body.password; // 123456
        // console.log("sgaudgasdu"+uname);
        // res.json({message:"gagan"});
        
        const query = `SELECT * FROM admin`;
        db.query(query, [email], async (err, results) => {

            const user = results[0];
            const hashedPassword = user.password; //  $2b$10$5YBwK6mhSTIhT8oWw1NMDelIPlODEHqrPHAemq2hcUjOGIrwMWUkq

    
        //    console.log(results[0].email);
           if(uname==results[0].email){
            // console.log(results);
            // res.json({message:"true"});
            bcrypt.compare(pass, hashedPassword, function(err, result) {
                if (err) {
                    // Handle error
                    console.error(err);
                    return;
                }
                
                if (result) {
                    res.json({message:"success"});
                    console.log('Password matches!');
                } else {
                    res.json({message:"failure"});
                    console.log('Password does not match!');
                }
            });
           }else{
            res.json({message:"Invalid Credentials"});
           }
            
            if (err) {
                return res.status(500).json({ status: 500, message: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(404).json({ status: 404, message: "User not found" });
            }

            
            console.log("Hashed Password from Database:", hashedPassword);
            console.log("Password Input:", password);

            const passwordMatch = await bcrypt.compare(password, hashedPassword);
          
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