import { Metadata } from 'next';
import { FadeInUpDiv } from '@/components/anim';

export const metadata: Metadata = {
  title: 'About · TechDad',
  description:
    'TechDad – writing about smart homes, home labs, and DIY automation',
};

export default function AboutPage() {
  return (
    <main className="container py-10 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <FadeInUpDiv>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            About
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            TechDad – About smart homes, home labs, and DIY automation.
          </p>
        </FadeInUpDiv>
      </div>
    </main>
  );
}
