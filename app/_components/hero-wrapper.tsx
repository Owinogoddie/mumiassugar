import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('./hero'), { ssr: false });

export const Hero = () => <DynamicHero />;