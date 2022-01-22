module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  url: env('PUBLIC_URL', 'https://tags.pish.run'),
  port: env.int('PORT', 1337),
});
