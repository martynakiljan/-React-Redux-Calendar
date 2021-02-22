import React from 'react';
import {StyledData, StyledListContainer} from '../styles/StyledForm'

class CalendarList extends React.Component {   
    render() {
        return <StyledData>{ this.renderMeetingsList() }</StyledData>
    }

    renderMeetingsList() {
        return this.props.meetings.map(item => 
            this.renderMeetingsItem(item)
        );
    }

    renderMeetingsItem(itemData) {
        return (
            <StyledListContainer key={itemData.id}>
                {itemData.date} {itemData.time} {}{}{}
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
            </StyledListContainer>
        )
    }
}

export default CalendarList