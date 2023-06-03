import Link, { LinkProps } from "next/link"

interface NavItemProps {
    href: string,
}

const NavItem: React.FC<NavItemProps> = ({ href }) => {
    return (
        <Link
            href={href}
            className="className='text-base px-4 mx-2 cursor-pointer hover:border-b hover:border-black transition-all duration-100'"
        >
            {href.replace(/^\w/, match => match.toUpperCase())}
        </Link>
    )
}

export default NavItem