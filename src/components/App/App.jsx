class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            count: 10,
            input: "",
            output: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(){
        
    }
    
    handleClick1(event){
        
    }
    
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    
    componentDidMount(){
        const{error, isLoaded, items} = this.state;
        let a = {
            iofile: "data/App.json"
        }
        fetch("src/api/load.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(a)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    
    render(){
        const{error, isLoaded, items, count} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="app_root">
                    <HeaderApp headerData={items.headerData} header={items.header}/>
                    <ContentApp content={items.content} city={items.city} contentText={items.contentText} handleChange={this.handleChange} handleClick1={this.handleClick1} handleClick={this.handleClick} value={count}/>
                    <FooterApp footer={items.footer}/>
                </div>
            );
        }
    }
}