import './Header.css';

function Header(props: any) {


    return (

        <div className="App-header">
            <header>
                <h1 className="dnb-h--xx-large">{props.appname}</h1>
            </header>

        </div>
    );
}

export default Header;