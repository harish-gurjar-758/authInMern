import React, { useState } from 'react';
import style from './styles.module.css';
import { LogInUser } from '../apis/apis';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await LogInUser(data);
            console.log('✅ SignIn successful:', response);
            navigate('/');
        } catch (error) {
            if (error.response?.status >= 400 && error.response?.status <= 500) {
                setError(error.response.data.message);
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className={style.login_constainer}>
            <div className={style.login_form_container}>
                <div className={style.left}>
                    <form className={style.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className={style.input}
                            onChange={handleChange}
                            value={data.email}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className={style.input}
                            onChange={handleChange}
                            value={data.password}
                        />
                        {error && <div className={style.error_msg}>{error}</div>}
                        <button type="submit" className={style.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={style.right}>
                    <h1>New Here?</h1>
                    <Link to="/signup">
                        <button type="button" className={style.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
