export class Tamagotchi {
  constructor(){
    this.foodLvl = 5; // between 15 and 20
    this.happyLvl = 5;
    this.healthLvl;
    this.screen = "default";
    this.canFeedSnax = true;
    this.canFeedMeelz = true;
  }

  hearts(){
    this.health();
    const heartIcon = '<i class="fa fa-heart"></i>';
    $('.happiness-scale').text("");
    for (var i = 0; i < this.healthLvl; i++) {
      $('.happiness-scale').append(heartIcon);
    }
  }


  time(){

    this.hearts();
    if (this.healthLvl <= 10) {
      console.log("Feed or play with me, please.");
    }
    setInterval( () => {
      this.foodLvl -= 1;
      this.happyLvl -= 1;
      this.hearts();
      console.log(this.healthLvl);
      if (this.healthLvl <= 10) {
        console.log("Feed or play with me, please.");
      }
      console.log(this.foodLvl);
      console.log(this.happyLvl);
    }, 10000);
  }

  feedMe(whatFood){

    if (whatFood === 1 && this.canFeedSnax === true){
      this.foodLvl += 5;
      this.canFeedSnax = false;
      setTimeout(() => {
        this.canFeedSnax = true;
      }, 10000);
    } else if (whatFood === 2 && this.canFeedMeelz === true){
      this.foodLvl += 10;
      this.canFeedMeelz = false;
      setTimeout(() => {
        this.canFeedMeelz = true;
      }, 30000);
    } else {
      alert('Please select fuud for your tamagotchi!');
    }

  }

  letsPlay(){
    this.happyLvl += 5;
  }

  health(){
    let status = this.foodLvl + this.happyLvl;
    console.log(status);
    this.healthLvl = status;
  }

}
