export const Template = ({ datas }) => {
    return (
        <div className="flex gap-11">
            {
                datas.map((_itm, _idx) => (
                    <div key={_idx}>
                        <div className="flex items-center gap-1 mb-3">
                            <img src={_itm.icon} alt="No Device" />
                            <h6>{_itm.key}</h6>
                        </div>
                        <span className="pink text-[18px]">{_itm.value}</span>
                    </div>
                ))
            }
        </div>
    )
}