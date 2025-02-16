// let Form = document.getElementById('form');
let Name = document.getElementById('name');
let Email = document.getElementById('email');
let Age = document.getElementById('age');
let Pass = document.getElementById('pass');
let Cpass = document.getElementById('cpass');
let Sbutton = document.getElementById('sbutton');

Sbutton.addEventListener('click',function(){
    if(Name.value ===''){
        alert('name cannot be null');
        return false;
    }
    if(Email.value === ''){
        alert('email cannot be null');
        return false;
    }
    if(Age.value === ''){
        alert('age cannot be null');
        return false;
    }
    if(Pass.value === ''){
        alert('pass cannot be null');
        return false;
    }
    if(Cpass.value === ''){
        alert('cpass cannot be null');
        return false;
    }
   if(CPass.value!=Pass.value){
        alert('CPass can not be match with pass.');
        return false;
    }
})

document.getElementById('select-image-btn').addEventListener('click', function() {
    document.getElementById('image-input').click();
});
  
document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('selected-image');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
