'use client';

import dynamic from 'next/dynamic';

const Comments = dynamic(() => import('./comments'), {
    ssr: false,
    loading: () => <div className="h-32 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-lg" />,
});

export default function LazyComments() {
    return <Comments />;
}
