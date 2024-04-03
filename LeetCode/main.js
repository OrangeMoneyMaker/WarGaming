let first_line_data = [
    { id: 1, img: "./image/tank 1.png", text: "T-34" },
    { id: 2, img: "./image/tank 1.png", text: "T-34" },
    { id: 3, img: "./image/tank 1.png", text: "T-34" },
    { id: 4, img: "./image/tank 1.png", text: "T-34" },
    { id: 5, img: "./image/tank 1.png", text: "T-34" },
    { id: 6, img: "./image/tank 1.png", text: "T-34" }
];
let second_line_data = [

];

function build_line(line, imgArr) {
    let line_block = document.getElementsByClassName(line);
    imgArr.forEach(element => {
        let tank = document.createElement('div');
        tank.className = 'tank_block tooltip';
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip_block';
        tooltip.innerText = "TEST";
        let img = document.createElement('img');
        let text = document.createElement('span');
        text.innerText = element.text;
        img.src = element.img;
        tank.appendChild(img);
        tank.appendChild(text);
        tank.appendChild(tooltip);
        line_block[0].appendChild(tank);
    });

}





build_line('first_line', first_line_data);
