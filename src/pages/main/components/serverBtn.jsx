import { Button } from "@components/common/Button"
import { datas } from "@components/data"

import { useHooks } from "@hooks";

export const ServerBtn = () => {
    const { navigation } = useHooks();

    return (
        <div>
            {
                datas.serverBtns.map((_itm, _idx) => (
                    <Button
                        image={_itm.icon}
                        content={_itm.content}
                        action={() => navigation('/main')}
                        style="bg-[#D9D9D912] px-[8px] mt-[6px] gap-[8px] min-w-[146px] !justify-start"
                    />
                ))
            }
        </div>
    )
}