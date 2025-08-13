import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s · TechDad',
  defaultTitle: 'TechDad',
  description:
    'TechDad – writing about smart homes, home labs, and DIY automation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechDad',
  },
  twitter: { cardType: 'summary' },
};

export default config;
