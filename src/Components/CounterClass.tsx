import React from "react";

export default class CounterClass extends React.Component<{ text: number }> {


    state = {
        name: "Odd"
    }

    componentDidMount() {
        console.log("Component mounted")
    }

    componentDidUpdate() {
        console.log("Component did updated")
    }

    componentWillUnmount() {
        console.log("Component will un - mount")
    }

    // Fire before renders when prop and state got changed
    static getDerivedStateFromProps(props: any) {
        return {
            name: (props.text % 2) === 0 ? 'Even' : 'Odd'
        }
    }
    // Annouced to be deprecated and marked as UNSAFE
    // componentWillReceiveProps(){ }

    // Annouced to be deprecated and marked as UNSAFE
    // componentWillMount(){ }

    // shouldComponentUpdate(){
    //     console.log("should Component Update");
    // //    (this.props.text % 2) === 0 ? this.setState({name : 'Even'}) : this.setState({name : 'Odd'})        
    //     return true;
    // }

    getSnapshotBeforeUpdate() {
        return {
            name: (this.props.text % 2) === 0 ? 'Even' : 'Odd'
        }
        // console.log("get Snapshot Before Update");
        return null;
    }

    render() {
        return (<div>
            <span>
                My lucky no {this.state.name}
            </span>
            <p>
                {this.props.text}
            </p>

        </div>)
    }

}