import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import {config} from '@/config'
import {DESCRIPTION, KEYWORDS} from '@/constants'
import './globals.css'
import {cn} from '@/lib/utils'

const roboto = Roboto({subsets: ['latin'], variable: '--font-sans'})

const {title, url, author} = config

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`
	},
	description: DESCRIPTION,
	keywords: KEYWORDS,
	metadataBase: new URL(url),
	generator: 'Next.js',
	creator: author,
	publisher: author,
	robots: 'index, follow',
	manifest: '/favicons/site.webmanifest',
	openGraph: {
		title,
		description: DESCRIPTION,
		type: 'website'
	},
	twitter: {
		title,
		description: DESCRIPTION
	},
	applicationName: title,
	category: DESCRIPTION,
	appleWebApp: {
		title: title,
		statusBarStyle: 'black-translucent',
		capable: true
	},
	icons: {
		icon: [
			{
				url: '/favicon.ico',
				sizes: '32x32',
				type: 'image/x-icon'
			},
			{
				url: '/favicons/icon-16.png',
				sizes: '16x16',
				type: 'image/png'
			},
			{
				url: '/favicons/icon-32.png',
				sizes: '32x32',
				type: 'image/png'
			},
			{
				url: '/favicons/icon-192.png',
				sizes: '192x192',
				type: 'image/png'
			}
		],
		apple: {
			sizes: '180x180',
			url: '/favicons/apple-touch-icon.png'
		},
		shortcut: {
			url: '/favicon.ico'
		}
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang={'en'}
			className={cn('font-sans', 'dark', roboto.variable)}>
			<body className={'antialiased'}>
				<NextTopLoader color={'#2245c4b'} />
				{children}
			</body>
		</html>
	)
}
