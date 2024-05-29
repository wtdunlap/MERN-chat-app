import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-pink-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-75">
                <h1 className="text-3xl font-semibold text-center text-gray-400">
                    login
                    <span className="text-pink-300"> MERN chat app</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="enter username"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">
                                password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <a href="#" className="text-sm hover:underline hover:text-pink-900">{"don't"} have an account?</a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
