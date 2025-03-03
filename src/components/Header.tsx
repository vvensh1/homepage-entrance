import React from 'react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import logo from '../assets/icons/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const currentDate = format(new Date(), 'yyyy年MM月dd日 EEEE', { locale: zhCN });
  const userInfo = {
    name: '张三',
    avatarUrl: 'https://via.placeholder.com/40'  // 临时头像，之后可替换为实际头像
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="研究院Logo" className="company-logo" />
        <h1 className="company-name">研究院信息化管理系统</h1>
      </div>
      <div className="header-right">
        <span className="date">{currentDate}</span>
        <div className="user-info">
          <span className="username">{userInfo.name}</span>
          <img src={userInfo.avatarUrl} alt="用户头像" className="user-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
