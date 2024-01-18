import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Header from "./components/Header/Header.tsx";
import BackgroundPicture from "./components/BackgroundPicture.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BackgroundPicture
            className={"absolute z-10 top-0 inset-x-0 flex justify-center"}
            title={"beams"}
            alt={"Background beams"}
            source={"assets/img/beams"}
        />

        <Header className={"fixed z-10 top-0 w-full bg-transparent"}/>

        <div className="absolute overflow-visible w-full">
            <div className={"relative mx-0 w-full"}>
                <App/>
            </div>
        </div>
    </React.StrictMode>,
)
