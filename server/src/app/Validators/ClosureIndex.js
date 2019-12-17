import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      familyId: Yup.number().required(),
      userId: Yup.number().required(),
    });

    await schema.validate(req.query, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation failure', messages: error.inner });
  }
};
