const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const extractButton = document.getElementById("extractButton");
const clearButton = document.getElementById("clearButton");

extractButton.addEventListener("click", function () {
  const text = inputText.value;
  const valueRegex = /\"browser_native_hd_url\":\"([^\"]+)\"/m;
  const extractedUrl = text.match(valueRegex);

  if (extractedUrl) {
    const url = extractedUrl[1].replace(/%\u0025/g, "%").replace(/\\/g, "");
    const download = document.createElement('button');
    outputText.innerHTML = ""; // Clear previous output
    download.classList.add('clickable');
    download.textContent = "Download";
    download.addEventListener('click', function () {
        window.open(url, '_blank');
    });
    outputText.appendChild(download);
  } else {
    outputText.innerHTML = "No URL found.";
  }
});

clearButton.addEventListener("click", function () {
  inputText.value = "";
  outputText.innerHTML = "";
});

function extract(text) {}
