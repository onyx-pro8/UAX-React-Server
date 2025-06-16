import React, { useState } from "react";

import { Box } from "./components/box";
import { AuthInput } from "./components/input";

import { useHooks } from "@hooks";

import Logo from '@assets/media/logo.svg';
import { Button } from "../../components/common/Button";

export const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { navigation } = useHooks();

    return (
        <Box>
            <div className="pt-[30px] pb-[26px] border-b border-b-[#FFFFFF0F] flex flex-col gap-[10px] items-center">
                <img src={Logo} alt="No logo" />
                <h1>Node Monitoring</h1>
            </div>
            <div className="px-8 py-5">
                <h6 className="py-[2px] text-center">Signin with your email address:</h6>
                <AuthInput
                    state={form}
                    setState={setForm}
                    type='email'
                    placeholder={'Enter email or username'}
                />
                <AuthInput
                    state={form}
                    setState={setForm}
                    type='password'
                    placeholder={'Password'}
                />
                <Button
                    content={'Sign In'}
                    style="bg-[#E22FFF] my-6"
                    action={() => navigation('/bucket')}
                />
            </div>
        </Box>
    )
};