import type { NextPage } from "next";
import { useFormik } from "formik";
import { register } from "../../components/forms/schema";
import { useRouter } from "next/router";
import { useState } from "react";

interface InitialValuesProps {
  email2: string;
  name: string;
  password2: string;
  confirmpassword: string;
}

const Register: NextPage = () => {
  const router = useRouter();
  const [created, setCreated] = useState(false);

  const onSubmit = async (values: any, actions: any) => {
    delete values.confirmpassword;  
    
    const infos = {
      name: values.name,
      email: values.email2,
      password: values.password2
    }
    
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(infos),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };   
    console.log(requestInfo)
    // return
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
      requestInfo
      ); 

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
      email2: "",
      password2: "",
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
              id="email2"
              value={values.email2}
              onChange={handleChange}
              placeholder="Digite o seu email"
              onBlur={handleBlur}
              className={`border border-gray-700 pl-2 h-8 ${
                errors.email2 && touched.email2 && "border-red-600 border"
              }`}
            />
            <span
              className={`h-8 ${
                errors.email2 && touched.email2 && "text-red-700"
              }`}
            >
              {errors.email2 && touched.email2 && "Email inválido"}
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
            <label htmlFor="password2">Senha</label>
            <input
              type="password"
              id="password2"
              value={values.password2}
              onChange={handleChange}
              placeholder="Ex: X@xx11"
              onBlur={handleBlur}
              className={`border border-gray-700 pl-2 h-8 ${
                errors.password2 && touched.password2 && "border-red-600 border"
              }`}
            />
            <span
              className={`h-8 ${
                errors.password2 && touched.password2 && "text-red-700"
              }`}
            >
              {errors.password2 && touched.password2 && "Senha inválida"}
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
