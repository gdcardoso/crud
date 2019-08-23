const seeder = require('mongoose-seed');

const data = [
  {
    model: 'Developer',
    documents: [
      {
        email: 'gdcardoso5@gmail.com',
        name: 'Gabriel Dias Cardoso',
        skype: 'gdcardoso',
        phone: '+5562982089667',
        linkedin: 'linkedin.com',
        city: 'Goiânia',
        state: 'Goiás',
        portfolio: 'Github',
        willingness_to_work: ['four', 'six'],
        best_time_to_work: ['morning', 'afternoon'],
        salary_requirements: '4000',
        ionic: 1,
        reactjs: 1,
        react_native: 1,
        android: 1,
        ios: 1,
        html: 1,
        css: 1,
        bootstrap: 1,
        jquery: 1,
        angularjs1: 1,
        angular: 1,
        java: 1,
        asp_mvc: 1,
        asp_webform: 1,
        c: 1,
        c_sharp: 1,
        nodejs: 1,
        cake: 1,
        django: 1,
        magento: 1,
        php: 1,
        vue: 1,
        wordpress: 1,
        python: 1,
        ruby: 1,
        my_sql_server: 1,
        salesforce: 1,
        photoshop: 1,
        illustrator: 1,
        seo: 1,
        laravel: 1,
        other: 'linux 3',
        crud: 'http://crud.com',
      },
    ],
  },
];

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/easy', () => {
  // Load Mongoose models
  seeder.loadModels(['./src/app/schemas/Developer.js']);

  // Clear specified collections
  seeder.clearModels(['Developer'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
