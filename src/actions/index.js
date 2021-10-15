import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
var clientdetails;
export const SendToClient = function (clientdet) {
	clientdetails = clientdet;
	return { type: 'LIST_CLIENT' }
}

export function* watcherSaga() {
	yield takeLatest("LIST_CLIENT", workerSaga);
}
function* workerSaga() {
	const response = yield call(ClientAPI);
	console.log("Response from api" , response);
	yield put({ type: "API_REQUEST_SUCCESS", ClientList: response.data });
}
function ClientAPI() {
	return axios.post("http://localhost:4000/clientapi", clientdetails);
}