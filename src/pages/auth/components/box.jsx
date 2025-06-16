import React from "react";

export const Box = ({ children }) => {
    return (
        <div className="w-full h-screen d-center">
            <div className="auth-box">
                {children}
            </div>
        </div>
    )
};