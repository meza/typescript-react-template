import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {
  // if ( 'production' !== process.env.NODE_ENV ) {
  //   return;
  // }
  // Check if the serviceWorker Object exists in the navigator object ( means if browser supports SW )
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('service-worker.js');

    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        /**
         * @todo Create a UI Element for the page update
         * @body Check out how [here](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users)
         */
        console.log('updated');
      }
    });
    wb.register();
  }
}
