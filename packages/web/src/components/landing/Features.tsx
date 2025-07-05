import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our GitHub Tools?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Streamline your GitHub workflow with intuitive extensions and a powerful CLI — all private, local, and blazing
					fast.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Fast & Lightweight</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Run common GitHub tasks instantly — open issues, manage PRs, or check workflows, all with minimal setup.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 Fully Local</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Your data never leaves your machine. Everything runs in your browser or terminal, keeping your work
							private.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🧩 GitHub Extended</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Enhance GitHub with custom shortcuts, scripts, and repo insights — right from the extension or CLI.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
