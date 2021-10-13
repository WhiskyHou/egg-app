import * as mongoose from 'mongoose';

export default app => {
  app.beforeStart(async () => {
    console.log('### beforeStart');
    await mongoose.connect('mongodb://localhost:27017/test');
    await Promise.resolve('egg + ts');
  });
};
