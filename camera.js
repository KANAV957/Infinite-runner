class Camera{
    constructor(){}
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100)
        Trex.getTrexInfo();
    
        if(allTrex !== undefined){
          var index = 0
          var x = 0
          var y
          for(var plr in allPlayers){
           index = index+1 
           x = x+200
           y = displayHeight-allTrex[plr].distance
           trexes[index-1].x = x
           trexes[index-1].y = y
           if(index===player.index){
            trexes[index-1].shapeColor = "blue"
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y
           }
          }
        }
}
}