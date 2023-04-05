import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
        <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        <link rel="stylesheet" href="/plugins/jqvmap/jqvmap.min.css" />
        <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
        <link rel="stylesheet" href="/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/dist/js/adminlte.js?v=3.2.0"></script>
      </body>
    </Html>
  )
}
