

window.onscroll=function(){
    let oHeader=document.getElementById('header');
    let topScroll = document.documentElement.scrollTop;

    if (topScroll>220)
    {
        oHeader.style.display ='block';
    }
    else{
        oHeader.style.display = 'none';
    }
}



window.onload = function () {
   

    let oMname = document.querySelector('#mname');
    let oMusic = document.querySelector('#music');
    let oMback = document.querySelector('#Mback');
    let oMnext = document.querySelector('#Mnext');


    let marr = [
                '花粥 - 略略略.flac',
                '花粥 - 一腔诗意喂了狗.flac',
        ];

       
 let num = 0;    
        oMback.addEventListener('click',function () { 
            num = (num + (marr.length - 1)) % marr.length;
            oMusic.src = 'audio/' + marr[num];
            oMname.innerHTML = marr[num];
        });

        oMnext.addEventListener('click',function () { 
            num = (num + 1) % marr.length;
            oMusic.src = 'audio/' + marr[num];
            oMname.innerHTML = marr[num];
        });

        oMusic.addEventListener('ended',function () { 
            setTimeout(() => {
                num = (num + 1) % marr.length;
                oMusic.src = 'audio/' + marr[num];
                oMname.innerHTML = marr[num];
            }, 2400);

        }, false);



        let oAudio = document.querySelector('#audio');
        let oMdp = document.querySelector('#mdp');
        let  timers=null;

        oAudio.addEventListener('mouseenter',function () { 
            mpd(0);
         });

        oAudio.addEventListener('mouseleave',function () { 
            mpd(-290);
         });

        function mpd(iTarget){  
            clearInterval(timers);
            
            timers=setInterval(function () {
            
            let speed=null;
            if (oAudio.offsetLeft > iTarget){
                    speed= -10;
                }
            else{
                speed = 10;
            }

            if (oAudio.offsetLeft == iTarget){
                    clearInterval(timers);
                }
            else{
                oAudio.style.left = oAudio.offsetLeft + speed+'px';
            }
                console.log(oAudio.offsetLeft);
            },30);
        }
}

