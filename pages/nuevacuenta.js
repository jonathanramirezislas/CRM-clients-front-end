import React from 'react'

const Nuevacuenta = () => {
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
                ></input>
              </div>
  

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
                ></input>
              </div>

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
              ></input>
            </div>

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
                ></input>
              </div>


               <input 
              type="submit" 
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-600" 
              value="Crear cuenta"
              />
  
            </form>
          </div>
        </div>
      </Layout>
    )
}

export default Nuevacuenta
