import { useState } from "react";
import firebase from "../firebase/firebaseconfig/firbase_config";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom"; 
import {message} from 'antd'

const Loginsignup = ({isLogin, setIsLogin}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate(); 


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(formData.email);
      message.success('Password reset email sent successfully')
      setIsForgotPassword(false);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      message.error(error.message);
    } finally{
      setIsForgotPassword(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(formData.email, formData.password);

        const user = userCredential.user;

        if (user.emailVerified) {
          setIsLogin(true);
          message.success("Email has been verified With successful login..!")
          navigate("/reservation" ); 
        } else {
          message.warning("Please verify your email before logging in.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        message.error("Invalid email or password.");
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        message.warning("Passwords do not match!");
        return;
      }

      try {

        const methods = await firebase.auth().fetchSignInMethodsForEmail(formData.email);

        if (methods.length > 0) {
          message.warning("User details already exist. Please login.");
          navigate("/login"); 
          return;
        }
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(formData.email, formData.password);

        const user = userCredential.user;

        await user.sendEmailVerification();
        message.success(
          "Signup successful! A verification email has been sent to your email address. Please verify before logging in."
        );
        setFormData({ email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Error at signing up:", error);
       
        message.warning("Account already exists..!");
        setIsLogin(true);
        console.log(error.message)
      }
    }
  };

  return (
    <div>
     
       <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gray-100 ">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          {isForgotPassword
            ? "Forgot Password"
            : isLogin
            ? "Login"
            : "Signup"}
        </h2>
        {isForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
           
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600"
            >
              Send Password Reset Email
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-400 text-white rounded-md shadow hover:bg-orange-500"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        )}
        <p className="text-sm text-center mt-4 text-gray-600">
          {isForgotPassword ? (
            <button
              onClick={() => setIsForgotPassword(false)}
              className="text-orange-500 hover:underline font-medium"
            >
              Back to Login
            </button>
          ) : isLogin ? (
            <span>
              Don&apos;t have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-orange-500 hover:underline font-medium"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-orange-500 hover:underline font-medium"
              >
                Log in
              </button>
            </span>
          )}
        </p>
        {!isForgotPassword && (
          <p className="text-sm text-center mt-2 text-gray-600">
            Forgot your password?{" "}
            <button
              onClick={() => setIsForgotPassword(true)}
              className="text-orange-500 hover:underline font-medium"
            >
              Reset Password
            </button>
          </p>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>

    </div>
   
  );
};

export default Loginsignup;
