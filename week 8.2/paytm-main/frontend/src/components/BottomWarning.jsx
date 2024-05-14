import { Link } from "react-router-dom"

export function BottomWarning({label, link, link_text}) {
    return <div>
        <div className="py-2 text-sm flex justify-center">
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={link}>
            {link_text}
        </Link>
    </div>
}