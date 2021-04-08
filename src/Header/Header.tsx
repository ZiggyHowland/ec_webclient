function Header(props: any) {
    return (
        <div className="App-header">                        
            <div className="App-name">      
                <h4>CSS Layout Flexbox</h4>
                <p>In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.</p>
                <p>Resize the browser window to see the responsive effect.</p>
                <p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 and earlier versions.</p>

                <header>
                    <h1>{props.appname}</h1>
                </header>
            </div>            
        </div>
    );
}

export default Header;