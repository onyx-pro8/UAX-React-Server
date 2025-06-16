import React from "react";

export const Box = ({ children }) => {
    return (
        <div className="w-full h-screen d-center px-4 sm:px-0">
            <div className="auth-box">
                {children}
            </div>
        </div>
    )
};