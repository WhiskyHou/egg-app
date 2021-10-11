export default app => {
  app.beforeStart(async () => {
    console.log('### beforeStart');
    await Promise.resolve('egg + ts');
  });
};
