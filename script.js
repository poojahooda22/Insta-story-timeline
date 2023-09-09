//instagram stories animation by simple javascript 

var arr = [
    {dp:"https://img.freepik.com/premium-photo/human-sitting-yoga-poses-with-glowing-chakras_582637-1080.jpg?w=826", 
    story: "https://img.freepik.com/premium-photo/human-sitting-yoga-poses-with-glowing-chakras_582637-1080.jpg?w=826"},
    {dp:"https://img.freepik.com/premium-photo/tiger-playing-guitar-playing-guitar_1297-772.jpg?w=740", 
    story: "https://img.freepik.com/premium-photo/tiger-playing-guitar-playing-guitar_1297-772.jpg?w=740"},
    {dp:"https://img.freepik.com/premium-photo/colorful-painted-face-man_158863-21594.jpg?w=740", 
    story: "https://img.freepik.com/premium-photo/colorful-painted-face-man_158863-21594.jpg?w=740"},
    {dp:"https://img.freepik.com/premium-photo/ai-character-of-the-digital-avatar-stylized-realism_721243-3510.jpg?w=1380", 
    story: "https://img.freepik.com/premium-photo/ai-character-of-the-digital-avatar-stylized-realism_721243-3510.jpg?w=1380"},
    {dp:"https://img.freepik.com/free-photo/cyberpunk-woman-warrior-portrait_23-2150712446.jpg?t=st=1694180109~exp=1694183709~hmac=69d53580bf866714e3767055d4b24e53d56ce51cbf473c15fc0eb7fef6f8418f&w=740", 
    story: "https://img.freepik.com/free-photo/cyberpunk-woman-warrior-portrait_23-2150712446.jpg?t=st=1694180109~exp=1694183709~hmac=69d53580bf866714e3767055d4b24e53d56ce51cbf473c15fc0eb7fef6f8418f&w=740"},
    {dp:"https://img.freepik.com/premium-photo/milky-way-magic-sphere-fortune-teller-mind-power-concept-magic-ball-predictions-mysterious-composition-fortune-teller-mind-power-prediction-concept-copy-space_494741-32421.jpg", 
    story: "https://img.freepik.com/premium-photo/milky-way-magic-sphere-fortune-teller-mind-power-concept-magic-ball-predictions-mysterious-composition-fortune-teller-mind-power-prediction-concept-copy-space_494741-32421.jpg"},
    {dp:"https://img.freepik.com/free-photo/glass-bowl-coctail-places-candle-holder_140725-6013.jpg?w=900&t=st=1694173925~exp=1694174525~hmac=ed0b9cfe2cfe1b5c0a02d67ae8f91ab7769a36ce33e26bf510395d08d5e3b016", 
    story: "https://img.freepik.com/free-photo/glass-bowl-coctail-places-candle-holder_140725-6013.jpg?w=900&t=st=1694173925~exp=1694174525~hmac=ed0b9cfe2cfe1b5c0a02d67ae8f91ab7769a36ce33e26bf510395d08d5e3b016"},
]

var storiyan = document.querySelector("#storiyan");
var clutter = ""
arr.forEach(function(elem, indx) {
    clutter += `<div class="story">
        <img id="${indx}" src="${elem.dp}" />
        </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function() {
        document.querySelector("#full-screen").style.display = "none";
    }, 1000)
});
