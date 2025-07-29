import { ZodError } from "zod"

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Errores de validación",
        errors: err.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message
        }))
      })
    } else {
      console.error("🛑 Error inesperado en validación:", err)
      return res.status(500).json({ message: "Error interno del servidor" })
    }
  }
}

export default validate
