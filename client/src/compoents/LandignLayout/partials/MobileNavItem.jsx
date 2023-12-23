import { Link, useLocation } from 'react-router-dom'
import { cx } from '../../../hooks/helpers'

const MobileNavItem = ({ items }) => {

    // global
    const location = useLocation();

    return (
        items.map((nav) => (
            <li
                key={nav.id}
                className={cx(
                    location.pathname === nav.url ? "text-white hover:text-primary-300" : "text-dark-primary-100 hover:text-dark-primary-200",
                    "font-medium cursor-pointer text-[16px]"
                )}
            >
                <Link to={nav.url}>{nav.title}</Link>
            </li>

        ))
    )
}

export default MobileNavItem