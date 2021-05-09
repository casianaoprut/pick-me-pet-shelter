import firebase from "firebase";

const firebaseConfig ={
  apiKey: 'AIzaSyC3Ut94-0GDsqgYzOGQ6l7eP3R962mMoQs',
    authDomain: 'pick-me--pet-shelter.firebaseapp.com',
    projectId: 'pick-me--pet-shelter',
    storageBucket: 'pick-me--pet-shelter.appspot.com',
    messagingSenderId: '789648281511',
    appId: '1:789648281511:web:ca6b37a72428b78fe87082',
    measurementId: 'G-V2BJ423MBW'
};

firebase.initializeApp(firebaseConfig);





Cypress.Commands.add('findPet', (name) => {
  cy.get('button').contains('Open Filters').click();
  cy.get('input').eq(0).clear().type(name);
  cy.get('button.p-sidebar-close').click();
});

Cypress.Commands.add('login', (email, password) => {
  return firebase.default.auth().signInWithEmailAndPassword(email,password).then(() => {
    console.log('It worked!');
  });
});

Cypress.Commands.add('logout', () => {
  return firebase.auth().signOut();
})
