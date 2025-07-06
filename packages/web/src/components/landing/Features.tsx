import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our GitHub Tools?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Boost your GitHub productivity with lightweight CLI utilities and browser extensions — private, local, and
					lightning fast.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Instant CLI Access</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Open issues, manage pull requests, and run workflows directly from your terminal with zero config.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🧭 Smart Browser Extensions</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Add powerful overlays, shortcuts, and insights right into the GitHub UI to navigate faster and work
							smarter.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 100% Local & Private</h4>
						<p className="mt-2 text-sm text-neutral-500">
							No servers, no tracking. Whether in your browser or shell, everything stays secure on your machine.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
