
import './pageStyle/register.css';

export default function Register() {
  return (
    <div className="home-container">
      <div className="left-side">
        <h2>Register Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="right-side">
        {/* Blank color palette */}
      </div>
    </div>
  );
}