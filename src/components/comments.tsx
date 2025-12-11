'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
    const { theme, systemTheme } = useTheme();

    // Determine the effective theme (light or dark)
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <Giscus
                id="comments"
                repo="vivek-pk/techdad"
                repoId="R_kgDOPdU01g"
                category="General"
                categoryId="DIC_kwDOPdU01s4Czn1l"
                mapping="pathname"
                term="Welcome to TechDad!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={currentTheme === 'dark' ? 'transparent_dark' : 'light'}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
