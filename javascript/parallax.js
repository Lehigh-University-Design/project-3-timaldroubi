window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax');
    let children = parent.getElementsByTagName('div');
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

   


}
, false)

