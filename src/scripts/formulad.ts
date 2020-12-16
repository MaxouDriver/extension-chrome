async function getProfileInfo(): Promise<any> {
  const fullName = document.querySelectorAll("#post-278 > div > div.drivers-area008 > div > p")[0];
  
  
  const response = {
    fullName: fullName.textContent.replace(/\n/, "").trim(),
    title: "driver",
  };

  return response;
}

let profile: any = null;

setTimeout(() => {
  getProfileInfo().then(data => profile = data|| profile)
}, 5000);

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {  
  if (msg.from === "popup" && msg.subject === "getFullName") {
    response(profile);
  } else {
    response('no response available')
  }
  return true;
});