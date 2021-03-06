function Cell(pos, r, c) {

	if(pos){
		this.pos = pos.copy();
	} else {
		this.pos = pos || createVector(random(width),random(height));
	}
	
	this.r = r || 40;
	this.c = c || color(random(100,255), 0, random(100,255), 200);

	this.move = function(){
		var vel = p5.Vector.random2D();
		this.pos.add(vel);
	}

	this.show = function(){
		fill(this.c);
		noStroke();
		ellipse(this.pos.x,this.pos.y,this.r,this.r)
	}

	this.clicked = function(x,y){
		var d  = dist(this.pos.x,this.pos.y,x,y)
		return(d < this.r);
	}

	this.mitosis = function(){	
		this.pos.x += random(-this.r, this.r);
		var cell = new Cell(this.pos, this.r/sqrt(2), this.c);
		return cell;
	}
}
