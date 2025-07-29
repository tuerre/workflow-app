import { ZodError } from "zod"

const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Datos inválidos',
        details: result.error.flatten().fieldErrors
      });
    }
    req.body = result.data;
    next();
  } catch(err) {
    res.status(500).json({ error: 'Error interno servidor' });
  }
}

export default validate
