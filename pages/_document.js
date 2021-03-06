import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    setGoogleTags() {
        if (process.env.NEXT_PUBLIC_NODE_ENV === "PRODUCTION") {
            return {
                __html: ` 
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-CHQ4MBCQ7B');
                `,
            };
        }
    }

    render() {
        return (
            <Html lang="eng">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
                    />
                    <link rel="stylesheet" href="/static/css/styles.css" />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-CHQ4MBCQ7B"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={this.setGoogleTags()}
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
