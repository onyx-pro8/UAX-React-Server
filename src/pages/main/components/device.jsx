import { datas } from "@components/data";
import { Template } from "./serverTemplate";

export const Device = () =>
    <div className="flex gap-11">
        <Template datas={datas.device} />
    </div>