/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Developer', () => {
  beforeAll(async () => {
    await truncate();
  });

  // create developer
  it('should be able to register a developer', async () => {
    const response = await request(app)
      .post('/')
      .send({
        email: 'gdcardoso@gmail.com',
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
      });
    expect(response.body).toHaveProperty('ok');
  });
  // create duplicate developer
  it('should not be able to register with duplicated email', async () => {
    const response = await request(app)
      .post('/')
      .send({
        email: 'gdcardoso@gmail.com',
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
      });

    expect(response.body).toHaveProperty('error');
  });
  // create developer - Validation Fails
  it('should be able to register a developer with error', async () => {
    const response = await request(app)
      .post('/')
      .send({
        name: 'Gabriel Dias Cardoso',
      });
    expect(response.body).toHaveProperty('error');
  });
  // list all developer
  it('should be able to list all developers', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  // list a developer
  it('should be able to list a developer', async () => {
    const responseId = await request(app).get('/');
    expect(responseId.body[0]);

    // eslint-disable-next-line no-underscore-dangle
    const response = await request(app).get(`/${responseId.body[0]._id}`);
    expect(response.body).toHaveProperty('_id');
  });
  // update developer
  it('should be able to update a developer', async () => {
    const responseId = await request(app).get('/');
    expect(responseId.body[0]);

    const response = await request(app)
      // eslint-disable-next-line no-underscore-dangle
      .put(`/${responseId.body[0]._id}`)
      .send({
        email: 'gdcardoso@gmail.com',
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
      });
    expect(response.body).toHaveProperty('ok');
  });
  // update developer - Validation Fails
  it('should be able to register a developer with error', async () => {
    const responseId = await request(app).get('/');
    expect(responseId.body[0]);

    const response = await request(app)
      // eslint-disable-next-line no-underscore-dangle
      .put(`/${responseId.body[0]._id}`)
      .send({
        name: 'Gabriel Dias Cardoso',
      });
    expect(response.body).toHaveProperty('error');
  });
  // delete developer
  it('should be able to delete a developer', async () => {
    const responseId = await request(app).get('/');
    expect(responseId.body[0]);

    // eslint-disable-next-line no-underscore-dangle
    const response = await request(app).delete(`/${responseId.body[0]._id}`);
    expect(response.body).toHaveProperty('ok');
  });
});
