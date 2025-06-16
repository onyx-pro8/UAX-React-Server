import { Button } from "@components/common/Button"
import { datas } from "@components/data"

import { useHooks } from "@hooks";

export const ServerBtn = () => {
    const { navigation } = useHooks();

    return (
        <div className="flex flex-wrap">
            {
                datas.serverBtns.map((_itm, _idx) => (
                    <div className="mt-[6px] mobile:w-full max-xs:w-full w-1/2 px-2" key={_idx}>
                        <Button
                            image={_itm.icon}
                            content={_itm.content}
                            action={() => navigation('/main')}
                            style="bg-[#D9D9D912] px-[8px] gap-[8px] !justify-start"
                        />
                    </div>
                ))
            }
        </div>
    )
}