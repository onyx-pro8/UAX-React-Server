import React, { useState } from "react";
import { useHooks } from "@hooks";

import { Box } from "./components/box";
import Logo from '@assets/media/logo.svg';
import { Button } from "@components/common/Button";
import { Input } from "@components/common/Input";

export const Bucket = () => {
    const { navigation } = useHooks();
    const [bucket, setBucket] = useState('TECHMINT-APIs');

    return (
        <Box>
            <div className="pt-[30px] pb-[26px] flex gap-[10px] justify-center">
                <img src={Logo} alt="No logo" />
            </div>
            <div className="px-8 py-5 flex flex-col items-center">
                <h1 className="text-[16px] text-left w-full mb-5">Buckets Creation</h1>
                <div
                    className="flex flex-col items-center bg-[#D9D9D912] w-full p-5 rounded-md border border-[#FFFFFF0D]"
                >
                    <span className="pink w-full mb-1">Enter Bucket Name</span>
                    <Input
                        state={bucket}
                        style={{
                            input: 'text-white text-[14px] w-full',
                            back: 'border-b border-[#FFFFFFB8] py-1 w-full'
                        }}
                        setState={e => setBucket(e.target.value)}
                    />
                    <Button
                        content={'Create Now'}
                        style="bg-[#E22FFF] w-max px-[20px] mt-[24px]"
                        action={() => navigation('/bucket')}
                    />

                </div>
            </div>
        </Box>
    )
}