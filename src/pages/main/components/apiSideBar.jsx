import { useMemo } from "react";
import { datas } from "@components/data";
import { Box } from "./box";

export const ApiSideBar = ({ state, setState }) => {
    const position = useMemo(() => 14 + Number(state) * 44, [state]);
    return (
        <div className="flex flex-col min-w-[231px] gap-[10px]">
            <Box style="flex items-center justify-between p-[14px]">
                <h5 className="font-normal">Select APIs</h5>
                <i className="fa-solid fa-chevron-up text-white"></i>
            </Box>
            <Box style={"py-[14px] pr-[12px] h-full"}>
                {
                    datas.apiList.map((_itm, _idx) => (
                        <div
                            className={`flex min-h-[44px] transition-all duration-500 items-center px-[18px] border border-[transparent] py-[11px] cursor-pointer ${_idx === state ? 'active' : ''}`}
                            onClick={() => setState(_idx)}
                            key={_idx}
                        >
                            <span className="pink text-[13px] mr-1">{_itm.method}</span>
                            <span className="text-[13px] text-[#FFFFFFB2]">{_itm.domain}</span>
                        </div>
                    ))
                }
                <div
                    className={`h-[44px] w-[2px] bg-[#E22FFF] absolute right-0 transition-all duration-500`}
                    style={{
                        top: `${position}px`
                    }}
                />
            </Box>
        </div>
    )
};