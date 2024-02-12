fetch('https://santosnr6.github.io/Data/dogs.json')

    .then(response => response.json())
    .then(data => {
        data.forEach(dog => {
            console.log(dog);
            const dogName = document.createElement('p');
            dogName.textContent = dog.name;
            document.body.appendChild(dogName);
        });
    })

