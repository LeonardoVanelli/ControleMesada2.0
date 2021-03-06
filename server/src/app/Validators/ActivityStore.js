import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      realized_date: Yup.date().required(),
      user_id: Yup.number()
        .required()
        .min(1),
      assignment_id: Yup.number()
        .required()
        .min(1),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation failure', messages: error.inner });
  }
};
