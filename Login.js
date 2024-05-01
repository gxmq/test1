import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === 'Hs778899') {
      history.push('/data-maintenance');
    } else {
      alert('密码错误');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="请输入密码" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">登录</button>
    </form>
  );
}

export default LoginPage;
