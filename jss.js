var init={
    level : 1 ,
    score : 0 , 
    time : 60 , 
    n : 0 ,
    t : 0,
    img_card_back : '/img/card-back.jpg' , 
    imglist: [   
        '/img/game1.jpg',
        '/img/game2.jpg',
        '/img/game1.jpg',
        '/img/game2.jpg'
    ] , 
    new_imglist : [

    ] , 
    clicked_img : [

    ] ,
    clicked_list : [

    ]
}
var init_change=init;
document.getElementById('score').innerHTML=init_change.score
document.getElementById('lvl').innerHTML=init_change.level
document.getElementById('time').innerHTML=init_change.time
// document.getElementById('gameaudio').play();
const page = (x)=>{
    if(x=='menu'){
        document.getElementById('menu').hidden=false
        document.getElementById('info_post').hidden=true
        document.getElementById('game').hidden=true
        document.getElementById('terminer').hidden=true
        document.getElementById('time_over').hidden=true
    }
    if(x=='info_post'){
        document.getElementById('info_post').hidden=false  
    }
    if(x=='info_post_n'){
        document.getElementById('info_post').hidden=true  
    }
    if(x=='game'){
        document.getElementById('menu').hidden=true
        document.getElementById('info_post').hidden=true
        document.getElementById('game').hidden=false
        document.getElementById('terminer').hidden=true
        document.getElementById('time_over').hidden=true
    }
    if(x=='terminer'){
        document.getElementById('menu').hidden=true
        document.getElementById('info_post').hidden=true
        document.getElementById('game').hidden=true
        document.getElementById('terminer').hidden=false
        document.getElementById('time_over').hidden=true
    }
    if(x=='time_over'){
        document.getElementById('menu').hidden=true
        document.getElementById('info_post').hidden=true
        document.getElementById('game').hidden=true
        document.getElementById('terminer').hidden=false
        document.getElementById('time_over').hidden=true
    }
}
page('menu')
document.getElementById('play').addEventListener('click',e=()=>{page('game')})
document.getElementById('i').addEventListener('click',e=()=>{page('info_post')})
document.getElementById('close').addEventListener('click',e=()=>{page('info_post_n')})

const aléa=(imglist,new_imglist)=>{
    for (i=1;i<5;i++){
        ran=Math.floor(Math.random()*(5-i))
        new_imglist.push(imglist[ran])
        imglist.splice(ran, 1)
    }return new_imglist
}
const play=()=>{
    init_change=init;
    init_change.new_imglist=aléa(init_change.imglist,init_change.new_imglist);
}
play()
const test = (i)=>{
    if (i.n==2){
        if(i.clicked_img[0]==i.clicked_img[1]){
            console.log(i.clicked_list)
            console.log(i.clicked_img)
            console.log(i.n)
            i.clicked_img=[]
            document.getElementById(i.clicked_list[0]).hidden=true
            document.getElementById(i.clicked_list[1]).hidden=true
            i.clicked_list=[]
        }else{
            console.log(i.n)
            i.clicked_img=[]
            console.log(i.clicked_list)
            i.n=0
            document.getElementById(i.clicked_list[0]).src=i.img_card_back    
            document.getElementById(i.clicked_list[1]).src=i.img_card_back
            i.clicked_list=[]
        }
    }
    if(i.n==4){
        page('terminer')
    }
}

// 
document.getElementById('1').onclick=function(){
    document.getElementById('1').src=init_change.new_imglist[0]
    init_change.clicked_img.push(init_change.new_imglist[0])
    document.getElementById('1').disabled=true
    init_change.clicked_list.push(1)
    init_change.n++
    init_change.t++
    test(init_change)
}
document.getElementById('2').onclick=function(){
    document.getElementById('2').src=init_change.new_imglist[1]
    init_change.clicked_img.push(init_change.new_imglist[1])
    document.getElementById('2').disabled=true
    init_change.clicked_list.push(2)
    init_change.n++
    init_change.t++
    test(init_change)
}
document.getElementById('3').onclick=function(){
    document.getElementById('3').src=init_change.new_imglist[2]
    init_change.clicked_img.push(init_change.new_imglist[2])
    document.getElementById('3').disabled=true
    init_change.clicked_list.push(3)
    init_change.n++
    init_change.t++
    test(init_change)
}
document.getElementById('4').onclick=function(){
    document.getElementById('4').src=init_change.new_imglist[3]
    init_change.clicked_img.push(init_change.new_imglist[3])
    document.getElementById('4').disabled=true
    init_change.clicked_list.push(4)
    init_change.n++
    init_change.t++
    test(init_change)
}
// 
console.log(init_change.new_imglist)
function replay(){
    window.location.reload();
}
document.getElementById('replay').addEventListener('click',replay)