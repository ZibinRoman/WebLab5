class ContentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }    
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="content root container-fluid">
                    <div className="container">
                        <iframe className="container" src="../lab5/src/components/Pacman/index.html" width="1000" height="600">
                        </iframe>
                    </div>
                </div>
            );
        }
    }
}