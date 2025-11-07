import { Link } from "react-router-dom";

const TarjetaProyecto = ({
  titulo,
  srcImg,
  descripcion,
  linkGithub,
  linkPage,
}) => {
  return (
    <div className="flex flex-col w-64 border rounded-md border-stone-400 shadow-xl select-none">
      <div>
        <p className="font-semibold md:text-lg ps-5 py-1">{titulo}</p>
      </div>
      <div>
        <img src={srcImg} />
      </div>
      <div>
        <p className="p-3 text-sm md:text-base">{descripcion}</p>
      </div>
      {linkGithub && (
        <div className="ps-2 py-2">
          <Link
            to={linkGithub}
            rel="noreferrer noopener"
            target="_blank"
            className="flex flex-wrap gap-2 items-center"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>Link a GitHub</span>
          </Link>
        </div>
      )}
      {linkPage && (
        <div className="ps-2 py-2">
          <Link
            to={linkPage}
            rel="noreferrer noopener"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <svg
              version="1.1"
              id="PAGE"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 1800 1800"
              enableBackground="new 0 0 1800 1800"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    fill="#333333"
                    d="M1720.335,5.563H85.245c-43.937,0-79.679,35.739-79.679,79.667v1635.1c0,43.928,35.743,79.67,79.679,79.67 h1635.09c43.927,0,79.665-35.742,79.665-79.67V85.23C1800,41.302,1764.262,5.563,1720.335,5.563z M85.245,68.575h1635.09 c9.182,0,16.653,7.473,16.653,16.655v195.532H68.578V85.23C68.578,76.048,76.055,68.575,85.245,68.575z M1720.335,1736.988H85.245 c-9.19,0-16.667-7.472-16.667-16.658V343.774h1668.41V1720.33C1736.988,1729.517,1729.517,1736.988,1720.335,1736.988z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M1518.679,1150.928H333.948c-47.154,0-85.517,38.363-85.517,85.517v315.061 c0,47.152,38.363,85.516,85.517,85.516h1184.73c47.154,0,85.518-38.363,85.518-85.516v-315.061 C1604.196,1189.291,1565.833,1150.928,1518.679,1150.928z M1541.184,1551.505c0,12.403-10.096,22.504-22.505,22.504H333.948 c-12.409,0-22.504-10.101-22.504-22.504v-315.061c0-12.412,10.096-22.505,22.504-22.505h1184.73 c12.409,0,22.505,10.093,22.505,22.505V1551.505z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M333.948,913.886h305.565c47.153,0,85.517-38.365,85.517-85.519V522.802 c0-47.154-38.363-85.516-85.517-85.516H333.948c-47.154,0-85.517,38.362-85.517,85.516v305.565 C248.432,875.521,286.794,913.886,333.948,913.886z M311.444,522.802c0-12.408,10.096-22.504,22.504-22.504h305.565 c12.408,0,22.505,10.096,22.505,22.504v305.565c0,12.408-10.097,22.505-22.505,22.505H333.948 c-12.409,0-22.504-10.097-22.504-22.505V522.802z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M1572.689,996.396H279.938c-17.401,0-31.506,14.108-31.506,31.505c0,17.406,14.105,31.507,31.506,31.507 h1292.751c17.401,0,31.507-14.101,31.507-31.507C1604.196,1010.505,1590.091,996.396,1572.689,996.396z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M1572.689,832.116H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505 h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,846.222,1590.091,832.116,1572.689,832.116z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M1572.689,643.081H858.558c-17.402,0-31.507,14.105-31.507,31.506c0,17.401,14.105,31.505,31.507,31.505 h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,657.186,1590.091,643.081,1572.689,643.081z"
                  ></path>{" "}
                  <path
                    fill="#333333"
                    d="M1572.689,454.044H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505 h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,468.15,1590.091,454.044,1572.689,454.044z"
                  ></path>{" "}
                  <circle
                    fill="#333333"
                    cx="204.913"
                    cy="171.616"
                    r="50.635"
                  ></circle>{" "}
                  <circle
                    fill="#333333"
                    cx="364.694"
                    cy="171.616"
                    r="50.635"
                  ></circle>{" "}
                  <circle
                    fill="#333333"
                    cx="524.474"
                    cy="171.616"
                    r="50.635"
                  ></circle>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>Link a página</span>
          </Link>
        </div>
      )}
    </div>
  );
};

const Proyectos = () => {
  return (
    <main className="p-5">
      <div>
        <h4 className="text-xl sm:text-2xl ps-5">Trabajos</h4>
        <div className="flex flex-wrap justify-center lg:justify-start
 gap-5 p-5">
          <TarjetaProyecto
            titulo={"Vetta HRMS - EN PROCESO"}
            srcImg={"/img/img_portada_vettahrms.png"}
            descripcion={
              "Desarrollo de una App Web de HRMS. Control y gestión de colaboradores con autenticación de usuarios, fichaje, dashboard especifico para cada rol."
            }
          />
        </div>
      </div>
      <div>
        <h4 className="text-xl sm:text ps-5">Proyectos</h4>
        <div className="flex flex-wrap gap-5 p-5 justify-center lg:justify-start">
          <TarjetaProyecto
            titulo={"Chocolateria"}
            srcImg={"/img/img_portada_chocolateria.png"}
            descripcion={
              "Desarrollo de una App Web de una chocolateria (catálogo de productos). Control y gestión de insumos y productos con autenticación de usuarios (para dueño y empleados del negocio)."
            }
            linkGithub={
              "https://github.com/Gianca307/Chocolateria-WebApp?tab=readme-ov-file"
            }
            linkPage={"https://chocolateria-webapp.onrender.com/"}
          />
          <TarjetaProyecto
            titulo={"Nextfix"}
            srcImg={"/img/img_portada_nextfix.png"}
            descripcion={
              "Desarrollo de una App Web de películas. Registro de peliculas con autenticación de usuarios con distintos roles."
            }
            linkGithub={"https://github.com/Gianca307/nextfix-webapp-eit"}
            linkPage={"https://nextfix-webapp-eit.onrender.com/login"}
          />
          <TarjetaProyecto 
          titulo={"Emanar Bebidas - Api Rest"} 
          srcImg={"/img/img_portada_swagger_emanar.png"}
          descripcion={"Proyecto de una Api Rest Java desarrollada Spring Boot. Api para la administración y gestión de ventas, compras, clientes, y proveedores de un negocio de bebidas."}
          linkGithub={"https://github.com/Gianca307/ws-rest-emanar"}
          linkPage={"https://ws-rest-emanar.onrender.com/swagger-ui.html"}
          />
          <TarjetaProyecto 
          titulo={"Vans - Copia"}
          srcImg={"/img/img_portada_vans.png"}
          descripcion={"Página de e-commerce de zapatillas, incluida compra de articulos y agregado de stock. Página desarrollada con React y TailwindCss."}
          linkPage={"https://celebrated-kitsune-4583e9.netlify.app/"}
          />
        </div>
      </div>
    </main>
  );
};

export default Proyectos;
