import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'Pwa Spike',
    name: 'Demo PWA site',
    description: 'A simple PWA built with React and Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png'
      }
    ]
  }
}