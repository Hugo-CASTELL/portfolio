import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className={"absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"}>
            <img src={"assets/img/beams2.avif"} alt={"Background beams"} className={"relative"}/>
        </div>

        <Header className={"sticky top-0 bg-transparent"}/>

        <div className="relative overflow-hidden -mt-[-5.75rem] pt-12 md:pt-[5.75rem]">
            <div className={"relative mx-auto w-full max-w-container px-10 pt-4 sm:px-6 lg:flex lg:px-32"}>
                <App/>
            </div>
        </div>
    </React.StrictMode>,
)
