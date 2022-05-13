module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8bc7aebd6bf323fd66a5daa35fb89425'),
  },
});
