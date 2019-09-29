$(document).ready(function() { 
    console.log('Script Loaded')

    $('#todos-wrapper').click(function(e){
        let storedtodolist=getlistfromlocalstorage();
        if(storedtodolist.length<=0)
        {
          $('#no-todos').css('display','flex')
        }
        else
        {
            storedtodolist.map((item,pos)=>
            {
                let newelement=createtodolistdynamically(item,pos);
                console.log(newelement)
                $('#todo-list-wrapper').append(newelement)
            })
            $('#todo-list').css('display','block')
        }
    })
    $('#add-first-todo').click(function(e){
        $('#todo-list').css('display','block');
        $('#no-todos').css('display','none');
    })
    
    var today=new Date();
    console.log(today)
    var time=document.getElementById('time')
    //console.log(time)
    if(today.getHours()<10 && today.getMinutes()<10)
    {
        var hour=`0${today.getHours()}`;
        var min=`0${today.getMinutes()}`;
        console.log(hour)
        console.log(min)
        time.innerHTML=`${hour}:${min}`;
    }
    else if(today.getMinutes()<10)
    {
        var min=`0${today.getMinutes()}`
        time.innerHTML=`${today.getHours()}:${min}`;
    }
    if(today.getHours()<10)
    {
        var hour=`0${today.getHours()}`
        time.innerHTML=`${hour}:${today.getMinutes()}`;
    }
    else
    {
        time.innerHTML=`${today.getHours()}:${today.getMinutes()}`;
    }
    if(today.getHours()>=5 && today.getHours()<12)
    {
    var good=document.getElementById('goodDash')
    good.innerHTML=`Good Morning,<span id="first-name">Qaifi</span>`
    $('#weather-image').attr('src','https://s3.envato.com/files/170599664/City_Background_Ny_Night_1024x512.png')
    }
    else if(today.getHours()>=12 && today.getHours()<18)
    {
        var good=document.getElementById('goodDash')
        good.innerHTML=`Good Afternoon,<span id="first-name">Qaifi</span>`
        $('#weather-image').attr('src','https://img.pixers.pics/pho_wat(s3:700/FO/22/30/69/52/700_FO22306952_69a91915dba028a1a3b044ecabed6310.jpg,700,454,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,404,jpg)/stickers-sunny-sky-background.jpg.jpg') 
    }
    else if(today.getHours()>=18 && today.getHours()<20)
    {
        var good=document.getElementById('goodDash')
        good.innerHTML=`Good Evening,<span id="first-name">Qaifi</span>` 
        $('#weather-image').attr('src','https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_611,q_75,w_977/v1/clients/pwmva/Leesylvania_Sunset_69fdaef2-f41f-4e25-b293-4de4ae0b4539.jpg')
    }
    else if((today.getHours()>=20 )||(today.getHours()>=0 && today.getHours()<5))
    {
        var good=document.getElementById('goodDash')
        good.innerHTML=`Good Night,<span id="first-name">Qaifi</span>` 
        $('#weather-image').attr('src','https://www.thenextad.com/site/assets/files/1710/landscape-sky-night-stars-29435.jpg')
    }
    //var todo=document.getElementById('todo-list-wrapper')
    //console.log(todo)
    function getlistfromlocalstorage(){
        let storedtodolist=localStorage.getItem('todo-list');
            storedtodolist = storedtodolist !== null && storedtodolist !== undefined?storedtodolist:[];
            return storedtodolist;
    }
    $('#new-todo').keyup(function(e) {
        if(e.keyCode === 13) 
        {
            console.log(e.target.value)
            let storedtodolist=getlistfromlocalstorage();
            
            let todocount=0;
            if(storedtodolist.length>0)
            {
                todocount=storedtodolist.length;
            }
            const currentlist0bj={
                id: todocount+1,
                checked: false,
                label: e.target.value
            }
            storedtodolist.push(currentlist0bj)
            localStorage.setItem('todo-list',JSON.stringify(storedtodolist));
            const newlycreatedtodo=createtodolistdynamically(currentlist0bj);
            $('#todo-list-wrapper').append(newlycreatedtodo);
            $(this).val('');
        }
    })
    function createtodolistdynamically(obj,pos)
        {
            var todoItem=document.createElement('div')
            todoItem.className='todo-item'
            var labele=document.createElement('label')
            var icon=document.createElement('i')
            icon.className="far fa-trash-alt delete-icon"
            var inputi=document.createElement('input')
            inputi.type='checkbox';
            var newlist=document.createElement('p')
            newlist.className='todo-text';
            if(obj.checked)
            {
                newlist.checked=true;
                newlist.classlist.add('todo-item-completed')
            }
            newlist.innerHTML=obj.label;
            inputi.onchange=function(e){
                console.log(e.target.checked)
               let chkstate=e.target.checked;
               let storedtodolist=getlistfromlocalstorage()
               if(chkstate)
                {
                   newlist.classlist.add('todo-item-completed')
                   console.log(storedtodolist[pos])
                   storedtodolist[pos].checked=true;
                }
                else
                {
                    newlist.classlist.remove('todo-item-completed')
                    console.log(storedtodolist[pos])
                    storedtodolist[pos].checked=false;
                }
                localStorage.setItem('todo-list',JSON.stringify(storedtodolist))
            }
            //todo.appendChild(todoItem)
            todoItem.appendChild(labele)
            todoItem.appendChild(icon)
            labele.appendChild(inputi)
            labele.appendChild(newlist)
            return todoItem;
        }
   
    const fullName = localStorage.getItem('full-name');

    if(fullName !== null && fullName !== '') {
        $('#name-input-wrapper').css('display', 'none');
        $('#todo-input-wrapper').css('display', 'block');
        $('#first-name').html(fullName);
    }

    $('#name-input').keyup(function(e) {
        if(e.keyCode === 13) {
            localStorage.setItem('full-name', e.target.value);

            $('#name-input-wrapper').css('display', 'none');
            $('#todo-input-wrapper').css('display', 'block')
            $('#first-name').html(e.target.value)
        }
    })

    $('#major-todo').keyup(function(e) {
        if(e.keyCode === 13) {
            localStorage.setItem('major-todo', e.target.value);

            $('#major-todo-wrapper').css('display', 'none');
            $('#major-todo-item').css('display', 'block');

            console.log(e.target.value);
            console.log($('#todo-text'));

            $('#major-todo-label').html(e.target.value)
        }
    })

    $('#major-todo-checkbox').change(function(e) {
        $('#major-todo-label').toggleClass('todo-item-completed')
    })
});
