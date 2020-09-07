
const element = document.querySelector('.task-status');

hendle =()=>{
    if(element.checked == true){
        console.log(
        'This is a true'
        )}else
            {console.log('This is a false')
        }
    }


element.addEventListener('change', hendle)