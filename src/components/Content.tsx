import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LinkCard from './LinkCard';
import bannerLeft from '../assets/imgs/banner_left.png';
import bannerRight from '../assets/imgs/banner_right.png';
import links from '../config/links';
import './Content.css';

const Content: React.FC = () => {
  const renderContent = () => (
    <div className="content-sections">
      <section className="content-section">
        <h2 className="section-title">办公管理类</h2>
        <div className="links-grid">
          {links.office.map((item, index) => (
            <LinkCard key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h2 className="section-title">研究分析类</h2>
        <div className="links-grid">
          {links.research.map((item, index) => (
            <LinkCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );

  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: '全部',
      children: renderContent(),
    },
    {
      key: 'office',
      label: '办公管理',
      children: <div className="links-grid">
        {links.office.map((item, index) => (
          <LinkCard key={index} {...item} />
        ))}
      </div>,
    },
    {
      key: 'research',
      label: '研究分析类',
      children: <div className="links-grid">
        {links.research.map((item, index) => (
          <LinkCard key={index} {...item} />
        ))}
      </div>,
    },
  ];

  return (
    <div className="main-content">
      <div className="banners-section">
        <div className="banner-left">
          <img src={bannerLeft} alt="Left Banner" />
        </div>
        <div className="banner-right">
          <img src={bannerRight} alt="Right Banner" />
        </div>
      </div>
      <div className="tabs-section">
        <Tabs 
          defaultActiveKey="all" 
          items={items}
          className="custom-tabs"
        />
      </div>
    </div>
  );
};

export default Content;
