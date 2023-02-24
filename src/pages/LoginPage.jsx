import React from "react";
import "../css/loginPage.css";

function LoginPage () {
  return (
   <main>
    <form class="form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" name="user" />
      <input type="password" placeholder="Password" name="password" />
      <button className="btn btn-primary btn-login" >Sign in</button>
    </form>
   </main>
  )
}

export default LoginPage;
