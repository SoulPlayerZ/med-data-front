import React from "react";

function LoginPage () {
  return (
   <main>
    <form>
      <h2>Login</h2>
      <input type="text" placeholder="Username" name="user" />
      <input type="password" placeholder="Password" name="password" />
      <button className="btn btn-primary btn-login" >Sign in</button>
    </form>
   </main>
  )
}

export default LoginPage;
