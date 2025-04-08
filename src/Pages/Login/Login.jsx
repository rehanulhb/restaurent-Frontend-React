import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sylhet Restaurent | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="input mt-2"
                  placeholder="Email"
                />
                <br />
                <label className="fieldset-label mt-2">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <br />
                <br />
                <LoadCanvasTemplate></LoadCanvasTemplate>
                <br />
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  className="input mb-2"
                  placeholder="Type the Above Captcha"
                />
                <br />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
                <div className="mb-2">
                  <a className="link link-hover mb-4">Forgot password?</a>
                </div>
                <br />

                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </fieldset>
            </form>

            <p>
              <small>
                New Here? <Link to="/signup"> Create an account</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
