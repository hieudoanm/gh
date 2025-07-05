import { GitHubLanguages } from '@gh/components/app/Languages';
import { Navbar } from '@gh/components/shared/Navbar';
import { NextPage } from 'next';
import { ChangeEvent, useRef, useState } from 'react';

const LanguagesPage: NextPage = () => {
	const [{ repository = 'hieudoanm/hieudoanm' }, setState] = useState<{ repository: string }>({
		repository: 'hieudoanm/hieudoanm',
	});
	const divRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="h-screen">
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<div className="container mx-auto p-8">
				<div className="mx-auto flex max-w-xs flex-col gap-y-8">
					<input
						id="repository"
						name="repository"
						placeholder="GitHub Repository"
						className="rounded-lg border border-neutral-800 px-4 py-2"
						value={repository}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setState((previous) => ({ ...previous, repository: event.target.value }));
						}}
					/>
					<GitHubLanguages ref={divRef} repository={repository} />
				</div>
			</div>
		</div>
	);
};

export default LanguagesPage;
