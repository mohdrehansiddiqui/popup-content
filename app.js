function modal(){
    var content = document.getElementById('content')
    content.innerHTML="<button class='cancel'onclick=cancel()>X</button><p class='p-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem fugiat omnis ducimus ab ipsam dolorum quia voluptatibus mollitia alias natus sapiente, doloremque deserunt excepturi id. Fugit harum sit tenetur.</p><br><br>"
    content.style.backgroundColor = 'red'
    content.style.color = 'white'
  
    
    // contentNew.appendChild('content')
    // content.appendChild('btn')
    // btn.setAttribute('onclick','btnn(this)')
    
    
}
function cancel(){
    var content = document.getElementById('content')
    content.innerHTML = ''
}
// function btnn(){
//     var btnn = document.onclick('btn').pop('content')
//     content.innerHTML = ''
// }

function modal2(){
    var content2 = document.getElementById('content')
    content2.innerHTML="<button class='cancel' onclick=cancel()>X</button><p class='p-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem fugiat omnis ducimus ab ipsam dolorum quia voluptatibus mollitia alias natus sapiente, doloremque deserunt excepturi id. Fugit harum sit tenetur.</p><br><br>"
    content2.style.backgroundColor ='red'
    content2.style.color ='white'
}
function cancel2(){
    var content2 = document.getElementById('content')
    content2.innerHTML = ''
}

function modal3(){
    var content3 = document.getElementById('content')
    content3.innerHTML="<button class='cancel' onclick=cancel()>X</button><p class='p-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem fugiat omnis ducimus ab ipsam dolorum quia voluptatibus mollitia alias natus sapiente, doloremque deserunt excepturi id. Fugit harum sit tenetur.</p><br><br>"
    content3.style.backgroundColor ='red'
    content3.style.color ='white'
}
function cancel3(){
    var content3 = document.getElementById('content')
    content3.innerHTML = ''
}