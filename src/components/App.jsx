import Face from "./Face";
import Footer from "./Footer";
import List from "./List";
import Loader from "./Loader";
import Nav from "./Nav";
import { useState, useEffect } from "react";


export default function App() {
    const [loading, setLoading] = useState(0)
    useEffect(()=>{
        setLoading(1)
        setTimeout(()=>{
            setLoading(0)
        }, 1000)
    }, [])
    return (
        <>
            {
                loading ? <Loader/> 
                : 
                <>
                    <Face/>
                    <Nav/>
                    <List/>
                    <Footer/>
                    <Loader/>
                </>
            }
        </>
    )
}