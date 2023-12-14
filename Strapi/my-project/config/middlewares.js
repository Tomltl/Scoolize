module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '320mb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
