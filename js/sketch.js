function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}



function draw() {
    background(220);

    if (mouseX < width/2){
    // console.log('LEFT') //wrie something in console
    fill( 238, 242, 9)
    circle(200, 200, 60);

    fill( 0)
    circle(190, 190, 5);

    fill( 0)
    circle(210, 190, 5); 

    fill (0)
    arc(200, 210, 25, 25, 25,  PI, TWO_PI );

    }
    
    if (mouseX > width/2){
        fill( 242, 9, 9)
        circle(200, 200, 60);
    
        fill( 0)
        circle(190, 190, 5);
    
        fill( 0)
        circle(210, 190, 5); 

      fill (0)
    arc(200, 210, 25, 25, 25,  PI, TWO_PI );
    // console.log('RIGHT') //wrie something in console
    
    // text('RIGHT', 200, 200)
    } 
    // fill(255, 255, 255);
    // ellipse(400, 400, 200);
}