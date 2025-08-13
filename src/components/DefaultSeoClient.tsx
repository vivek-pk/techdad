'use client';
import { DefaultSeo } from 'next-seo';
import SEO from '@/config/seo';

export default function DefaultSeoClient() {
  return <DefaultSeo {...SEO} />;
}
