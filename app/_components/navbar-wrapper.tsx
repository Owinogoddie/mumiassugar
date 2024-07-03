import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(() => import('./navbar'), { ssr: false });

export const Navbar = () => <DynamicNavbar />;