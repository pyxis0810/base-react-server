module.exports = {
    JWT_SECRET: 'coldbrew',
    google: {
        clientID: '42002928845-ipb9u77map6ic6fhah2op82uedcea9oc.apps.googleusercontent.com',
        clientSecret: 'AYVYqv-soBTbXaWGYGV4j6wc',
        callbackURL: 'http://localhost:3000/apis/auth/google/callback',
        apiKey: 'AIzaSyA36GvkNhvB5mI7QqIhZxpONKHzOi7AIZY'
    },
    facebook: {
        clientID: '1625413921096922',
        clientSecret: 'd31ad613f3c7642498dc214e3680d194',
        callbackURL: 'http://localhost:3000/apis/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email']
    },
    mail: {
        apiKey: 'key-6ebf664993265f9012991b0d613e5ff9',
        domain: 'sandbox0a6d8080defe41d7a922b74304fe2366.mailgun.org',
        contact: 'rocketkitchen.kr@gmail.com',
        reservation: 'rocketkitchen.kr@gmail.com'
    }
};
