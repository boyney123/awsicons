import Head from "next/head"

const TITLE = "awsicons – Open Source SVG Library for AWS Services"
const DESCRIPTION = "New MIT open source SVG icon library for AWS Services. One-click copy-paste. Built with NextJS and Tailwind CSS."

const SEO = () => (
	<Head>

		<meta
			charSet="utf-8"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		/>
		<link
			rel="icon"
			href="https://awsicons.dev/static/favicon.ico"
		/>
		<title>
			{TITLE}
		</title>
		<meta
			name="title"
			content={TITLE}
		/>
		<meta
			name="description"
			content={DESCRIPTION}
		/>

		{/* Facebook */}
		<meta
			property="og:type"
			content="website"
		/>
		<meta
			property="og:url"
			content="https://awsicons.dev"
		/>
		<meta
			property="og:title"
			content={TITLE}
		/>
		<meta
			property="og:description"
			content={DESCRIPTION}
		/>
		<meta
			property="og:image"
			content="https://awsicons.dev/static/social.png"
		/>

		{/* Twitter */}
		<meta
			property="twitter:card"
			content="summary_large_image"
		/>
		<meta
			property="twitter:url"
			content="https://awsicons.dev"
		/>
		<meta
			property="twitter:title"
			content={TITLE}
		/>
		<meta
			property="twitter:description"
			content={DESCRIPTION}
		/>
		<meta
			property="twitter:image"
			content="https://awsicons.dev/static/social.png"
		/>

		{/* New */}
		<meta
			name="twitter:creator"
			content="@boyney123"
		/>

	</Head>
)

export default SEO
