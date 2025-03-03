import { URLs, URLKeys } from './urls';

export interface LinkConfig {
  icon: string;
  text: string;
  urlKey: URLKeys;
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
      urlKey: 'OA_SYSTEM'
    },
    {
      icon: require('../assets/icons/kms_logo.png'),
      text: '科研管理系统',
      urlKey: 'KMS_SYSTEM'
    },
    {
      icon: require('../assets/icons/archives_logo.png'),
      text: '档案管理系统',
      urlKey: 'ARCHIVES_SYSTEM'
    }
  ],
  research: [
    {
      icon: require('../assets/icons/analysis_logo.png'),
      text: '油藏单井一体化分析平台',
      urlKey: 'ANALYSIS_PLATFORM'
    },
    {
      icon: require('../assets/icons/well_logo.png'),
      text: '在线测井',
      urlKey: 'ONLINE_WELL'
    },
    {
      icon: require('../assets/icons/4d_logo.png'),
      text: '4d井筒',
      urlKey: 'WELL_4D'
    },
    {
      icon: require('../assets/icons/fiber_logo.png'),
      text: '光纤测井智能解释平台',
      urlKey: 'FIBER_PLATFORM'
    },
    {
      icon: require('../assets/icons/iot_logo.png'),
      text: '物联网',
      urlKey: 'IOT_PLATFORM'
    },
    {
      icon: require('../assets/icons/acid_logo.png'),
      text: '酸化智能优化平台',
      urlKey: 'ACID_PLATFORM'
    },
    {
      icon: require('../assets/icons/pump_logo.png'),
      text: '电泵预警优化平台',
      urlKey: 'PUMP_PLATFORM'
    }
  ]
};

export default links;
