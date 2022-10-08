import { useFormik, FormikProps } from "formik";
import type { NextPage } from "next";
import { join } from "./schema";

interface InitialValuesProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const onSubmit = async (values: any, actions: any) => {

console.log(values);

  actions.resetForm();
};

const Form: NextPage = () => {
  const {
    values,
    errors,
    handleBlur,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik<InitialValuesProps>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: join,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col p-2 border bg-white shadow-xl">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Digite o seu email"
          onBlur={handleBlur}
          className={`border border-gray-700 pl-2 h-8 ${
            errors.email && touched.email && "border-red-600 border"
          }`}
        />
        <span
          className={`h-8 ${errors.email && touched.email && "text-red-700"}`}
        >
          {errors.email && touched.email && "Email inválido"}
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Ex: X@xx11"
          onBlur={handleBlur}
          className={`border border-gray-700 pl-2 h-8 ${
            errors.password && touched.password && "border-red-600 border"
          }`}
        />
        <span
          className={`h-8 ${
            errors.password && touched.password && "text-red-700"
          }`}
        >
          {errors.password && touched.password && "Senha inválida"}
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword">Confirmação de senha</label>
        <input
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Repita a sua senha"
          onBlur={handleBlur}
          className={`border border-gray-700 pl-2 h-8 ${
            errors.confirmPassword &&
            touched.confirmPassword &&
            "border-red-600 border"
          }`}
        />
        <span
          className={`h-8 ${
            errors.confirmPassword && touched.confirmPassword && "text-red-700"
          }`}
        >
          {errors.confirmPassword &&
            touched.confirmPassword &&
            "As senhas não conferem"}
        </span>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-800 text-white py-2"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
