export const URLs = {
  // 办公管理类
  OA_SYSTEM: 'http://192.168.6.42',
  KMS_SYSTEM: 'https://kms.example.com',
  ARCHIVES_SYSTEM: 'https://archives.example.com',

  // 研究分析类
  ANALYSIS_PLATFORM: 'https://analysis.example.com',
  ONLINE_WELL: 'http://192.168.6.17',
  WELL_4D: 'https://4d.example.com',
  FIBER_PLATFORM: 'https://fiber.example.com',
  IOT_PLATFORM: 'http://183.36.38.170:8280/',
  ACID_PLATFORM: 'https://acid.example.com',
  PUMP_PLATFORM: 'https://pump.example.com',
} as const;

export type URLKeys = keyof typeof URLs;
