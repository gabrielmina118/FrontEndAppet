import { useClerk } from "@clerk/clerk-react";

const UsuarioLogado = () => {
    const { user } = useClerk();
    return (
        <div>
            <p>
                <strong style={{color:"yellow"}}>Usuario logado: </strong> {user?.fullName} -{" "}
                {user?.emailAddresses[0].emailAddress}
            </p>
        </div>
    );
};
export default UsuarioLogado;
