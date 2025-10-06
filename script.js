const pass = document.getElementById('password');
const msg = document.getElementById('msg');
const str = document.getElementById('strength');
const copied = document.getElementById('copied');
const copy = document.getElementById('copy');

pass.addEventListener('input', ()=>{
    if(pass.value.length > 0){
        msg.style.display = 'block';
    }
    else{
        msg.style.display = 'none';
    }

    if(pass.value.length <4){
        str.innerHTML = 'Weak';
        pass.style.borderColor = '#ff5925'
        msg.style.color = '#ff5925';
    }
    else if (pass.value.length >=4 && pass.value.length <8){
        str.innerHTML ='medium';
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    }
    else if(pass.value.length>=8){
        str.innerHTML = 'strong';
        pass.style.borderColor = '#26d730';
        msg.style.color = '#26d730';
    }
})

copy.addEventListener('click',()=>{
    if(pass.value.trim() !== ''){
        navigator.clipboard.writeText(pass.value)
        .then(()=>{
            copied.style.display = 'block';
            copied.innerHTML = 'Copied!';
            copied.style.color = '#26d730'
            setTimeout(() => {
                copied.style.display ='';
            }, 2000);
        })
        .catch(err => console.error('Copy Failed:', err));
    }
    else{
        copied.innerHTML = 'Nothing to copy';
        copied.style.color = '#ff5925'
        copied.style.display = 'block';
        setTimeout(() => {
            copied.style.display = '';
        }, 2000);
    }
})
