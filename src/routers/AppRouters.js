import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/LandingComponent/Landing";
import NewPost from "../components/Post/New/NewPost";
import AllPost from "../components/Post/List/List";

//localhost:3000/--> LandingComponent
//localhost:3000/post/new-->
//localhost:3000/post/all-->


export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="post/new" element={<NewPost />} />
            <Route path="post/all" element={<AllPost />} />

        </Routes>

    </BrowserRouter>
}