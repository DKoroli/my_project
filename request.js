const xhr = new XMLHttpRequest();
xhr.open("GET", "http://slaider.md", false);
xhr.send();

document.body.innerHTML = xhr.response