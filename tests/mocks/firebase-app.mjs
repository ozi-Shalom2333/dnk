let apps = [];
export const getApps = () => apps;
export const getApp = () => apps[0];
export const initializeApp = config => {
  const app = {
    config
  };
  apps.push(app);
  return app;
};
