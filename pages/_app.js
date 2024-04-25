import '../styles/custom.global.scss'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FQCXGRHLMR"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQCXGRHLMR');
          `,
        }}
      />
    </>
  );
}
export default MyApp