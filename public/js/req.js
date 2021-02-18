const url = 'https://www.potterapi.com/v1/';
const key = URL_KEY;

// get random houses
document.getElementById('sorting-hat-btn').addEventListener('click', () => {
    fetch(`${url}sortingHat`)
        .then((resp) => resp.json())
        .then((data) => {
            const sortingResult = document.getElementById('sorting-result');
            const resultDescription = document.getElementById('sorting-result-description');

            if (data == 'Slytherin') {
                sortingResult.style.color = '#005d4b';
                resultDescription.innerHTML = 'Slytherin students are typically cunning, ambitious and resourceful.';
            } else if (data == 'Ravenclaw') {
                sortingResult.style.color = '#1f306a';
                resultDescription.innerHTML = 'Ravenclaw students are typically intelligent, witty and creative.';
            } else if (data == 'Gryffindor') {
                sortingResult.style.color = '#d74f3f';
                resultDescription.innerHTML = 'Gryffindor students are typically brave, daring and chivalrous.';
            } else if (data == 'Hufflepuff') {
                sortingResult.style.color = '#fdb82d';
                resultDescription.innerHTML = 'Hufflepuff students are typically fair-minded, loyal and honest.';
            }

            sortingResult.innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
})
