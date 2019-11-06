import React from 'react';
// import './index.css';

function Nickname(props) {
    
    return <h1 class="myclass">网站名称</h1>;
}

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1 class="myclass">hello</h1>
                <h2>现在是: {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(e => ({
            count: e.count + 1,
            show: !e.show
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.show ? "+1" : "谢谢"}</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export { Nickname, Clock, Button }