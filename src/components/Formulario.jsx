import { useState,useEffect } from "react"


const Formulario = () => {

  const [nombre,setNombre]=useState("");
  const [propietario,setPropietario]=useState("");
  const [email,setEmail]=useState("");
  const [fecha,setFecha]=useState("");
  const [sintomas,setSintomas]=useState("");

  const [error,setError]=useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar que todos los campos esten llenos
    if([nombre,propietario,email,fecha,sintomas].includes("")){
      console.log("Todos los campos son obligatorios");
      setError(true);
    } else {
      console.log("Todos los campos estan llenos");
    }
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error ? 'Si hay un error en el formulario' : 'No hay error'}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
        </div>

        <div div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
            />
        </div>

        <div div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
            />
        </div>

        <div div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
          />
        </div>
        
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  )
}

export default Formulario