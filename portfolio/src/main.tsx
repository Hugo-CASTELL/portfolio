import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className={"absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"}>
            <div title={"beams"} className={"relative"}>
                <picture>
                    <source srcSet="assets/img/beams.avif" type="image/avif"/>
                    <img src="assets/img/beams.webp" alt="Background beams"/>
                </picture>
            </div>
        </div>

        <Header className={"fixed z-10 top-0 w-full bg-transparent"}/>

        <div className="absolute overflow-hidden w-full">
            <div className={"relative mx-0 w-full"}>
                <App/>
            </div>
        </div>
    </React.StrictMode>,
)
