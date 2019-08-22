import * as Yup from 'yup';
import Developer from '../schemas/Developer';

class DeveloperController {
  async index(req, res) {
    const checkId = !!req.params.id;

    if (checkId) {
      const developer = await Developer.findById({
        _id: req.params.id,
      });

      return res.json(developer);
    }

    const developers = await Developer.find();

    return res.json(developers);
  }

  async store(req, res) {
    const checkExits = await Developer.findOne({
      email: req.body.email,
    });

    if (checkExits) {
      return res.status(400).json({ error: 'Developer exists' });
    }

    const schema = Yup.object().shape({
      email: Yup.string()
        .required()
        .email(),
      name: Yup.string().required(),
      skype: Yup.string().required(),
      phone: Yup.string().required(),
      linkedin: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      portfolio: Yup.string(),
      willingness_to_work: Yup.string(),
      best_time_to_work: Yup.string(),
      salary_requirements: Yup.string().required(),
      ionic: Yup.number()
        .required()
        .max(1),
      reactjs: Yup.number()
        .required()
        .max(1),
      react_native: Yup.number()
        .required()
        .max(1),
      android: Yup.number()
        .required()
        .max(1),
      ios: Yup.number()
        .required()
        .max(1),
      html: Yup.number()
        .required()
        .max(1),
      css: Yup.number()
        .required()
        .max(1),
      bootstrap: Yup.number()
        .required()
        .max(1),
      jquery: Yup.number()
        .required()
        .max(1),
      angularjs1: Yup.number()
        .required()
        .max(1),
      angular: Yup.number()
        .required()
        .max(1),
      java: Yup.number()
        .required()
        .max(1),
      asp_mvc: Yup.number()
        .required()
        .max(1),
      asp_webform: Yup.number()
        .required()
        .max(1),
      c: Yup.number()
        .required()
        .max(1),
      c_sharp: Yup.number()
        .required()
        .max(1),
      nodejs: Yup.number()
        .required()
        .max(1),
      cake: Yup.number()
        .required()
        .max(1),
      django: Yup.number()
        .required()
        .max(1),
      magento: Yup.number()
        .required()
        .max(1),
      php: Yup.number()
        .required()
        .max(1),
      vue: Yup.number()
        .required()
        .max(1),
      wordpress: Yup.number()
        .required()
        .max(1),
      python: Yup.number()
        .required()
        .max(1),
      ruby: Yup.number()
        .required()
        .max(1),
      my_sql_server: Yup.number()
        .required()
        .max(1),
      salesforce: Yup.number()
        .required()
        .max(1),
      photoshop: Yup.number()
        .required()
        .max(1),
      illustrator: Yup.number()
        .required()
        .max(1),
      seo: Yup.number()
        .required()
        .max(1),
      laravel: Yup.number()
        .required()
        .max(1),
      other: Yup.string().required(),
      crud: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name } = await Developer.create(req.body);

    return res.json({
      ok: `${name} developer successfully created`,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required()
        .email(),
      name: Yup.string().required(),
      skype: Yup.string().required(),
      phone: Yup.string().required(),
      linkedin: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      portfolio: Yup.string(),
      willingness_to_work: Yup.string(),
      best_time_to_work: Yup.string(),
      salary_requirements: Yup.string().required(),
      ionic: Yup.number()
        .required()
        .max(1),
      reactjs: Yup.number()
        .required()
        .max(1),
      react_native: Yup.number()
        .required()
        .max(1),
      android: Yup.number()
        .required()
        .max(1),
      ios: Yup.number()
        .required()
        .max(1),
      html: Yup.number()
        .required()
        .max(1),
      css: Yup.number()
        .required()
        .max(1),
      bootstrap: Yup.number()
        .required()
        .max(1),
      jquery: Yup.number()
        .required()
        .max(1),
      angularjs1: Yup.number()
        .required()
        .max(1),
      angular: Yup.number()
        .required()
        .max(1),
      java: Yup.number()
        .required()
        .max(1),
      asp_mvc: Yup.number()
        .required()
        .max(1),
      asp_webform: Yup.number()
        .required()
        .max(1),
      c: Yup.number()
        .required()
        .max(1),
      c_sharp: Yup.number()
        .required()
        .max(1),
      nodejs: Yup.number()
        .required()
        .max(1),
      cake: Yup.number()
        .required()
        .max(1),
      django: Yup.number()
        .required()
        .max(1),
      magento: Yup.number()
        .required()
        .max(1),
      php: Yup.number()
        .required()
        .max(1),
      vue: Yup.number()
        .required()
        .max(1),
      wordpress: Yup.number()
        .required()
        .max(1),
      python: Yup.number()
        .required()
        .max(1),
      ruby: Yup.number()
        .required()
        .max(1),
      my_sql_server: Yup.number()
        .required()
        .max(1),
      salesforce: Yup.number()
        .required()
        .max(1),
      photoshop: Yup.number()
        .required()
        .max(1),
      illustrator: Yup.number()
        .required()
        .max(1),
      seo: Yup.number()
        .required()
        .max(1),
      laravel: Yup.number()
        .required()
        .max(1),
      other: Yup.string().required(),
      crud: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name } = await Developer.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
    });

    return res.json({ ok: `${name} developer successfully update` });
  }

  async delete(req, res) {
    const { name } = await Developer.findByIdAndDelete(req.params.id);

    return res.json({ ok: `${name} developer successfully deleted` });
  }
}

export default new DeveloperController();
