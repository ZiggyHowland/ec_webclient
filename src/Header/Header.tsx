function Header(props: any) {
    return (
        <div className="App-header">                        
            <div className="App-name">      
            
                <header>
                    <h1>{props.appname}</h1>
                </header>
            </div>            
        </div>
    );
}

export default Header;