document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const form = document.querySelector('#input');
    form.addEventListener('submit', handleSubmit);

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', handleClear);

});

const handleSubmit = function (event) {
    event.preventDefault();

    const descendant = createDescendant(event.target);
    const descendantList = document.querySelector('#descendantList');
    descendantList.appendChild(descendant);
    
    event.target.reset();
}

const createDescendant = function (form) {

    const descendant = document.createElement('tr');

    const monarch = document.createElement('td');
    monarch.textContent = form.monarch.value;
   
    // if (form.monarch.value == 'yes') {
    //     console.log('crown');
    //     const displayCrown 
    //     // crown.innerHTML = '<i class="fas fa-crown"></i>';
    // } else {
    //     console.log('no crown');
    // };

    descendant.appendChild(monarch);

    const name = document.createElement('td');
    name.textContent = form.name.value;
    console.log(name);
    descendant.appendChild(name);
    
    const title = document.createElement('td');
    title.textContent = form.title.value;
    console.log(title);
    descendant.appendChild(title);

    const relationship = document.createElement('td');
    relationship.textContent = form.relationship.value;
    console.log(relationship);
    descendant.appendChild(relationship);


    // const birth = document.createElement('td');
    // birth.textContent = form.birth.value;
    // console.log(birth);
    // descendant.appendChild(birth);

    // const death = document.createElement('td');
    // death.textContent = form.death.value;
    // console.log(death);
    // descendant.appendChild(death);

    const lifespan = document.createElement('td');
    const birth = form.birth.value;
    console.log(birth);

    const death = form.death.value;
    console.log(death);

    lifespan.textContent = `${birth} - ${death}`;
    descendant.appendChild(lifespan);

    return descendant;

} 


// TODO - ask - why does this function still get the inputs - see console.log on click
// TODO - ask - help needed to get the styling back on when inner html added.
const handleClear = function (event) {
    const descendantList = document.querySelector('#descendantList');
    descendantList.innerHTML = "<tr><th class='table_heading'></th><th class='table_heading'>Name</th><th class='table_heading'>Title</th><th class='table_heading'>Relationship</th><th class='table_heading'>Life Span</th></tr>";
    // console.log('clicked');
}