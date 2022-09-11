import React, {useRef} from 'react';
import axios from 'axios';
const Logout = ()=>{
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        axios({
            method:'GET',
            url:`/user`
        }).then(response => {
            if(response.data.password === password) {
                console.log('登录成功')
            }
        })
    }

    return (
        <div>
            <h1>登录界面</h1>
            <form>
                <input ref={usernameRef} type='text' placeholder='username'/><br/>
                <input ref={passwordRef} type='password' placeholder='password'/><br/>
                <button onClick={handleSubmit} type='submit'>登录</button>
            </form>
        </div>
    );
}

export default Logout;