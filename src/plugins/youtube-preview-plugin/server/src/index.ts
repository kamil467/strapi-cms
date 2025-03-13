/**
 * Application methods
 */
import bootstrap from './bootstrap';
import destroy from './destroy';
import register from './register';

/**
 * Plugin server methods
 */
import config from './config';
import contentTypes from './content-types';
import controllers from './controllers';
import middlewares from './middlewares';
import policies from './policies';
import routes from './routes';
import services from './services';

import type { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../admin/src/pluginId';

export default ({ strapi }: { strapi: Core.Strapi }) => ({

  register() {
    strapi.customFields.register({
      name: 'youtube',
      plugin: PLUGIN_ID,
      type: 'string',
    });
  },
  

  bootstrap() {},
  destroy() {},
});
