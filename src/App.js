import { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import podAkacjamiImg from "./assets/images/salon.jpg";
import dębowyImg from "./assets/images/domki.górskie.jpg";

class App extends Component {
    hotels = [
        {
            id: 1,
            name: 'Pod akacjami',
            city: 'Warszawa',
            rating: 8.5,
            numberOfReviews: 246,
            description: 'lorem ipsum dolor sit amet, consectetur adipsicing elit. Quisque consequat id lorem vitae accumsan',
            image: podAkacjamiImg
        },
        {
            id: 2,
            name: 'Dębowy',
            city: 'Gdańsk',
            rating: 8.2,
            numberOfReviews: 532,
            description: 'lorem ipsum dolor sit amet, consectetur adipsicing elit. Quisque consequat id lorem vitae accumsan',
            image: dębowyImg
        },
    ]
    state = {
        hotels:[],
        loading: true,
    };
    searchHandler(term) {
        const hotels = [...this.hotels]
        .filter(x => x.name
            .toLowerCase()
            .includes(term.toLowerCase()))
        this.setState({ hotels })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
            hotels: this.hotels,
            loading: false})
        }, 2000)
    }
    render() { 
        return (
            <div className="App">
                <Header onSearch={(term) => this.searchHandler(term)} />
                <Menu />
                {this.state.loading 
                ? <LoadingIcon />
                : <Hotels hotels={this.state.hotels} />
                }
            </div>
        )
    }
}
export default App