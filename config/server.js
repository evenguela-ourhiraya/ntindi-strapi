module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://20.211.37.87:1337'),
  proxy: env.bool('PROXY', false)
});
