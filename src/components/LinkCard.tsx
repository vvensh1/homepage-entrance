import React from 'react';
import './LinkCard.css';
import { LinkConfig } from '../config/links';
import { URLs } from '../config/urls';

const LinkCard: React.FC<LinkConfig> = ({ icon, text, urlKey }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(URLs[urlKey], '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={URLs[urlKey]} 
      className="link-card" 
      onClick={handleClick}
    >
      <img src={icon} alt={text} className="link-icon" />
      <span className="link-text">{text}</span>
    </a>
  );
};

export default LinkCard;
