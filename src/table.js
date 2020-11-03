import React from 'react'
import './table.css'

class Table extends React.Component {
    state = {
        id: [],
        currentPage: 0,
    };

    // Get the data from the dummp API and add data to the state
    getData() {
        fetch(`https://5fa0fa56e21bab0016dfd874.mockapi.io/Users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    id: data,
                })
            )
    }

    //Get data in ComponentDid Mount
    componentDidMount() {
        this.getData();
    }

    pageBack = () => {
        this.setState((prevState) => ({ currentPage: (prevState.currentPage - 5) }))
    }

    pageForward = () => {
        this.setState((prevState) => ({ currentPage: (prevState.currentPage + 5) }))
    }

    render() {
        const { id, currentPage } = this.state;
        return (
            <div>
                <h2>User Table</h2>
                <table>
                    <tbody>

                        {/* Initial table header */}
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Date Of Birth</th>
                        </tr>

                        {/* Map all ids and output data in a table */}

                        {id.slice((currentPage), (currentPage + 5)).map(user => {
                            const { id, name, Email, Position, DateOfBirth } = user;
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{Email}</td>
                                    <td>{Position}</td>
                                    {/* The APIs raw data outputs a time as well to the random time. Here I remove the time */}
                                    <td>{DateOfBirth.substring(0, 10)}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
                <button onClick={this.pageBack}>Previous Page</button>
                <button onClick={this.pageForward}>Next Page</button>
            </div>
        );
    }
}
export default Table;