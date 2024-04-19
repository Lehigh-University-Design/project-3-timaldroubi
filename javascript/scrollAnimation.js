document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            console.log(entry.target); 
            if (entry.isIntersecting){
                if(entry.target.classList.contains('mononoke-parallax')){
                    let children = entry.target.getElementsByTagName('div')
                    for(let i = 0; i < children.length; i++) {
        
                        if(i==0){
                            children[i].style.transform = 'translateY(-' +(window.scrollY * .25) + 'px)';
                        }
                        else if(i==1){
                            children[i].style.transform = 'translateY(-' +(window.scrollY * .5) + 'px)';
                        }
                        else if(i == 2){
                            children[i].style.transform = 'translateY(-' +(window.scrollY * .75) + 'px)';
                        }
                        else if(i==3){
                            children[i].style.transform = 'translateY(-' +(window.scrollY) + 'px)';
                        }
                        
                    }
                    return
                }
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');

    allAnimatedElements.forEach((element) => observer.observe(element));
})