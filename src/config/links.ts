export interface LinkConfig {
  icon: string;
  text: string;
  link: string;
}

interface LinksConfig {
  office: LinkConfig[];
  research: LinkConfig[];
}

const links: LinksConfig = {
  office: [
    { 
      icon: require('../assets/icons/oa_logo.png'),
      text: 'OA办公系统',
      link: 'https://oa.example.com'
    },
    {
      icon: require('../assets/icons/kms_logo.png'),
      text: '科研管理系统',
      link: 'https://kms.example.com'
    },
    {
      icon: require('../assets/icons/archives_logo.png'),
      text: '档案管理系统',
      link: 'https://archives.example.com'
    }
  ],
  research: [
    {
      icon: require('../assets/icons/analysis_logo.png'),
      text: '油藏单井一体化分析平台',
      link: 'https://analysis.example.com'
    },
    {
      icon: require('../assets/icons/well_logo.png'),
      text: '在线测井',
      link: 'https://well.example.com'
    },
    {
      icon: require('../assets/icons/4d_logo.png'),
      text: '4d井筒',
      link: 'https://4d.example.com'
    },
    {
      icon: require('../assets/icons/fiber_logo.png'),
      text: '光纤测井智能解释平台',
      link: 'https://fiber.example.com'
    },
    {
      icon: require('../assets/icons/iot_logo.png'),
      text: '物联网',
      link: 'https://iot.example.com'
    },
    {
      icon: require('../assets/icons/acid_logo.png'),
      text: '酸化智能优化平台',
      link: 'https://acid.example.com'
    },
    {
      icon: require('../assets/icons/pump_logo.png'),
      text: '电泵预警优化平台',
      link: 'https://pump.example.com'
    }
  ]
};

export default links;
