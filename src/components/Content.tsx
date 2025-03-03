import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import bannerLeft from '../assets/imgs/banner_left.png';
import bannerRight from '../assets/imgs/banner_right.png';
import './Content.css';

const Content: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: '全部',
      children: 'Tab 全部内容',
    },
    {
      key: 'office',
      label: '办公管理',
      children: 'Tab 办公管理内容',
    },
    {
      key: 'research',
      label: '研究分析类',
      children: 'Tab 研究分析类内容',
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
