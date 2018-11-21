import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import { FacebookProvider, Page } from 'react-facebook';


class Flight extends Component{

    render(){
        return(
       <div className="detail">
            <div className="description">
            <h2 class="overview__heading Flight__heading">Flight Take Off</h2>
                            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Hotel Hill</th>
                    <th>Hotel May</th>
                    <th>Hotel Yop</th>
                    <th>Hotel Lilly</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>     
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>

                    </tr>
                </tbody>
                </Table>
            </div>
            <div className="user-reviews">
            <FacebookProvider appId="1086325798190381">
                    <Page href="https://www.facebook.com/Jagdambacement-230266714506246/?modal=admin_todo_tour" tabs="timeline" />
                </FacebookProvider>    
            </div>
       </div>

        );
    }
}

export default Flight;