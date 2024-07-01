import React, { useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { BASE_URL } from "../../utils/baseUrl";
import useGetDevices from "../../hooks/useDevices";
import { Input } from "../ui/input";
import {
    CustomActionTd,
    CustomImage,
    CustomTable,
    CustomTd,
    CustomTh,
    IconButton,
} from "./styled";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface DetailProps {
    editDevice: (id: string) => void;
}

const Detalhes: React.FC<DetailProps> = ({ editDevice }) => {
    const { user } = useClerk();

    const email = user?.emailAddresses[0]?.emailAddress;
    const { devices, loading, error, setDevices } = useGetDevices(email!);

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        hourFeed: "",
    });

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            setDevices(devices.filter((device) => device.id !== id));
        } catch (error) {
            console.error("Error deleting device:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <CustomTable>
            <thead>
                <tr>
                    <CustomTh>Foto</CustomTh>
                    <th>Device</th>
                    <th>Horário</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {devices.map((device, idx) => (
                    <tr key={device.id}>
                        <CustomTd>
                            <CustomImage
                                src={device.image}
                                alt={`Foto de ${device.name}`}
                            />
                        </CustomTd>
                        <td>{device.name}</td>
                        <td>{device.hourFeed.join(" - ")}</td>
                        <CustomActionTd>
                            {
                                <>
                                    <IconButton
                                        onClick={() => editDevice(device.id)}
                                    >
                                        <FaEdit />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleDelete(device.id)}
                                    >
                                        <FaTrashAlt />
                                    </IconButton>
                                </>
                            }
                        </CustomActionTd>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    );
};

export default Detalhes;
