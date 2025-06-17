import { useState } from "react";

import { datas } from "@components/data";

import { Input } from "@components/common/Input";
import { Button } from "@components/common/Button";
import { Select } from "@components/common/Select";


export const ApiState = () => {
    const [form, setForm] = useState({
        method: 'post',
        url: 'https://cmw.uax.network/mint_coin_request'
    });

    const prev = (
        <div className="flex">
            <Select
                options={datas.apis}
                style={{
                    select: 'text-[#E22FFF] bg-transparent border-0 h-max !py-[3px]'
                }}
            />
            <div className="w-[1px] bg-[#FFFFFF14] ml-3 " />
        </div>
    )

    return (
        <div className="px-[30px] py-5 border-b border-[#FFFFFF14]">
            <h5 className="font-normal text-[15px]">Select APIs</h5>
            <div className="flex gap-3 mt-[14px] sm:flex-row flex-col">
                <Input
                    state={form.url}
                    setState={e => setForm(prev => ({
                        ...prev,
                        ['url']: e.target.value
                    }))}
                    content={{
                        prev: prev
                    }}
                    style={{
                        back: 'py-[8px] border border-[#FFFFFF12] flex-1 rounded bg-[#D9D9D912] flex',
                        input: 'text-[14px] h-max'
                    }}
                />
                <Button
                    content={'Send'}
                    style="bg-[#E22FFF] sm:w-max w-full px-[34px]"
                />
            </div>
        </div>
    )
}