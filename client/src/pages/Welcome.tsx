import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <>
            <div>환영합니다</div>
            <Link to="/auth">로그인</Link>
            <Link to="/auth">회원가입</Link>
        </>
    );
}

export default Welcome;
