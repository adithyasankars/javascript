<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Coffee and Chaya</h1>
    <button id="stop">STOP</button>
    
</body>
<script>
    // setTimeout(function (){
    //     console.log("Adithya Sankar S");
    // },2000);

    const sayAdithya = function(){
        console.log("Adithya Sankar S");
    }

    const changeHeading = function(){
        document.querySelector('h1').innerHTML = "the never ending learning curve ....!!!"

    
    }

    setTimeout(changeHeading,3000);

    const changeMe = setTimeout(sayAdithya,2000);

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe);
        console.log("STOPPED");
        
    })


</script>
</html>