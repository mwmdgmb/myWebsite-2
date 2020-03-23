import App from "next/app";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/styleList/main.scss";

class MovieApp extends App {
  static async getInitialProps(appContext){
    const appProps = await App.getInitialProps(appContext);
    return {...appProps}
  }



  render() {
    const { Component ,pageProps } = this.props;
    return (
        <div>
          <Component {...pageProps} />
        </div>
    )
  }
}

export default MovieApp;
