import "../Styling/Admin.css"

function Admin(){
    return <>
     <div className="admin-login">
     <div className="admin-main-container">
                    <h1 className="admin-header">Admin Login</h1>
                    <hr/>
                    <p>Sign in to start your session</p>
                    <input type="text" name="" id="" placeholder="Username" className="username" required/>
                    <input type="password" name="" id=""  placeholder="Password" className="username" required/>
                    <div className="singin-button-container">
                        <button className="singin-button">Sing In</button>
                    </div>
            </div>
     </div>
    </>
}
export default Admin