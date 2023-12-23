import { cx } from '../../../hooks/helpers'

const PColor = ({ color }) => {

    const generatedClass = cx('p-2 border border-stone-400 rounded-full',);

    const inlineStyles = {
        backgroundColor: color,
    };

    return (
        <span className={generatedClass} style={inlineStyles}>
        </span>
    )
}

export default PColor