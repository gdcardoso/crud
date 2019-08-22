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

    await Developer.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      name: req.body.name,
      skype: req.body.skype,
      phone: req.body.phone,
      linkedin: req.body.linkin,
      city: req.body.city,
      state: req.body.state,
      portfolio: req.body.portfolio,
      salary_requirements: req.body.salary_requirements,
      ionic: req.body.ionic,
      reactjs: req.body.reactjs,
      react_native: req.body.react_native,
      android: req.body.android,
      ios: req.body.ios,
      html: req.body.html,
      css: req.body.css,
      bootstrap: req.body.bootstrap,
      jquery: req.body.jquery,
      angularjs1: req.body.angularjs1,
      angular: req.body.angular,
      java: req.body.java,
      asp_mvc: req.body.asp_mvc,
      asp_webform: req.body.asp_webform,
      c: req.body.c,
      c_sharp: req.body.c_sharp,
      nodejs: req.body.nodejs,
      cake: req.body.cake,
      django: req.body.django,
      magento: req.body.magento,
      php: req.body.php,
      vue: req.body.vue,
      wordpress: req.body.wordpress,
      python: req.body.python,
      ruby: req.body.ruby,
      my_sql_server: req.body.my_sql_server,
      salesforce: req.body.salesforce,
      photoshop: req.body.photoshop,
      illustrator: req.body.illustrator,
      seo: req.body.seo,
      laravel: req.body.laravel,
      other: req.body.other,
      crud: req.body.crud,
      willingness_to_work: req.body.willingness_to_work,
      best_time_to_work: req.body.best_time_to_work,
    });

    return res.json({ ok: `${req.body.name} developer successfully updated` });
  }

  async delete(req, res) {
    const { name } = await Developer.findByIdAndDelete(req.params.id);

    return res.json({ ok: `${name} developer successfully deleted` });
  }
}

export default new DeveloperController();
