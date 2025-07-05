import { Navbar } from '@gh/components/shared/Navbar';
import { NextPage } from 'next';

const PreviewPage: NextPage = () => {
	return (
		<div className="h-screen">
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<div className="container mx-auto p-8"></div>
		</div>
	);
};

export default PreviewPage;
