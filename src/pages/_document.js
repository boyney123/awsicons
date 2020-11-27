import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="antialiased" lang="en">
				<Head>

					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
			
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-SK5R3JP8M7"></script>
					<script
								dangerouslySetInnerHTML={{
									__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-SK5R3JP8M7');
						`
					}}/>
				
					{/* Layout dark mode */}
					<style>
						{`
							html {
								/* cool-gray-50 */
								background-color: #f8fafc;
							}
							html.dark {
								/* cool-gray-950 */
								background-color: #0d1017;
							}
						`}
					</style>
					<script src="/scripts/layoutDarkMode.js" />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
