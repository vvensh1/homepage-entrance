import React from 'react';
import './LinkCard.css';
import { LinkConfig } from '../config/links';

const LinkCard: React.FC<LinkConfig> = ({ icon, text, link }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={link} 
      className="link-card" 
      onClick={handleClick}
    >
      <img src={icon} alt={text} className="link-icon" />
      <span className="link-text">{text}</span>
    </a>
  );
};

export default LinkCard;
