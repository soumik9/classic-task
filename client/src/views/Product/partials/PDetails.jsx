import PColor from './PColor';

const PDetails = ({ variation }) => {

    return (
        <li className="flex gap-3 mb-3">

            <div className="mr-2 flex items-center gap-2">
                Color:
                <PColor color={variation.color} />
            </div>

            <div className="flex items-center gap-2">
                Size:
                {variation.size.map((s, index) => <div
                    key={index}
                    className="border border-stone-400 py-1 px-2 rounded-md text-xs hover:bg-slate-400 hover:text-white trans"
                >
                    {s}
                </div>)}
            </div>
        </li>
    )
}

export default PDetails