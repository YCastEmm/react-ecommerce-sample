import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"




const LayoutPublic = () =>{
    const navigation = useNavigation()

    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
}

export default LayoutPublic