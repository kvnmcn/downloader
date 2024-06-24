const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const viewButton = document.getElementById('view');
const extractButton = document.getElementById("extractButton");
const clearButton = document.getElementById("clearButton");
// TODO convert to reactJS
// TODO add option for user to input fb link instead for public videos
extractButton.addEventListener("click", function () {
  const text = inputText.value;
  const valueRegex = /\"browser_native_hd_url\":\"([^\"]+)\"/;
  const extractedUrl = text.match(valueRegex);

  if (extractedUrl) {
    // Can use string concatenation instead of template literal
    const url = `${extractedUrl[1].replace(/\\u0025/g, "%").replace(/\\/g, "")}&dl=1`;
    const downloadUrl = `${url}&dl=1`;
    const download = document.createElement('button');
    outputText.innerHTML = ""; // Clear previous output
    download.textContent = "Download";
    download.addEventListener('click', function () {
      window.open(downloadUrl, '_blank');
    });
    const viewUrl = url.replace(/&dl=1/, "");
    const view = document.createElement('button');
    viewButton.innerHTML = "";
    view.textContent = "Open video";
    view.addEventListener('click', function () {
      window.open(viewUrl, '_blank');
    });
    viewButton.appendChild(view);

    outputText.appendChild(download);
  } else {
    outputText.innerHTML = "No URL found.";

  }
});

clearButton.addEventListener("click", function () {
  inputText.value = "";
  outputText.innerHTML = "";
  viewButton.innerHTML = "";
});
// credit to https://codepen.io/cortez/pen/jOrNGGQ
// altered it a little bit
const toggleSwitch = document.querySelector('.theme-switch');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    checkbox.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);