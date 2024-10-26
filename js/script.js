const navlink=document.querySelectorAll('.nav-link');

navlink.forEach(link => {
    link.addEventListener('click',function(){

        navlink.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    })
})

function showSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='flex';
}

function hideSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='none';
}


document.querySelector('.send').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page reload
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const scriptURL = 'https://script.google.com/macros/s/{AKfycbzsyHtqWEmeaVSIiUcwSU3o1_kj7ILSpOva1VMRD_fWDB77v0ZWNa_2AgjyJlbqHXDtEw}/exec';

    // Send data to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Important to set headers
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => response.json())  // Parse JSON response
    .then(response => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('There was an error submitting the form');
    });
}); 
