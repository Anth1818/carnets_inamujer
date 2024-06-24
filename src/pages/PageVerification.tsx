import { Header } from "../components/Header";
import { NotVerification } from "../components/NotVerification";
import { Verification } from "../components/Verification";
import { useParams } from "react-router-dom";

export function PageVerification (){
    const { id } = useParams();

    return (
        <>
            <Header />
            <Verification />
            <NotVerification />
        </>
    )
}