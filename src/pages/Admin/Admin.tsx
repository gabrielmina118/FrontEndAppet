import  { useState } from "react";
import {
    AdminContainer,
    AdminHeader,
    AdminMenu,
    AdminMenuItem,
    AdminContent,
} from "./styled";
import MeusDevices from "../../components/MyDevices/MyDevices";
import Detalhes from "../../components/Details/Details";
import NovoDevice from "../../components/NewDevice/NewDevice";
import UsuarioLogado from "../../components/UserLogin/UserLogin";
import axios from "axios";
import { BASE_URL } from "@/utils/baseUrl";

export interface DeviceData {
    id: string;
    name: string;
    description: string;
    hourFeed: string[];
    doorTime: string;
    image: string;
}

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState("MeusDevices");
    const [deviceForm, setDevice] = useState<DeviceData>({
        id: "",
        name: "",
        description: "",
        hourFeed: [""],
        doorTime: "",
        image: "",
    });

    const editDevice = async (id: string) => {
        setActiveComponent("NovoDevice");
        console.log("id", id);
        try {
            const response = await axios.get(`${BASE_URL}/getByid/${id}`);
            setDevice({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                hourFeed: response.data.hourFeed,
                doorTime: response.data.doorTime,
                image: response.data.image,
            });
        } catch (err) {
            console.log(err);
        } finally {
            console.log(false);
        }
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case "MeusDevices":
                return <MeusDevices />;
            case "Detalhes":
                return <Detalhes editDevice={editDevice} />;
            case "NovoDevice":
                return <NovoDevice deviceForm={deviceForm} />;
            case "UsuarioLogado":
                return <UsuarioLogado />;
            default:
                return <MeusDevices />;
        }
    };

    return (
        <AdminContainer>
            <AdminHeader>Área Administrativa</AdminHeader>
            <AdminMenu>
                <AdminMenuItem
                    className={
                        activeComponent === "MeusDevices" ? "active" : ""
                    }
                    onClick={() => setActiveComponent("MeusDevices")}
                >
                    Meus Devices
                </AdminMenuItem>
                <AdminMenuItem
                    className={activeComponent === "Detalhes" ? "active" : ""}
                    onClick={() => setActiveComponent("Detalhes")}
                >
                    Detalhes
                </AdminMenuItem>
                <AdminMenuItem
                    className={activeComponent === "NovoDevice" ? "active" : ""}
                    onClick={() => setActiveComponent("NovoDevice")}
                >
                    Novo Device
                </AdminMenuItem>
                <AdminMenuItem
                    className={
                        activeComponent === "UsuarioLogado" ? "active" : ""
                    }
                    onClick={() => setActiveComponent("UsuarioLogado")}
                >
                    Usuário logado
                </AdminMenuItem>
            </AdminMenu>
            <AdminContent>{renderComponent()}</AdminContent>
        </AdminContainer>
    );
};

export default Admin;
