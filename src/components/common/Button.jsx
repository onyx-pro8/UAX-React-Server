import React from "react";

export const Button = ({ content, icon, style, action }) => {
    return (
        <button
            className={`py-3 flex items-center justify-center w-full rounded ${style}`}
            onClick={action}
        >
            {
                icon && <i className={`fa fa-${icon}`} />
            }
            <span className="font-normal text-[13px] text-white">{content}</span>
        </button>
    )
};