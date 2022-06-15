import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            todos: [],
            userInput: '',
            completedTask : 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let unique = true;
        this.state.todos.forEach(item => this.state.userInput === item ? unique = false : null)
        if(this.state.userInput === ''){
            alert('Please enter a task')
        }
        else if (unique) {
            this.setState({
                todos: this.state.todos.concat(this.state.userInput)
                
            })
        }
        else {
            alert("TODO already exists")
        }
        e.target.value = '';
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div>
                    <h1 style={{color:'blue'}}>TODO LIST</h1>
                    <h3>total Count : {this.state.todos.length}</h3>
                    <h3>Uncomplete Tasks : {this.state.todos.length}</h3>
                    <h3>Completed Tasks : {this.state.completedTask}</h3>
                    <form>
                        <input
                            placeholder='New task...'
                            style={{
                                width: '300px',
                                borderRadius: "5px",
                                borderColor: "green"
                            }}
                            value={this.state.text}
                            onChange={this.handleChange}
                        ></input>

                        <button
                            style={{
                                marginLeft: '4px',
                                width: '100px',
                                backgroundColor: 'green',
                                color: "white",
                                borderRadius: "25px",
                                borderColor: 'green'
                            }}
                            onClick={this.handleSubmit}
                        >Add</button>

                        <button style={{
                            style:'none',
                            marginLeft: '4px',
                            
                            color: "black",
                            borderRadius: "25px",
                            
                            width: '100px'
                        }}
                            onClick={(e) => {
                                e.preventDefault();
                                let found = true;
                                 this.state.todos.filter(item => item.match(this.state.userInput)? found = true : found = false)                     
                                   if(found){
                                    this.setState({
                                        todos: this.state.todos.filter(item => item.match(this.state.userInput))
                                    })
                                   }else{
                                       alert('TODO not found')
                                   }
                                
                               
                            }}
                        >Search</button>
                        <ol>
                            {
                                this.state.todos.map((todo, index) => {
                                    return <li key={index} style={{marginTop:'10px'}}>
                                        {todo} <button onClick={(e) => {
                                            e.preventDefault();
                                            
                                            this.setState({
                                                todos: this.state.todos.filter(item => item !== todo),
                                                completedTask : this.state.completedTask + 1
                                            })

                                        }}
                                            style={{
                                                marginRight: '10px',
                                                width: '100px',
                                                backgroundColor: 'black',
                                                color: "white",
                                                borderRadius: "25px",
                                                position: 'relative',
                                                borderColor: 'green',

                                            }}
                                        > Remove</button></li>
                                })
                            }
                        </ol>
                    </form>
                </div>
            </div>
        )
    }
}
