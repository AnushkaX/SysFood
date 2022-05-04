import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
    return (
        <>
        <Header />
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <form className="Login col-md-8 col-lg-4 col-11">
                <input type="name" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit">Register</button>
                <p>
                    <Link to={"/register"}>Already have an Account?</Link>
                </p>
            </form>
        </div>
        </>
    );
};

export default Register;
