const initState = {
    meetings: [],
}

  function reducer (state = initState, action) {
      switch (action.type) {
        case "loadMeetings":
          return {
            ...state,
        
            meetings: action.payload.meetings,
          };
  
          case "saveMeeting":
            return {
              ...state,
              meetings: [...state.meetings, action.payload.data],
            };
        
        default:
          return state;
          
  
      }
    };
  
  
    export default reducer;