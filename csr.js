const No=document.getElementById('No');
function run_button(){
    y= Math.floor(Math.random()*600);
    x= Math.floor(Math.random()*200);
    No.style.left =`${x}px`;
    No.style.top =`${-y}px`;
}
No.addEventListener('mousemove',run_button)

let links = [
"se.html",
"se1.html",
"se2.html"
];
let link = document.getElementById('ran-link');

link.href = links[ Math.floor( Math.random() * links.length ) ];

link.addEventListener('click', function(){
link.href = links[ Math.floor( Math.random() * links.length ) ];
});