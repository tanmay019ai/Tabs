const tabs=document.querySelectorAll(".tab");
const content1=document.querySelector(".content1");
const content2=document.querySelector(".content2");
const content3=document.querySelector(".content3");
const content4=document.querySelector(".content4");
const change=(id)=>
    {
        if(id==="tab1")
            {
                content1.style.display='block';
                content2.style.display='none';
                content3.style.display='none';
                content4.style.display='none';
            }
         else if(id==="tab2")
            {
                content1.style.display='none';
                content2.style.display='block';
                content3.style.display='none';
                content4.style.display='none';
            }
            else if(id==="tab3")
                {
                    content1.style.display='none';
                    content2.style.display='none';
                    content3.style.display='block';
                    content4.style.display='none';
                }
                else
                {
                    content1.style.display='none';
                    content2.style.display='none';
                    content3.style.display='none';
                    content4.style.display='block';
                }
    };
tabs.forEach((tab)=>
    {
      tab.addEventListener("click",()=>
        {
         const id=tab.getAttribute("id");
         change(id);
        })
    })