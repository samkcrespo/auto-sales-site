import React from 'react'

function Login({setUser}) {
  const [formStatus, setFormStatus] = React.useState('Send Message')

  // const onAdminSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { username, password } = e.target.elements
  //   let conFom = {
  //     username: username.value,
  //     password: password.value
  //   }
  //   console.log(conFom)
  // }

  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
   
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState([]);
    // let history = useHistory();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
            // history.push("/");
          });
        } else {
          res.text().then((text) => {
            const error = text.length ? JSON.parse(text).errors : ['Unexpected error'];
            setError(error);
          });
        }
      });
    }
    
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="admin-login-form" id="adminLogin" style={{width: "300px", backgroundColor: "rgba(40, 40, 40, 0.7)", padding: "15px", borderRadius: "10px"}}>
        <form onSubmit={handleSubmit}>
          <h2 style={{color: "rgba(150, 150, 150, 1)", textAlign: "center"}}>Admin Login</h2>
          <div className="mb-3">
            <input className="form-control" style={{backgroundColor: "rgba(60, 60, 60, 0.7)", borderColor: "rgba(60, 60, 60, 0.7)", color: "rgba(150, 150, 150, 1)"}} type="text" id="adminUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                autoFocus required />
          </div>
          <div className="mb-3">
            <input className="form-control" style={{backgroundColor: "rgba(60, 60, 60, 0.7)", borderColor: "rgba(60, 60, 60, 0.7)", color: "rgba(150, 150, 150, 1)"}} type="password" id="adminPassword" placeholder="Password" autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-danger" type="submit" style={{width: "100%"}}>
            Log In
          </button>
          {error.length > 0 ? <div>{error.join(', ')}</div> : null}
        </form>
      </div>
    </div>
  )
}

export default Login
