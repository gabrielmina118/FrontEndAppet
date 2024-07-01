import { useClerk } from "@clerk/clerk-react";
import {
    CustomContainer,
    CustomDeviceTd,
    CustomDeviceTh,
    CustomImage,
    CustomTable,
    FoodQuantity,
    Message,
} from "./styled";
import useGetDevices from "../../hooks/useDevices";

const MeusDevices = () => {
    const { user } = useClerk();

    const email = user?.emailAddresses[0]?.emailAddress;
    const { devices, loading, error } = useGetDevices(email!);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return (
            <CustomContainer>
                <Message>
                    Você precisa estar logado para ver os dispositivos.
                </Message>
            </CustomContainer>
        );
    }

    return (
        <>
            <CustomTable>
                <thead>
                    <tr>
                        <CustomDeviceTh>Foto</CustomDeviceTh>
                        <th>Device</th>
                        <th>Horário</th>
                        <th>Tempo do motor</th>
                        <CustomDeviceTh>Quantidade de alimento</CustomDeviceTh>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device.id}>
                            <CustomDeviceTd>
                                <CustomImage
                                    src={device.image}
                                    alt={`Foto de ${device.name}`}
                                />
                            </CustomDeviceTd>
                            <td>{device.name}</td>
                            <td>{device.hourFeed.join(" - ")}</td>
                            <td>{device.doorTime} segundos</td>
                            <FoodQuantity
                                quantity={normalizeAmountFood(
                                    device.amountFood
                                )}
                            >
                                {device.amountFood
                                    ? device.amountFood
                                    : "BAIXO"}
                            </FoodQuantity>
                        </tr>
                    ))}
                </tbody>
            </CustomTable>
        </>
    );
};

function normalizeAmountFood(amountFood: string): "CHEIO" | "MEDIO" | "BAIXO" {
    const normalized = amountFood.toUpperCase();
    if (
        normalized === "CHEIO" ||
        normalized === "MEDIO" ||
        normalized === "BAIXO"
    ) {
        return normalized as "CHEIO" | "MEDIO" | "BAIXO";
    } else {
        return "BAIXO";
    }
}

export default MeusDevices;
