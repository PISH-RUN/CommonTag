module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d397f40ebe7e48cc6d5ef594af72612'),
  },
});
