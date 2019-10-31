import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      key: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation failure', messages: error.inner });
  }
};
