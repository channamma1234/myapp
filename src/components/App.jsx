import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import inputarea from "./inputarea";

function createNote(add){
    return(
    <Note
        key={add.id}
        title={add.title}
        content={add.content}
    />);
}

function App(){
    return (
    <div>
    <Header/>
    {notes.map(createNote)}
    <Footer/>
    </div>);
}

export default App;