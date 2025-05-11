const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
    const wrapper = document.getElementById('text');
    wrapper.classList.toggle('hidden');
    wrapper.classList.contains('hidden') ? button.textContent = 'Show' : button.textContent = 'Hide';
    console.log('wrapper',wrapper);
})

