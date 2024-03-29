const scoreApi=(credentials)=>{
    const sc=credentials.alcoholConsumption+credentials.bloodPressure+credentials.bmi+credentials.cholesterol+credentials.dietQuality+credentials.physicalActivity+credentials.sleepDuration+credentials.smokingStatus+credentials.stressLevels

    if(sc<=13){
      var randomNumber=Math.floor(Math.random() * (17 - 9 + 1)) + 9;
      return(credentials.age-((scaledNumber/100)*credentials.age))
    }else if(sc>=14 && sc<=19){
      return credentials.age
    }else if(sc>=20 && sc<=28){
      var randomNumber = Math.random();
      var scaledNumber = Math.floor(randomNumber * 7) + 2;
      return(credentials.age+((scaledNumber/100)*credentials.age))
    }else if(sc>=29 && sc<=36){
      var randomNumber=Math.floor(Math.random() * (17 - 9 + 1)) + 9;
      return(credentials.age+((randomNumber/100)*credentials.age))
    }else if(sc>=37 && sc<=45){
      var randomNumber=Math.floor(Math.random() * 11) + 25
      return(credentials.age+((randomNumber/100)*credentials.age))
    }else if(sc>=46 && sc<=55){
      const randomNumber = Math.floor(Math.random() * (45 - 35 + 1)) + 35;
      return(credentials.age+((randomNumber/100)*credentials.age))
    }else{
      const randomNumber = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
      return(credentials.age+((randomNumber/100)*credentials.age))
    }
  }

  module.exports=scoreApi
