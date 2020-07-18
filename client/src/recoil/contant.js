import { atom, selector } from "recoil";

const showAlert = atom({
    key: 'ALERT_ON',
    default: false,
});

const content = atom({
	ket: 'content',
	default: "Thong bao"
})


export {
	showAlert,
	content
}