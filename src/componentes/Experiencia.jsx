const CardTrabajo = ({ titulo, posicion, periodo, descripcion }) => {
  return (
    <div className="border p-5 w-full border-zinc-400">
      <div>
        <p className="font-semibold">{titulo}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">{posicion}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">{periodo}</p>
      </div>
      <div>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

const Experiencia = () => {
  return (
    <main className="flex flex-col p-5">
      <CardTrabajo
        titulo={"Programador full stack"}
        posicion={"Autónomo"}
        periodo={"oct 2025 - actualidad"}
        descripcion={
          "Desarrollo de app web como freelance. Trabajo para clientes particulares."
        }
      />
      <CardTrabajo 
      titulo={"Técnico"}
      posicion={"Aroo S.a.s"}
      periodo={"sept. 2025 - sept. 2025"}
      descripcion={"Montaje de una red informática con infraestructura eléctrica y de datos integrada."}
      />
      <CardTrabajo 
      titulo={"Instalador de sistemas de seguridad"}
      posicion={"Autónomo"}
      periodo={"mar. 2025 - mar. 2025"}
      descripcion={"Instalación de sistemas de cámaras de seguridad. Instalación y configuración del sistema."}
      />
      <CardTrabajo
      titulo={"Administrador y gestor - Programador"}
      posicion={"Emanar Bebidas"}
      periodo={"dic. 2023 - ene. 2025"}
      descripcion={"Emprendimiento de delivery de bebidas. Administración, gestión y logística del negocio. Trato con proveedores y clientes. Delivery. Desarrollo de app web para el negocio. Aplicación de gestión de inventario, clientes, proveedores, ventas y compras del negocio."}
      />
      <CardTrabajo
      titulo={"Manejo de Redes"}
      posicion={"Instituto Superior en Redes & Informática"}
      periodo={"ene. 2024 - feb. 2024"}
      descripcion={"Atención al púbico a través de las redes de la empresa. Respuestas a consultas."}
      />
    </main>
  );
};

export default Experiencia;
