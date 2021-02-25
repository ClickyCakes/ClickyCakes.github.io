var cakes = 0;
var level = 0;
var bakeThreshold = 80;
var cake = 0
var ovens = 0;
var level = 0;
var CakeImgs = ["https://cdn.pixabay.com/photo/2014/04/02/16/30/cake-307466_1280.png","Pinkcake.png", "cococake.png"]
var speed = 1;
function bake() {
    document.getElementById('cost').innerHTML = speed * 10;
    document.getElementById('costO').innerHTML = ovens+1 * 100;
    cakes+= speed;
    document.getElementById('cakes').innerHTML = cakes.toString()+ ' moolahs';
        var randomNumber = Math.random() * 100;
        if (randomNumber < bakeThreshold) {
            if (cakes % 2 == 0) {
                document.body.style.backgroundColor = "brown";
            }
            else {
                document.body.style.backgroundColor = "chocolate";
            }
        }
        if (cakes >= (level+1)*100) {
            level++
            document.getElementById('audiotag2').play();
            if (cake == 2) {
                cake = -1;
            }
            cake+= 1;
            document.getElementById("cake").src = CakeImgs[cake];
        }
};
function faster() {
    if(cakes >= speed * 10 ) {
        document.getElementById('audiotag1').play();
        cakes-= speed * 10;
        speed++;
        document.getElementById('cost').innerHTML = speed * 10;
        document.getElementById('cakes').innerHTML = cakes.toString()+ ' moolahs';
        alert('You got a better chef!');
    }
    else {
        alert('Sorry! You need more cakes.');
    }
}
function MoreOvens() {
    ovens++
    document.getElementById('costO').innerHTML = Ovens * 100;
    Ovens();
}
function Ovens() {
    if(ovens > 0){
        var CurrentOvens = ovens;
        while(ovens = CurrentOvens) {
            setTimeout(bake(), ovens*1000);
        }
    }
}