import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LinkCard from './LinkCard';
import bannerLeft from '../assets/imgs/banner_left.png';
import bannerRight from '../assets/imgs/banner_right.png';

// Import icons
import oaLogo from '../assets/icons/oa_logo.png';
import kmsLogo from '../assets/icons/kms_logo.png';
import archivesLogo from '../assets/icons/archives_logo.png';
import analysisLogo from '../assets/icons/analysis_logo.png';
import wellLogo from '../assets/icons/well_logo.png';
import well4dLogo from '../assets/icons/4d_logo.png';
import fiberLogo from '../assets/icons/fiber_logo.png';
import iotLogo from '../assets/icons/iot_logo.png';
import acidLogo from '../assets/icons/acid_logo.png';
import pumpLogo from '../assets/icons/pump_logo.png';
import './Content.css';

const Content: React.FC = () => {
  const officeLinks = [
    { icon: oaLogo, text: 'OA办公系统', link: '/office1' },
    { icon: kmsLogo, text: '科研管理系统', link: '/office2' },
    { icon: archivesLogo, text: '档案管理系统', link: '/office3' },
  ];

  const researchLinks = [
    { icon: analysisLogo, text: '油藏单井一体化分析平台', link: '/research1' },
    { icon: wellLogo, text: '在线测井', link: '/research2' },
    { icon: well4dLogo, text: '4d井筒', link: '/research3' },
    { icon: fiberLogo, text: '光纤测井智能解释平台', link: '/research4' },
    { icon: iotLogo, text: '物联网', link: '/research5' },
    { icon: acidLogo, text: '酸化智能优化平台', link: '/research6' },
    { icon: pumpLogo, text: '电泵预警优化平台', link: '/research7' },
  ];

  const renderContent = () => (
    <div className="content-sections">
      <section className="content-section">
        <h2 className="section-title">办公管理</h2>
        <div className="links-grid">
          {officeLinks.map((item, index) => (
            <LinkCard key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h2 className="section-title">研究分析类</h2>
        <div className="links-grid">
          {researchLinks.map((item, index) => (
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
        {officeLinks.map((item, index) => (
          <LinkCard key={index} {...item} />
        ))}
      </div>,
    },
    {
      key: 'research',
      label: '研究分析类',
      children: <div className="links-grid">
        {researchLinks.map((item, index) => (
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
