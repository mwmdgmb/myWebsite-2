
const BasePage = (props) => {

    const {children} = props ;

    return (
        <div className="container padding-page">

            {children}

        </div>
    )
}

export default BasePage