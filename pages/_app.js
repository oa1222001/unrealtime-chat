import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Head from "next/head";
import NavbarComp from "../layout/NavbarComp";
import SSRProvider from "react-bootstrap/SSRProvider";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Discover our Messaging Platform for Startups &amp; SMB's. The one stop for sales, marketing &amp; support in one platform : Crisp. 14 Days free trial. No credit-card required. Try now ! We provide Knowledge base, Team Inbox, Chatbot, CRM and multiple other features to let you build your own way to customer success."
        />
        <title>Crisp Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComp>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </NavbarComp>
    </Fragment>
  );
}

export default MyApp;
