
async function getProfileInfo(): Promise<any> {
  const nameElement = document.querySelectorAll("#post-278 > div > div.drivers-area008 > div > p")[0];
  const instaElement = document.querySelectorAll("#post-278 > div > div.drivers-area008 > div > div:nth-child(4) > ul > li:nth-child(1) > a")[0];
  
  const response:any = {
    name: nameElement.textContent.replace(/\n/, "").trim(),
    insta: instaElement?.toString()
  };

  return response;
}

let profile: any = null;

setTimeout(() => {
  getProfileInfo().then(data => profile = data|| profile)
}, 8000);

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {  
  if (msg.from === "popup" && msg.subject === "getFullName") {
    response(profile);
  } else {
    response('no response available')
  }
  return true;
});