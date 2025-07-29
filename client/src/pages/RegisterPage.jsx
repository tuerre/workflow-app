import { useForm } from "react-hook-form"

function RegisterPage() {
  const { register, handleSubmit } = useForm()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Regístrate</h1>
        <form onSubmit={handleSubmit((values) => console.log(values))} className="flex flex-col gap-4">

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Correo electrónico*</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nombre de usuario <span className="text-red-400">*</span></label>
            <input
              type="text"
              {...register('username', { required: true })}
              placeholder="Nombre de usuario"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Contraseña*</label>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Contraseña"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Confirmar Contraseña <span className="text-red-400">*</span></label>
            <input
              type="password"
              {...register('confirmPassword', { required: true })}
              placeholder="Confirmar Contraseña"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-800 text-white py-2 rounded-md hover:bg-gray-800 transition-all"
          >
            Crear cuenta →
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
