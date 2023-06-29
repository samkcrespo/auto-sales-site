import React from 'react'

function Login() {
  const [formStatus, setFormStatus] = React.useState('Send Message')

  const onAdminSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { username, password } = e.target.elements
    let conFom = {
      username: username.value,
      password: password.value
    }
    console.log(conFom)
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="admin-login-form" id="adminLogin" style={{width: "300px", backgroundColor: "rgba(40, 40, 40, 0.7)", padding: "15px", borderRadius: "10px"}}>
        <form onSubmit={onAdminSubmit}>
          <h2 style={{color: "rgba(150, 150, 150, 1)", textAlign: "center"}}>Admin Login</h2>
          <div className="mb-3">
            <input className="form-control" style={{backgroundColor: "rgba(60, 60, 60, 0.7)", borderColor: "rgba(60, 60, 60, 0.7)", color: "rgba(150, 150, 150, 1)"}} type="text" id="adminUsername" placeholder="Username" required />
          </div>
          <div className="mb-3">
            <input className="form-control" style={{backgroundColor: "rgba(60, 60, 60, 0.7)", borderColor: "rgba(60, 60, 60, 0.7)", color: "rgba(150, 150, 150, 1)"}} type="password" id="adminPassword" placeholder="Password" required />
          </div>
          <button className="btn btn-danger" type="submit" style={{width: "100%"}}>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
