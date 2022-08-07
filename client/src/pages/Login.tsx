import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div>로그인 페이지</div>
            <Link to="/todos">Todos Page</Link>
        </>
    );
}

export default Login;
