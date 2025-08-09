// >> Imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// >> Variables
const name = 'Sora.AI';
const desc =
	'Sora AI Companion Grok is an AI-powered Telegram bot built for the Solana ecosystem. It detects emerging projects, automates trades, manages wallets, tracks history, and provides real-time growth rankings for smarter trading decisions. Join the future of trading today.';
const img = 'https://i.imgur.com/WE7UKZp.png';
const themeColor = '#000000';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <!-- Main Meta Tags --> */}
					<meta charSet="utf-8" />
					<meta name="theme-color" content={themeColor} />
					<meta name="description" content={desc} />

					{/* <!-- Facebook Meta Tags --> */}
					<meta property="og:type" content="website" />
					<meta property="og:title" content={name} />
					<meta property="og:description" content={desc} />
					<meta property="og:image" content={img} />
					<meta property="og:site_name" content={name} />

					{/* <!-- Twitter Meta Tags --> */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={name} />
					<meta name="twitter:description" content={desc} />
					<meta name="twitter:image" content={img} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
