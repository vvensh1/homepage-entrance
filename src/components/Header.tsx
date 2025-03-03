import React from 'react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import logo from '../assets/icons/logo.png';
import userAvatar from '../assets/icons/avatar.svg';
import './Header.css';

const Header: React.FC = () => {
  const currentDate = format(new Date(), 'yyyy年MM月dd日 EEEE', { locale: zhCN });
  
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="研究院Logo" className="company-logo" />
        </div>
        <h1 className="company-name">研究院信息化管理系统</h1>
      </div>
      <div className="header-right">
        <div className="date-container">
          <span className="date">{currentDate}</span>
        </div>
        <div className="user-info">
        <div className="avatar-container">
            <img src={userAvatar} alt="用户头像" className="user-avatar" />
          </div>
          <div className="username">管理员</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
