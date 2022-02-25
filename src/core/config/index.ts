import { BUILD_TYPE, BuildType, Config, SetConfig } from './configTypes';

const defaultConfig: Config = {
  BUILD_TYPE: BUILD_TYPE.PRODUCTION,
  API_BASE_URL: 'prod/api',
  isProduction: () => process.env.REACT_APP_BUILD_TYPE === BUILD_TYPE.PRODUCTION,
};

const buildTypeConfigs: SetConfig = {
  development: {
    ...defaultConfig,
    BUILD_TYPE: BUILD_TYPE.DEVELOPMENT,
    API_BASE_URL: 'dev/api',
  },
  stage: {
    ...defaultConfig,
    BUILD_TYPE: BUILD_TYPE.STAGE,
    API_BASE_URL: 'stage/api',
  },
};

const buildType: BuildType = process.env.REACT_APP_BUILD_TYPE as BuildType;
const config: Config = { ...defaultConfig, ...buildTypeConfigs[buildType] };
export default config;
