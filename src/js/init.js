/* eslint-disable */
import i18n from 'i18next';

export default () => {
    const defaultLng = 'ru';

    //...

    const i18nInstance = i18n.createInstance();

    i18nInstance.init({
      lng: defaultLng,
      debug: true,
      resources,
    }).then(() => runApp(i18nInstance));
};