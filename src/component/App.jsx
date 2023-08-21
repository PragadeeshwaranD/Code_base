import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
//import Load from "../index1";
function Not(note){
    return(<Note
    title={note.title}
    content={note.content}/>);
}

function App(){
    return(
        <div>
        <Header/>
        {notes.map(Not)}
        <Footer/>
        </div>
    );
};

export default App;