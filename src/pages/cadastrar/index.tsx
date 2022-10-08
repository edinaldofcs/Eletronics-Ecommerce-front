import type { NextPage } from "next";
import { useFormik } from "formik";
import { register } from "../../components/forms/schema";
import { useRouter } from "next/router";
import { useState } from "react";

interface InitialValuesProps {
  email: string;
  name: string;
  password: string;
  confirmpassword: string;
}

const Register: NextPage = () => {
  const router = useRouter();
  const [created, setCreated] = useState(false);

  const onSubmit = async (values: any, actions: any) => {
    delete values.confirmpassword;
    
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(values),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };

    const data = await fetch(
      "http://localhost:5000/user/register",
      requestInfo
    );
    console.log(data);

    if (data.status === 201) {
      setCreated(true);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }

    // actions.resetForm();
  };

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
      confirmpassword: "",
      name: "",
    },
    validationSchema: register,
    onSubmit,
  });

  return (
    <div className="h-auto flex items-center justify-center py-10">
      {!created ? (
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col p-2 border bg-white shadow-xl"
        >
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
              className={`h-8 ${
                errors.email && touched.email && "text-red-700"
              }`}
            >
              {errors.email && touched.email && "Email inválido"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Digite o seu nome"
              onBlur={handleBlur}
              className={`border border-gray-700 pl-2 h-8 ${
                errors.name && touched.name && "border-red-600 border"
              }`}
            />
            <span
              className={`h-8 ${errors.name && touched.name && "text-red-700"}`}
            >
              {errors.name && touched.name && "minimo 6 caractéres"}
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
            <label htmlFor="confirmpassword">Confirmação de senha</label>
            <input
              type="password"
              id="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              placeholder="Repita a sua senha"
              onBlur={handleBlur}
              className={`border border-gray-700 pl-2 h-8 ${
                errors.confirmpassword &&
                touched.confirmpassword &&
                "border-red-600 border"
              }`}
            />
            <span
              className={`h-8 ${
                errors.confirmpassword &&
                touched.confirmpassword &&
                "text-red-700"
              }`}
            >
              {errors.confirmpassword &&
                touched.confirmpassword &&
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
      ) : (
        <div className="h-40 flex items-center">
          <div className=" bg-white p-4">
            <p className="bg-blue-800 text-white px-4 py-2">
              Cadastro criado com sucesso
            </p>
            <p className="text-blue-800 text-center">Indo para Login...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
