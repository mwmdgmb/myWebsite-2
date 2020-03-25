import App from "next/app";
import { ToastContainer } from "react-toastify";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/styleList/main.scss";
import "react-toastify/dist/ReactToastify.min.css";

class MovieApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <ToastContainer
          autoClose={2000}
          position="bottom-left"
          className="toast-container text-center rounded"
          toastClassName="dark-toast"
        />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MovieApp;
