import Link from 'next/link';

export default ({ CurrentUser }) => {
    const links = [
        !CurrentUser && {label:'Sign Up', href:'/auth/signup'},
        !CurrentUser && {label:'Sign In', href:'/auth/signin'},
        CurrentUser && {label:'Sign Out', href:'/auth/signout'}
    ].filter(linkConfig => linkConfig)
    .map(({ label,href }) => {
        return <li key={href} className="nav-item">
            <Link href={href}>
                <a className="nav-link">{label}</a>
            </Link>
            </li>
    });
    return <nav className="navbar navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">Home</a></Link>

        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                {links}
            </ul>

        </div>
    </nav>
};