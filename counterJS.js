const second = 100,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

        
 let x = setInterval(function () {
        countDown = new Date();
        distance = countDown;
        //displaying the seconds
        getSecs=countDown.getSeconds();
        let second1=-1, second2=-1
        second1=Math.floor(getSecs/10);
        second2=Math.floor(getSecs%10);
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[4];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(second1, dummy1, dummy2,secondsFirstDigit)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[5];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(second2, dummy1, dummy2,secondsFirstDigit)

        //displaying the minutes
        getMinutes=countDown.getMinutes();
        minute1=Math.floor(getMinutes/10);
        minute2=Math.floor(getMinutes%10);
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[2];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(minute1, dummy1, dummy2,secondsFirstDigit)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[3];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(minute2, dummy1, dummy2,secondsFirstDigit)

        //displaying the hours
        getHours=countDown.getHours();

        hour1=Math.floor(getHours/10);
        hour2=Math.floor(getHours%10);
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[0];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(hour1, dummy1, dummy2,secondsFirstDigit)
        secondsFirstDigit=document.getElementsByClassName("days7")[0].getElementsByClassName("digit")[1];
        dummy1=secondsFirstDigit.getElementsByClassName("digit-inner")[0]
        dummy2=secondsFirstDigit.getElementsByClassName("digit-inner-lower")[0]
        displayDigit(hour2, dummy1, dummy2,secondsFirstDigit)
    }, second)
    function displayDigit(digit, dummy1, dummy2,secondsFirstDigit)
    {
        secondsFirstDigit.style.border="none"
        switch(digit)
        {
            case 0:dummy1.style.border="0.5em solid white";
                   dummy1.style.borderBottom='none'
                   dummy2.style.border="0.5em solid white";
                   dummy2.style.borderTop="none"; break;         
            case 1: secondsFirstDigit.style.border="0.6em solid transparent";
                    dummy1.style.border="none";
                    dummy1.style.borderRight='0.5em solid white';
                    dummy2.style.border="none";
                    dummy2.style.borderRight="0.5em solid white"
                    dummy2.style.borderBottom="0.5em solid transparent"
                    break;
            case 2: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderLeft='none'
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderRight="none";
                    dummy2.style.borderTop="none"; break; 
            case 3: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderLeft='none';
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; break; 
            case 4: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderTop='none';
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; 
                    dummy2.style.borderBottom="none"; 
                    break; 
            case 5: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderRight='none';
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderLeft="none";
                    dummy2.style.borderTop="none"; break;
            case 6: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderRight='none';
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderTop="none"; break;
            case 7: dummy1.style.border="0.5em solid white";
                    dummy1.style.borderLeft='none';
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderTop="none"; 
                    dummy2.style.borderLeft='none'
                    dummy2.style.borderBottom='none'
                    break;
            case 8: dummy1.style.border="0.5em solid white";
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderTop="none"; 
                    break;
            case 9: dummy1.style.border="0.5em solid white";
                    dummy2.style.border="0.5em solid white";
                    dummy2.style.borderTop="none";
                    dummy2.style.borderLeft="none";
                    break;

        }

    }