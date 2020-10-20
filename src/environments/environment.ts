// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyC2_R7cUueWcVlvIwjK0VwfB1_CHWNe0L0',
    authDomain: 'aarondev-platzi-store.firebaseapp.com',
    databaseURL: 'https://aarondev-platzi-store.firebaseio.com',
    projectId: 'aarondev-platzi-store',
    storageBucket: 'aarondev-platzi-store.appspot.com',
    messagingSenderId: '658589958842',
    appId: '1:658589958842:web:95e288b45c0ef2cf90b883',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
