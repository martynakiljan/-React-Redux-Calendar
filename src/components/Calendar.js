import React from 'react';
import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import {connect} from 'react-redux'
import {saveMeetingAction, loadMeetingsAction} from '../actions/actions'
import {StyledBoxForm} from '../styles/StyledForm'
import MeetingAPI from '../provider/MeetingAPI'
import store from '../index'


class Calendar extends React.Component {


    meetingApi = new MeetingAPI()
  
    componentDidMount() {
         this.meetingApi.loadMeetingsFromApi()
           .then((meetings) => {
                this.props.loadMeetings(meetings)
           })
    }

     saveMeeting = meeting  => {
            this.addMeetingToState(meeting);
     }

 
    render() {
       const  {meetings} = this.props;
        return (
        
            <StyledBoxForm>
                <CalendarList meetings={meetings} />
                <CalendarForm saveMeeting={ this.saveMeeting }/>
            </StyledBoxForm>

        )
    }
}

const mapStateToProps = (state, props) => {
    return {
       meetings: state.meetings
    }
}

const mapActionToProps = {
    loadMeetings: loadMeetingsAction,
    addMeeting: saveMeetingAction

}

export default connect(mapStateToProps, mapActionToProps)(Calendar);

