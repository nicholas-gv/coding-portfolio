const cards = document.querySelectorAll(".card-border")

const linkUrls = [
    "https://quirky-yonath-4bb595.netlify.app/",
    "https://helpful-peony-bd8415.netlify.app/",
    "https://nicholas-gv.github.io/some-common-layouts/",
    "https://bucolic-marzipan-874bde.netlify.app/"
]

const handleClick = (event, index) => {
    event.preventDefault()
    if (event.target.getAttribute("class")!=="card-link") {
        window.open(linkUrls[index]);    
    } 
}

cards.forEach((element, index) => {
    element.addEventListener('click', (event) => handleClick(event, index))
});

