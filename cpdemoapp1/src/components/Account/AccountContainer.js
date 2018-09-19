import React, {
    Component
} from 'react';
import Account from "./";
import axios from "axios";


class AccountContainer extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            name: '',
            email: '',
            message: '',
            password: '',
            is21: false,
            shouldRenderAccountForm: true,
        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
}

handleFormSubmit = event => {
    event.preventDefault();

    const {
        name,
        email,
        message
        } = this.state;

        const user = {
            name: name,
            email: email,
            message: message
        };
        

        console.log(name, email, message + " was submitted ")
        console.log(message, email, name);
        axios.post('/api/messages/', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err =>{
                console.log(err);
            })

    }
 
    render() {
        const {
            shouldRenderAccountForm,
            
        } = this.state;

        return ( 
            <div className="ContactFormComponent" > 

            {shouldRenderAccountForm && //passing these below/can change to DynamicForm
            <Account
                inputs = {this.contactInputs}
                handleFormSubmit = {this.handleFormSubmit} //axios post
                handleInputChange = {this.handleInputChange}
                />
            }
            </div>
        );
    }
}

export default AccountContainer;