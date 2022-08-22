function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Xn_E1066G/model.json' , modelReady); 
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error , results)
   {
    if (error){
    console.error(error)
    
    }
    else{
        console.log(results)
        random_number_r  = Math.floor(Math.random() *255) + 1;
        random_number_g  = Math.floor(Math.random() *255) + 1;
        random_number_b  = Math.floor(Math.random() *255) + 1;
    
        document.getElementById("result_label").innerHTML = 'i can Hear - '+ 
        results[0].label
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
    
        img = document.getElementById('cat')
        img1 = document.getElementById('dog')
        img2 = document.getElementById('cow')
        img3 = document.getElementById('roar')
    
        img = document.getElementById("ear")

        if(results[0].label == "cat") {
            img.src = 'cat.png'
           
        }
        else if(results[0].label == "dog") {
            img.src = 'dog.png'
           
        }
        else if(results[0].label == "moo") {
            img.src = 'cow.jpg'
           
        }
         else if(results[0].label == "roar") {
            img.src = 'lion.jpg'
           
        }
        else{
            img.src = 'ear.png'
        }
    }
}