import type { NextPage } from "next";
import { useFormik } from "formik";
import { join } from "../../components/forms/schema";
import { useUserContext } from "../../context/useContext";
import { useRouter } from "next/router";

interface InitialValuesProps {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { updateUser, user } = useUserContext();
  const router = useRouter();
  const onSubmit = async (values: any, actions: any) => {
    // console.log(values);
    //actions.resetForm();
    
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(values),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, requestInfo);
    // console.log(requestInfo)
    // return
    const newUser = await data.json();
    updateUser(newUser);
    localStorage.setItem(`eletronics`, JSON.stringify(newUser))
    router.push("/")
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
    },
    validationSchema: join,
    onSubmit,
  });

  return (
    <div className="h-96 flex items-center justify-center">
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
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-800 text-white py-2"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
