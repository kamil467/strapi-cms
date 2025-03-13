import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import CustomField from './components/CustomField';

export default {
  register(app: any) {
    // register as custom field
    app.customFields.register({
      name: 'youtube',
      pluginId: PLUGIN_ID,
      type: 'string',
      icon: PluginIcon,
      intlLabel: {
        id: PLUGIN_ID,
        defaultMessage: 'YouTube Video',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.youtube.description`,
        defaultMessage: 'Enter a YouTube video URL to display its thumbnail',
      },
      components: {
        Input: CustomField,
      },
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      isReady: true,
      name: 'youtube',
    });
  },

  bootstrap(app: any) {},

  async registerTrads({ locales }: { locales: string[] }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: data,
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
  
};
