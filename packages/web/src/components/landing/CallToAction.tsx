import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="w-full py-16">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-8 text-center">
				<h3 className="text-2xl font-bold sm:text-3xl">Supercharge your GitHub workflow</h3>
				<p className="text-neutral-500">
					Manage repositories, automate tasks, and extend GitHub with powerful browser tools and a seamless CLI — no
					setup required.
				</p>
				<div>
					<Link href="/app">
						<button
							type="button"
							className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3">
							Launch Extension
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
