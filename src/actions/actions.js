
export const loadMeetingsAction = meetings => {
    return { 
     type: 'loadMeetings',
     payload: { meetings },
    }
 };

export const saveMeetingAction = data => {
    return { 
     type: 'saveMeeting',
     payload: {  data },
    }
 };

 
