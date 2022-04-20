function showBoats(){
    if(boats.length > 0){
      if(boats[length - 1].body.position.x < width - 300  && boats.length < 5){
        var p = [-130, -100, -120, -80, -60];
        var position = random(p)
        var boat = new Boat(width, height - 100, 200, 200, position);
        boats.push(boat);
      }
  
      //velocidade dos barquinhos
      for(var i = 0; i < boats.length; i++){
        Matter.Body.setVelocity(boats[i].body,
           {x: -1, y: 0});
        boats[i].display();
      }
    }
  
    else{
      var boat = new Boat(width, height - 100, 200, 200, -100);
      boats.push(boat);
    }
  }