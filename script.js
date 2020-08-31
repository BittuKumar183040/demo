let clicker=document.querySelector('.navLines');
let menu=document.querySelector('.showhide');

let menuItem=document.querySelectorAll('.menuBoxLink');

clicker.addEventListener('click',function()
{
    if(menu.style.display==='')
    {
        menu.style.display="block";
    }
    else if(menu.style.display==='none')
    {
        menu.style.display="block";
    }
    else if(menu.style.display==="block")
    {
        menu.style.display='none';
    }

    
    for(let i=0;i<=menuItem.length;i++)
    {
        menuItem[i].addEventListener('click',function()
        {
            menu.style.display='none';
        });

    }
});





