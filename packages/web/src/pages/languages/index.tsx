import { GitHubLanguages } from '@gh/components/app/Languages';
import { Navbar } from '@gh/components/shared/Navbar';
import { NextPage } from 'next';
import { useRef, useState } from 'react';

const LanguagesPage: NextPage = () => {
	const [{ repository = 'hieudoanm/hieudoanm' }] = useState<{ repository: string }>({
		repository: 'hieudoanm/hieudoanm',
	});
	const divRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="h-screen">
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<div className="container mx-auto p-8">
				<GitHubLanguages ref={divRef} repository={repository} />
			</div>
		</div>
	);
};

export default LanguagesPage;
