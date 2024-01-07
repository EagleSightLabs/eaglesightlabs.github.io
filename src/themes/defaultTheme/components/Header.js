// components/Header.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(Boolean);

    return (
        <nav id="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb">
                {pathSegments.length === 0 ? (
                    <li className="breadcrumb-item active">Home</li>
                ) : (
                    <>
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        {pathSegments.map((segment, index) => {
                            const path = `/${pathSegments
                                .slice(0, index + 1)
                                .join('/')}`;
                            const isLast = index === pathSegments.length - 1;
                            return (
                                <li
                                    key={path}
                                    className={`breadcrumb-item ${
                                        isLast ? 'active' : ''
                                    }`}
                                >
                                    {isLast ? (
                                        segment
                                    ) : (
                                        <Link href={path}>{segment}</Link>
                                    )}
                                </li>
                            );
                        })}
                    </>
                )}
            </ol>
        </nav>
    );
};

const Header = () => {
    return (
        <header id="topbar-wrapper" aria-label="Top Bar">
            <div
                id="topbar"
                className="d-flex align-items-center justify-content-between px-lg-3 h-100"
            >
                <Breadcrumbs />
            </div>
        </header>
    );
};

export default Header;
