import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Header from "./components/Header/Header.tsx";
import BackgroundPicture from "./components/BackgroundPicture.tsx";
import Footer from './components/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BackgroundPicture
            className={"absolute top-0 inset-x-0 flex justify-center"}
            title={"beams"}
            alt={"Background beams"}
            source={"assets/img/beams"}
        />

        <Header className={"fixed lg:backdrop-blur-sm z-50 top-0 w-full bg-transparent"}/>

        <div className="overflow-visible w-full">
            <div className={"mx-0 w-full"}>
                <App/>
            </div>
        </div>

        <Footer className={"bottom-0 mx-0 text-center text-active"}/>

    </React.StrictMode>,
)
