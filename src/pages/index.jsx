import React from "react";
import { Route, Routes } from 'react-router-dom';

import { SignIn } from "./auth/signin";
import { Bucket } from "./auth/bucket";

export const Pages = () => {
    return (
        <div className="w-full h-full min-h-screen 2xl:w-[1440px] mx-auto main-page">
            <Routes>
                {/* Default and Overview Routes */}
                <Route path="/" element={<SignIn />} />
                <Route path="/bucket" element={<Bucket />} />

                {/* Feature Routes */}
                {/* <Route path="/referral" element={<Referral />} />
                <Route path="/howtobuy" element={<HowToBuy />} />
                <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </div>
    );
};