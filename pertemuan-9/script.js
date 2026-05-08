let btn_add = document.getElementById("btn-add");
let btn_remove = document.getElementById("btn-remove");
let btn_toggle = document.getElementById("btn-toggle");
let target = document.getElementById("target");

btn_add.addEventListener('click', () => {
  target.textContent =  ('button di clik');
  target.classList.add('success')
});
btn_remove.addEventListener('click', ()=>{
    target.textContent = ('button di remove');
    target.classList.remove('success');
});
btn_toggle.addEventListener('click', () =>{
    target.textContent = ('button togle di clik')
    target.classList.toggle('success');
})