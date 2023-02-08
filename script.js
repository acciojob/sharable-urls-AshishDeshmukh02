// your code here
 const button = document.querySelector("#button");
  const url = document.querySelector("#url");

  button.addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const year = document.querySelector("#year").value;
    url.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
  });