import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import screenVideo from "../assets/LOOKONVIDEO.mp4";
import logo from "../assets/ERASELOGO.png";
import jwt_decode from "jwt-decode";

import { client } from '../client'

const Login = () => {
	const navigate = useNavigate();
const responseGoogle = (res) => {
	localStorage.setItem('user', JSON.stringify(jwt_decode(res.credential)))

	const { name, picture, sub } = jwt_decode(res.credential);

	const user = {
		_id: sub,
		_type: 'user',
		userName: name,
		image: picture,
	  }

	client.createIfNotExists(user) 
	.then(() => {
		navigate('/', { replace: true })
	})
	console.log(jwt_decode(res.credential))
}

  return (
    <>
	 {/* {!user ? ( */}
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={screenVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="p-5">
              <img src={logo} width="170px" alt="logo" />
            </div>

				<div className="shadow-2xl">
				<GoogleLogin
              clientId={`${process.env.REACT_PUBLIC_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
				  onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
				</div>
          </div>
        </div>
      </div> 
      {/* <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Error")}
          />
        )}
      </div> */}
    </>
  );
};

export default Login;
