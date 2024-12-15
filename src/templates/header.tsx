"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const path = usePathname();

    const isActive = (href: string) => {
        return path === href ? 'active' : '';
    };

    return (
        <header className="header-primary">
            <div className="inner-header container">
                <div className="inner-header-row row">
                    <div className="inner-header-nav col-lg-4 d-md-none">
                        <ul>
                            <li className={isActive('/')} >
                                <Link href="/">
                                    Welcome
                                </Link>    
                            </li>
                            <li className={isActive('#services')}>
                                <Link href="#services">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="inner-header-branding col-lg-4 col-md-12">
                        <Link href="/">
                            <h2>Creative MSFTS</h2>
                            <p>EST. 2023</p>
                        </Link>
                    </div>
                    <div className="inner-header-cta col-lg-4 d-md-none">
                        <ul>
{/*                             <li>
                                <Link href="/subscriptions">
                                    Subscribe
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    Pricing
                                </Link>
                            </li> */}
                            <li className={isActive('#work')}>
                                <Link href="#work">
                                    Work
                                </Link>
                            </li>
                            <li className={isActive('#about')}>
                                <Link href="#about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;