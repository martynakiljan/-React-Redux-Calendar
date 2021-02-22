import React from 'react';
import {StyledInput, StyledLabel, StyledContainer, StyledDiv, StyledButton, StyledError} from '../styles/StyledForm'
import validateForm from '../validation/validationForm'
import MeetingAPI from '../provider/MeetingAPI'

class CalendarForm extends React.Component {
   
        meetingApi = new MeetingAPI()
    
        state = {
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            time: '',
            errors: [],
        }

    

    render() {

        return (
            <form action="" onSubmit={ this.handleSubmit }>
               
                <StyledContainer>
                <StyledError>{ this.renderErrors() }</StyledError>
                <StyledDiv>
                    <StyledLabel>
                        Date: <StyledInput 
                            name="date" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.date } 
                            placeholder="RRRR-MM-DD"
                        />
                    </StyledLabel>
                    </StyledDiv>
                <StyledDiv>
                    <StyledLabel>
                        Time: <StyledInput
                            name="time" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.time } 
                            placeholder="HH:MM"
                        />
                    </StyledLabel>
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>
                        Firstname: <StyledInput
                            name="firstName" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.firstName } 
                           
                        />
                    </StyledLabel>
                </StyledDiv>
                <StyledDiv>
                    <StyledLabel>
                        Surname: <StyledInput
                            name="lastName" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.lastName } 
                        
                        />
                    </StyledLabel>
                </StyledDiv>
                <StyledDiv>
                    <StyledLabel>
                        Email: <StyledInput
                            name="email" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.email } 
                          
                        />
                    </StyledLabel>
                </StyledDiv>
             <StyledButton type="submit" value="save">SAVE</StyledButton>
       </StyledContainer>
            </form>
        )
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = validateForm(this.state);
        this.setState({
            errors,
        });

        if(errors.length === 0) {
            this.saveMeeting();
            this.clearFormFields();
            this.sendDataToApi(this.state);
 
        }
    }

    sendDataToApi = (state) => {
        this.meetingApi.sendMeetingToApi(state)
    }
    



   

    handleFieldChange = e => {
        if(this.isFieldNameCorrect(e.target.name)) {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    saveMeeting() {
        const {saveMeeting} = this.props;


        if(typeof saveMeeting === 'function') {
            saveMeeting( this.getFieldsData() );
        }
    }

    clearFormFields() {
        const fieldsData = this.getFieldsData();
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        this.setState(fieldsData);
    }

    getFieldsData() {
        const fieldsData = Object.assign({}, this.state);
        delete fieldsData['errors'];

        return fieldsData;
    }

    isFieldNameCorrect(name) {
        const fieldsData = this.getFieldsData();

        return typeof fieldsData[name] !== 'undefined';
    }

    renderErrors() {
        return this.state.errors.map( (err, index) => <li key={ index }>{ err }</li>);
    }
}

export default CalendarForm