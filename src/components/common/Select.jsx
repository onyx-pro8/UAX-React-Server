import React from "react";

export const Select = ({
    options,
    style: { select, option } = {}
}) => {
    return (
        <select className="pb-[3px] pt-[1px] w-[74px] px-2">
            {
                options.map((_itm, _idx) => (
                    <option value={_itm.value}>{_itm.label}</option>
                ))
            }
        </select>
    )
};