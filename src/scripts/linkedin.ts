async function getProfileInfo(): Promise<any> {
  const fullName = document.getElementsByClassName("inline t-24 t-black t-normal break-words")[0];
  const title = document.querySelectorAll(".pv-top-card h2.mt1")[0];

  const response = {
    fullName: fullName.textContent.replace(/\n/, "").trim(),
    title: title.textContent.replace(/\n/, "").trim(),
    country: "XXX"
  };

  return response;
}

let profile: any = null;

setTimeout(() => {
  getProfileInfo().then(result => {
    profile = result || profile;
  });
}, 6000);

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {  
  if (msg.from === "popup" && msg.subject === "getFullName") {
    response(profile);
  } else {
    response('hey')
  }
  return true;
});