class launcher
{
	constructor(body,anchor)
	{
		var options={

		 bodyA: body, 
         pointB: anchor,
         stifness: 0.004,
         lenght: 1
			}
		this.bodyA = body;
		this.pointB = anchor;
        this.launcher = Constraint.create(options);

 		World.add(world, this.launcher);

	}

    attach(body){
        this.launcher.bodyA = body; 
    }

    fly(){
      this.launcher.bodyA = null;
    }

	display()
	{
        if(this.launcher.bodyA){
            var x1y1 = this.bodyA.position;
            var x2y2 = this.pointB
            
			
            strokeWeight(4);
            line(x1y1.x,x1y1.y,x2y2.x,x2y2.y)
        }
			
			
	}

}
