import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1633701619492_3945';

  // add your egg config in here
  config.middleware = [];

  // config.security = { domainWhiteList: [ 'http://10.240.5.48:8080' ] };
  // config.cors = { origin: '*', allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' };

  config.cluster = {
    listen: {
      path: '',
      port: 3000,
      hostname: '127.0.0.1',
    },
  };

  // config.mongoose = {
  //   client: {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     url: 'mongodb://localhost:27017/test', options: {},
  //   },
  // };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
