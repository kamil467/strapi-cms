import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: 'youtube',
    plugin: 'youtube-preview-plugin',
    type: 'string', // Data type stored in the database is a string
  });
};

export default register;
