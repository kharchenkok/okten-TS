const primitiveArray = ["Okten",42, "hello", true, 3.14, "world", false, 0, "JavaScript", -99, null, undefined];

const createList=(array)=>{
    document.write('<div class="container"> <ul style="padding-left: 40px;list-style: disc">')
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul></div>');
}

createList(primitiveArray)