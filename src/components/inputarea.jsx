import React, { useState } from "react";

function inputarea(props){
    const [input, setinput]=useState({
        title:"",
        content:""
    });
return(
    <div>
        <form>
            <input
                name="title"
                onChange={handleChange}
                placeholder="title"
                value={input.title}
            />
            <inputarea
                name="content"
                onchange={handleChange}
                placeholder="take a note..."
                value={input.content}
                row="3"
            />
            <button ></button>
        </form>
    </div>
)

}

export default inputarea;