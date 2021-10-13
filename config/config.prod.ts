import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  // config.mongoose = {
  //   client: {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     url: 'mongodb://localhost:27017/test', options: {},
  //   },
  // };
  return config;
};
