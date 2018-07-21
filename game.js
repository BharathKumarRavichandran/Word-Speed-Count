var counter;
var date = new Date();
var d1;
var d2;
var i=0;
var len=0;//Paragraph's length by letter
var t=0;
var t1;
var t2;
var input = document.getElementById("input");
var sentences = new Array();
var stButton = document.getElementById("start");
var speedDisplay = document.getElementById("speedDisplay");
var speedDisplaySpan = document.getElementById("speedDisplaySpan");
var text = new Array();
var test = document.getElementById("test");
var timeDisplay = document.getElementById("timeDisplay");
var timeDisplaySpan = document.getElementById("timeDisplaySpan");
var timerText = document.getElementById("timerText");
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;

sentences = ['Lines of weeds criss-crossed the cracked parking lot of the Seashell Motor Courts. The flaking paint on the buildings had chalked to a pastel pink on walls covered with graffiti.','Many of the windows had been smashed out. Where the sign had been, atop rusting steel posts, only the metal outline of a seashell remained.','It was Ms. Fitzhugh. She was walking fast. A strange expression crossed the faces of the students as they glanced toward the door and saw the principal go straight into the boys restroom.','There was a deep, throaty sound difficult to describe. Then came an eruption of shrill screaming and a rapid sound of heels. Moments later, Ms. Fitzhugh emerged, her eyes wild.','Above ground was the medieval settlement of Skaars Outpost, originally a fort to guard the cave entrance. Its inception as a town had been in the lodging and supply needs of explorers there to attempt the subterranean labyrinth when it had opened as a commercial venture.','When at last he saw her, a Wednesday mornings rain dripped from the maples, and what the sleepless nights had rehearsed flew out of his mind, leaving him empty and lost.','As though part of his soul had been torn out and fashioned into the dark-haired woman who wore a raincoat and held an umbrella, who hesitated on the steps then slowly approached him, reading in his eyes the words he could never have found to say.','An hour and a few lines had passed, the wind picked up. I noticed the roll of dark clouds ahead and decided to pack up before I get caught in what looked like a heavy downpour. As I grabbed my guitar, I spotted a man, sitting a few meters away from me.','Jeffrey fumbled his fingers atop the shelf, his legs straining and almost stumbling down the ladder. With urgent eyes Harriet with her flashlight begged her to finish what he was looking for.','I always thought rain was like that, so wonderful and fresh and exciting and romantic. At least, up until I found my boyfriend dead on the pavement in the middle of a thunderstorm three days before my birthday.','He did not like staring into the barrel of a big pistol. He did not like the looks of the tall man with the moustache. Something about the smug glint of satisfaction in his wifes eyes as her finger caressed the trigger bothered him, as well.','You could imagine leaning in closer to him with the roaring of the storm in your ears and smelling damp earth on him and kissing, with rain pattering relentlessly on top of the two of you, while the wind blew and you both froze. But it would be alright.','As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There is not much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and do not give a good representation of actual typing speed and accuracy.','Matty lies before a pony. Matty studies. The brick interrupts a pony after the bush menu. Outside a pony fasts the leaved rip. How does Matty transmit a pony? The dictionary hacks a pony past his blatant cook.']

stButton.style.marginLeft = (w-40)+'px';
speedDisplay.style.marginLeft = (w-130)+'px';
timeDisplay.style.marginLeft = (w-130)+'px';

text = sentences[Math.floor(Math.random()*14)];
document.getElementById("para").innerHTML = text;

function startTimer(){
  counter = 4;
  len = text.length; 
  
  setInterval(function() {
    counter--;
    if (counter >= 1) {
      timerText.innerHTML = counter;
      test.style.backgroundColor = "yellow";
    }
    if(counter == 0){
    	timerText.innerHTML = "Go!"
      test.style.backgroundColor = "orange";
    }
    if(counter == -1){
    	timerText.innerHTML = "";
    	input.disabled = false;
    	d1 = date.getTime();
    }
    if(counter < -1){
    	clearInterval(counter);
    	return;
    }
  }, 1000);
}
    
function wordCheck(){ 
          if(i==0){
            d1 = new Date();
            t1 = d1.getTime();
          }

          d2 = new Date();
          t2 = d2.getTime();
          t=t2-t1;// Time taken in milliseconds
          timeDisplaySpan.innerHTML = t/1000+" seconds";
          
          if(input.value[i] == text[i]){
            i++;
            test.style.backgroundColor = "green";
          }
          else{
            test.style.backgroundColor = "darkred";
          }
          if(i==len){
            d2 = new Date();
            t2 = d2.getTime();
            t=t2-t1;// Time taken in milliseconds
            speedDisplaySpan.innerHTML = ((Math.round((len*1000/t)*10))/10)+" character/second";
            test.style.backgroundColor = "blue";
            input.disabled=true;
            input.value="Successfully completed!";
          }
}      