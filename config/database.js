// DEVELOPMENT CONFIG


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'cl-unifai.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'oh_contentlib'),
      user: env('DATABASE_USERNAME', 'Oh_supplier@cl-unifai'),
      password: env('DATABASE_PASSWORD', 'Putworld1st!'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});


//PRODUCTION CONFIG

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST'),
//       port: env.int('DATABASE_PORT'),
//       database: env('DATABASE_NAME'),
//       user: env('DATABASE_USERNAME'),
//       password: env('DATABASE_PASSWORD'),
//       ssl: env.bool('DATABASE_SSL'),
//     },
//   options: {},
//   },
// });
