import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";


const layout =({children}: PropsWithChildren) => {
    return (

        <div className = "layout">
        <Header /> {children}
        <Footer />
        </div>
    )
}

export default layout