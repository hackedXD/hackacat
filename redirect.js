const NEW_TAB_URL = "https://hackedxd.github.io/hackacat/";
try {
	// chrome.tabs.getCurrent((tab) => {
	// 	chrome.tabs.update(tab.id, { url: NEW_TAB_URL });
	// });
	window.open(NEW_TAB_URL, "_self");
} catch (e) {
	// Fall back to client-side navigation.
	document.location.href = NEW_TAB_URL;
}
