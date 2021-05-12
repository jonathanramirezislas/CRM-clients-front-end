import React from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Nuevacuenta = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: ",",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre  es obligatorio"),
      apellido: Yup.string().required("El apellido  es obligatorio"),
      email:  Yup.string().email('El email no es valido').required("El email  es obligatorio"),
      password:  Yup.string().required("El password  es obligatorio").min(6,'El password debe de contener al menos 6 caracteres'),
    }),
    onSubmit: (data) => {
      //console.log(data)
      //dispatch, call api , etc
    },
  });

  return (
    <Layout>
      <h1 className="text-center text-2xl text-white font-light"></h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            action=""
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="nombre usuario"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            { formik.touched.nombre && formik.errors.nombre ? (
                <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.nombre}</p>
                </div>
            ) : null  }

            <div className="mb-4">
              <label
                htmlFor="apellido"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                apellido
              </label>
              <input
                id="apellido"
                type="text"
                placeholder="apellido usuario"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.apellido}
              />
            </div>
            { formik.touched.apellido && formik.errors.apellido ? (
                <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.apellido}</p>
                </div>
            ) : null  }

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email usuario"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.email}
              />
            </div>
            { formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                </div>
            ) : null  }

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password usuario"
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.password}
              />
            </div>
            { formik.touched.password  && formik.errors.password  ? (
                <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password }</p>
                </div>
            ) : null  }


            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-600"
              value="Crear cuenta"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Nuevacuenta;
