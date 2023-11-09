import { type ImageProps } from 'next/image'

import mesoigner from '@/images/logos/mesoigner.webp'
import buildspace from '@/images/logos/buildspace.webp'
import logo from '@/images/logos/logo.webp'

export type Experience = {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string
}

export const experience: Array<Experience> = [
  {
    company: 'Freelance',
    title: 'Full-stack Developer',
    logo: logo,
    start: '2022',
    end: 'Present',
  },
  {
    company: 'Buildspace',
    title: 'Full-stack Developer',
    logo: buildspace,
    start: '2023',
    end: '2023',
  },
  {
    company: 'MeSoigner',
    title: 'SEO Developer',
    logo: mesoigner,
    start: '2021',
    end: '2022',
  },
]
