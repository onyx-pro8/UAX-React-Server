import { useState } from "react";

import { datas } from "@components/data";
import { Header } from "@components/layout/header";

import { ApiHead } from "./components/apiHead";
import { Box } from "./components/box";

import { ApiSideBar } from "./components/apiSideBar";
import { ApiState } from "./components/apiState";


export const APIs = () => {
    const [state, setState] = useState(0);

    return (
        <div className="px-4 py-6">
            <Header style='flex' state={true} />
            <ApiHead />
            <div className="flex gap-4 mt-[10px] md:flex-row flex-col">
                <ApiSideBar state={state} setState={setState} />
                <Box style={'flex-1'}>
                    <ApiState />
                    <div className="py-9 px-7">
                        <h5 className="font-normal text-[14px] mb-4">RESPONSE</h5>
                        <div className="flex flex-col">
                            {
                                datas['apiResponds'][Number(state) % 3]
                            }
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
};