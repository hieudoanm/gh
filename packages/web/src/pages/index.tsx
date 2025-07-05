import { CallToAction } from '@gh/components/landing/CallToAction';
import { Features } from '@gh/components/landing/Features';
import { Footer } from '@gh/components/landing/Footer';
import { Hero } from '@gh/components/landing/Hero';
import { Navbar } from '@gh/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<Hero />
			<div className="w-full border-t border-neutral-800" />
			<Features />
			<div className="w-full border-t border-neutral-800" />
			<CallToAction />
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</>
	);
};

export default HomePage;
