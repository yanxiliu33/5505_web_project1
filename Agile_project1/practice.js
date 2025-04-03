const options = document.querySelectorAll('.option');
const submitBtn = document.getElementById('button');
const STORAGE_KEY = "multiSelectAnswers";
const modal = document.getElementById("animalModal");
const imageContainer = document.getElementById("animalImages");
//API的密钥和链接API keys and links
const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "live_8Aoo87GHJZsh1YOWvTfsiyALTnefn2P4fI4kPCFlFuWPNd4gcapKHH4EuRSdJXde";

// 加载本地保存Load local save
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

options.forEach(opt => {
  const val = opt.dataset.value;
  if (saved.includes(val)) {
    opt.classList.add("selected");
  }

  opt.addEventListener("click", () => {
    opt.classList.toggle("selected");

    const selected = getSelectedValues();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  });
});

function getSelectedValues() {
  return Array.from(document.querySelectorAll('.option.selected'))
    .map(o => o.dataset.value);
}

//提交时模拟框显示Simulate box display content during submission
submitBtn.addEventListener("click", async () => {
  const selected = getSelectedValues();

  if (selected.length === 0) {
    modal.style.display = "flex";
    imageContainer.innerHTML = 'Please select at least one option.';
    return;
  }

  modal.style.display = "flex";
  imageContainer.innerHTML = `Sorry, you did not meet the success criteria (12/15)<br>You selected ${selected.length} option(s):<br>- ${selected.join("<br>- ")}`;

  if (selected.length >= 12) {
    // 获取并展示1张动物图 Obtain and display 1 animal image
    imageContainer.innerHTML = `🎉 Congratulations, you have completed it!<br>You selected ${selected.length} option(s):<br>- ${selected.join("<br>- ")}`;
    const url = `${API_URL}images/search`;
    fetch(url, {
      headers: {
        'x-api-key': API_KEY
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const img = document.createElement("img");
        img.className = "animal-img";
        // Corrected to access the first item in the array
        img.src = data[0].url;
        imageContainer.appendChild(img);
      });
  }
})



