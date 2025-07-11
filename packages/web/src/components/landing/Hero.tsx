import { APP_NAME } from '@gh/constants';
import Link from 'next/link';
import { FC } from 'react';
import { LinearText } from '../shared/Linear';

export const Hero: FC = () => {
	return (
		<section className="w-full py-20">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
				<h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">
					<LinearText>{APP_NAME}</LinearText>
				</h2>
				<p className="text-lg text-neutral-100">
					Streamline your GitHub workflow with a fast, local-first toolkit — powerful extensions and a flexible CLI in
					one seamless experience.
				</p>
				<div>
					<Link href="/app">
						<button
							type="button"
							className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3">
							Launch Toolkit
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
