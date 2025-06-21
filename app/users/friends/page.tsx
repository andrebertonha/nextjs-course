"use client";

import { useState } from "react";



async function makePostRequest() {
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "Context-Type": "application/json"
        },
        body: JSON.stringify({ name: "Andre" }),
    });

    const data = await res.json();
    return { data };
}

export default function Friends() {
    const [message, setMessage] = useState("");
    const onClick = async () => {
        const {data} = await makePostRequest();
        setMessage(data.message)
    }
    return <h1> hey friends, {message} <button onClick={onClick}>Click Here</button></h1>
}