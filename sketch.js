function setup()
{
	createCanvas(647,664);
    background(215,208,193);
}

function draw()
{
    //Teal Rectangle
	noStroke();
	fill(97,149,134,150);
    beginShape();
	vertex(120,0);
    vertex(218,0);
    vertex(647,390);
    vertex(647,637);
    endShape();
    
    //Yellow circles
    stroke(175,152,100);
    strokeWeight(0.5);
    fill(227,201,88,180);
    ellipse(255,355,150,150);  
    ellipse(384,475,17,17);

    //Pink Circles
    stroke(0);
    strokeWeight(1);
    fill(234,184,183,150);
    ellipse(252,197,128,128);
    strokeWeight(2);
    ellipse(355,523,33,33);
    noStroke();
    
    //Khaki Rectangle-ish Shape
	fill(204, 163, 104, 180);
    beginShape();
	vertex(0,487);
    vertex(0,664);
    vertex(53,664);
    vertex(690,0);
    vertex(641,0);
    endShape();
    
    //Main Unfilled Elipse
    stroke(0)
    strokeWeight(20);
    noFill()
    ellipse(329,312,580,580);
    
    //Forest Green circle
    noStroke();
    fill(82,84,59,200);
    ellipse(310,343,190,190);
    
    //Red circles
    stroke(124,47,55);
    strokeWeight(1);
    fill(168,20,33,190);
    ellipse(327,382,15,15);
    ellipse(331,224,100,100);
    stroke(0)
    strokeWeight(2);
    fill(168,20,33,150);
    ellipse(245,421,60,60);
    ellipse(298,86,15,15);
    strokeWeight(5);
    ellipse(135,300,30,30);
    strokeWeight(0.5);
    ellipse(310,450,10,10);
    
    //Orange Circles
    strokeWeight(3.5);
    fill(221,95,55,200);
    ellipse(298,294, 70, 70);
    stroke(154,92,53);
    strokeWeight(1);
    ellipse(143,465, 38,38);
    
    
    //Teal Circles
    stroke(16,84,71,100);
    strokeWeight(0.5);
    fill(33,109,94,100);
    ellipse(433,300,150,150);
    fill(97,149,134,100);
    ellipse(250,258,75,75);
    stroke(0);
    strokeWeight(3.5);
    ellipse(180,378,50,50);
    
    //Additional Yellow circle
    strokeWeight(1);
    fill(227,201,88,100);
    ellipse(408,401,100,100);  
    
    //Purple Cicles
    fill(117,65,85,150);
    ellipse(502,462,25,25);
    noStroke();
    ellipse(445,186,76,76);
    
    //Blue Circles
    stroke(10,65,71,100);
    strokeWeight(1);
    fill(4,81,120,100);
    ellipse(498,308,57,57)
    stroke(0);
    strokeWeight(2.5);
    ellipse(102,371,15,15);
    
    //Black Circles
    noStroke();
    fill(0);
    ellipse(298,294,18,18);
    ellipse(392,207,40,40);
    ellipse(441,261,28,28);
    ellipse(438,433,30,30);
    ellipse(268,463,8,8);
    
    //Lines
    stroke(0);
    
    strokeWeight(3);
    line(474,203,477,470);
    strokeWeight(2);
    line(148,164,536,228);
    line(210,518,456,108);
    line(85,324, 543,416);
    line(495,231,469,231);
    line(503,240, 469,242);
    
    strokeWeight(1);
    line(147,408,357,137);
    line(115,349,298,178);
    line(354,172,329,139);
    line(360,161,339,131);
    line(92,260,520,375);
    line(535,375,193,125);
    line(182,516,242,429);
    line(123,351,442,518);
    line(397,528,461,132);
    line(156,491,281,470);
    line(186,461,279,510);
    
    strokeWeight(0.25);
    line(170,512,246,408);
    line(116,382,508,426);
    line(408,548,473,123);
    line(391,515,432,263);
    line(372,503,433,465);
    line(378,512,436,475);
    line(383,520,441,483);
    line(522,391,90,272);
    line(520,375,94,261);
    line(118,248,91,293);
    line(129,250,98,290);
    line(166,268,156,305);     
    
}