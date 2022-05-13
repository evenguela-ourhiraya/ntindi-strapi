module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      cwd: '/home/Oh_supplier/contentlib',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        DATABASE_HOST: 'cl-unifai.mysql.database.azure.com',
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'oh_contentlib',
        DATABASE_USERNAME: 'Oh_supplier@cl-unifai',
        DATABASE_PASSWORD: 'Putworld1st!',
        DATABASE_SSL: 'true',
      },
    },
  ],
};
