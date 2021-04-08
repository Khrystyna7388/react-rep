import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

let interval;
class Comp extends Component {

    componentDidMount() {
       interval = setInterval(() => {
            console.log('fetching new data')
        }, 2000)
        console.log('component did mount child')
    }

    componentWillUnmount() {
        console.log('component will unmount child')
        clearInterval(interval);
    }

    render() {
        console.log('child rerender')
        return (
            <h2>child</h2>
        )
    }
}

class App extends Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
    }

    incCounter = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        console.log('rerender');
        return (
            <>
                <h1 onClick={this.incCounter}>hello {this.state.counter}</h1>
                {!!(this.state.counter % 2) && <Comp/>}
            </>
        )
    }
}

export default App;
