const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const viewButton = document.getElementById('view');
const extractButton = document.getElementById("extractButton");
const clearButton = document.getElementById("clearButton");

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
    download.classList.add('clickable');
    download.textContent = "Download";
    download.addEventListener('click', function () {
      window.open(downloadUrl, '_blank');
    });
    const viewUrl = url.replace(/&dl=1/,"");
    const view = document.createElement('button');
    viewButton.innerHTML = "";
    view.classList.add('clickable');
    view.textContent = "Open video";
    view.addEventListener('click', function() {
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

