const instial_state = {
	datalist : []
};
export const ClientReducer = function(state=[instial_state],action)
{
	// console.log("##api called", action.ClientList);
	switch(action.type)
	{
		case 'API_REQUEST_SUCCESS' :
			return {...state, clientlistdata:action.ClientList};
		default :
			return state
	}
}
