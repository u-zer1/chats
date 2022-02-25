export type BuildType = 'production' | 'development' | 'stage';

export interface Config {
  BUILD_TYPE: string;
  API_BASE_URL: string;
  isProduction: () => boolean;
}

export interface SetConfig {
  production?: Config;
  development?: Config;
  stage?: Config;
}

export enum BUILD_TYPE {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  STAGE = 'stage',
}
