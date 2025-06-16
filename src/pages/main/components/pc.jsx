import { datas } from "@components/data";

export const PCInfor = () => {
    return (
        <div
            className="flex items-center justify-between"
        >
            <div className="flex items-center gap-7">
                {
                    datas.PCInfor.map((_itm, _idx) => (
                        <div className="flex items-center ga0-[6px]" key={_idx}>
                            <img src={_itm.icon} alt="No infor" />
                            <h6 className="text-[#FFFFFFCC] font-normal">
                                {_itm.label}
                            </h6>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}