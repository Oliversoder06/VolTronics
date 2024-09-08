'use client'; // Ensure this component runs on the client side

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = ({ homeIcon }: { homeIcon: any }) => {
    const pathname = usePathname(); // Get the current path
    const pathSegments = pathname.split('/').filter((segment) => segment);

    // Add "Home" as the first breadcrumb
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        ...pathSegments.map((segment, index) => {
            // Rebuild the path progressively
            const href = '/' + pathSegments.slice(0, index + 1).join('/');

            // Capitalize each segment and replace hyphens with spaces
            const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');

            return { name, href };
        }),
    ];

    return (
        <nav className='h-[50px] pl-5 flex items-center'>
            <ul className="breadcrumb flex items-center gap-1">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item flex gap-1">
                        {index > 0 && <span>&gt;</span>}
                        <Link href={crumb.href}>
                            {index === 0 ? (
                                <div className="relative w-4 h-4 group">
                                    <Image src='/icons/home1.svg' layout="fill" alt='homeicon' className='block group-hover:hidden' />
                                    <Image src='/icons/home2.svg' layout="fill" alt='homeicon' className='hidden group-hover:block cursor-pointer' />
                                </div>
                            ) || <span className='text-primary_mid hover:text-primary_dark cursor-pointer'>{crumb.name}</span> : <span className='text-primary_mid hover:text-primary_dark cursor-pointer'>{crumb.name}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
