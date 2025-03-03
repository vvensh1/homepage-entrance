import React from 'react';
import './LinkCard.css';

interface LinkCardProps {
  icon: string;
  text: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ icon, text, link }) => {
  return (
    <a href={link} className="link-card">
      <img src={icon} alt={text} className="link-icon" />
      <span className="link-text">{text}</span>
    </a>
  );
};

export default LinkCard;
