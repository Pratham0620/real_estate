'use client'
import { Avatar, Button, Container, Grid } from "@mui/material";
import '../../../public/sass/pages/sell_sidebar.scss';
import pic from '../../../public/images/sell/profile.png'
import { LocationCity, LockOutlined, Logout, Person2Outlined, Sell, Textsms } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const listItems = [
        { href: '/profile_dashboard/account/profile', icon: <Person2Outlined />, text: 'My Account' },
        { href: '/profile_dashboard/change_password', icon: <LockOutlined />, text: 'Change Password' },
        { href: '/profile_dashboard/my_properties', icon: <LocationCity />, text: 'My Properties' },
        { href: '/profile_dashboard/sell', icon: <Sell />, text: 'Sell' },
        { href: '/profile_dashboard/response', icon: <Textsms />, text: 'Responses' },
    ];

    const pathname = usePathname()

    return (
        <div className="sidebar_parent">
            <div className="profile">
                <div className="image">
                    <Image
                        src={pic}
                        alt="Hi"
                    />
                </div>
                <div className="data">
                    <h4>John Cooper</h4>
                    <p>demo@example.com</p>
                </div>
            </div>
            <ul className="list">
                {listItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className={`list_item ${pathname === item.href ? 'active' : ''}`}  >
                            {item.icon}
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="logout">
                <Button> <Logout />Logout</Button>
            </div>
        </div>

    )
}