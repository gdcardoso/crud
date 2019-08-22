import mongoose from 'mongoose';

const DeveloperSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    skype: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: false,
    },
    willingness_to_work: {
      type: Array,
      required: false,
    },
    best_time_to_work: {
      type: Array,
      required: false,
    },
    salary_requirements: {
      type: Number,
      required: true,
    },
    ionic: {
      type: Number,
      required: true,
    },
    reactjs: {
      type: Number,
      required: true,
    },
    react_native: {
      type: Number,
      required: true,
    },
    android: {
      type: Number,
      required: true,
    },
    ios: {
      type: Number,
      required: true,
    },
    html: {
      type: Number,
      required: true,
    },
    css: {
      type: Number,
      required: true,
    },
    bootstrap: {
      type: Number,
      required: true,
    },
    jquery: {
      type: Number,
      required: true,
    },
    angularjs1: {
      type: Number,
      required: true,
    },
    angular: {
      type: Number,
      required: true,
    },
    java: {
      type: Number,
      required: true,
    },
    asp_mvc: {
      type: Number,
      required: true,
    },
    asp_webform: {
      type: Number,
      required: true,
    },
    c: {
      type: Number,
      required: true,
    },
    c_sharp: {
      type: Number,
      required: true,
    },
    nodejs: {
      type: Number,
      required: true,
    },
    cake: {
      type: Number,
      required: true,
    },
    django: {
      type: Number,
      required: true,
    },
    magento: {
      type: Number,
      required: true,
    },
    php: {
      type: Number,
      required: true,
    },
    vue: {
      type: Number,
      required: true,
    },
    wordpress: {
      type: Number,
      required: true,
    },
    python: {
      type: Number,
      required: true,
    },
    ruby: {
      type: Number,
      required: true,
    },
    my_sql_server: {
      type: Number,
      required: true,
    },
    salesforce: {
      type: Number,
      required: true,
    },
    photoshop: {
      type: Number,
      required: true,
    },
    illustrator: {
      type: Number,
      required: true,
    },
    seo: {
      type: Number,
      required: true,
    },
    laravel: {
      type: Number,
      required: true,
    },
    other: {
      type: String,
      required: true,
    },
    crud: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Developer', DeveloperSchema);
