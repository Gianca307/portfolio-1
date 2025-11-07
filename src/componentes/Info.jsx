import HeaderInfo from "./HeaderInfo";
import NavBarInfo from "./NavBarInfo";
import { Routes , Route, Navigate } from "react-router-dom";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Experiencia from "./Experiencia";
import Contacto from "./Contacto";

const Info = () =>{

    return (
        <div className="w-5/6 bg-white rounded-xl min-h-[600px] md:min-h-[800px]">
            <HeaderInfo />
            <NavBarInfo />
            <Routes>
                <Route path="/" element={<Navigate to={"/sobreMi"} replace/>} />
                <Route path="/sobreMi" element={<SobreMi/>}/>
                <Route path="/proyectos" element={<Proyectos/>}/>
                <Route path="/experiencia" element={<Experiencia/>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
            </Routes>
        </div>
    )
}

export default Info;