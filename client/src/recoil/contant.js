import { atom } from "recoil";


const showAlert = atom({
	key: 'ALERT_ON',
	default: false,
});

const showAlertError = atom({
	key: 'ALERT_ERROR_ON',
	default: false,
});

const content = atom({
	ket: 'content',
	default: "Thong bao"
})

const showMessageAlert = async (msg, setMsg, setShowMsg, showMsg) => {
	await setMsg(msg)
	await setShowMsg(!showMsg)
	setTimeout(async () => {
		await setMsg("")
		await setShowMsg(false)
	}, 3000);
}

const showMessageErrorAlert = async (err, setMsgError, setShowMsgError, showMsgError) => {
	await setMsgError(err)
	await setShowMsgError(!showMsgError)
	setTimeout(async () => {
		await setMsgError("")
		await setShowMsgError(false)
	}, 3000);
}

export {
	showAlert,
	showAlertError,
	content,
	showMessageAlert,
	showMessageErrorAlert
}