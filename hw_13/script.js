// Store pairs in an array
let pairs = [];

// Get DOM elements
const pairInput = document.getElementById('pairInput');
const pairsList = document.getElementById('pairsList');

// Function to validate and parse name/value pair
function parsePair(input) {
    const trimmed = input.trim();
    const parts = trimmed.split('=').map(part => part.trim());
    
    if (parts.length !== 2) return null;
    
    const [name, value] = parts;
    
    // Check if name and value contain only alphanumeric characters
    if (!name.match(/^[a-zA-Z0-9]+$/) || !value.match(/^[a-zA-Z0-9]+$/)) {
        return null;
    }
    
    return { name, value };
}

// Function to add a new pair
function addPair() {
    const input = pairInput.value;
    const pair = parsePair(input);
    
    if (!pair) {
        alert('Invalid format! Please use: name = value (alphanumeric characters only)');
        return;
    }
    
    pairs.push(pair);
    pairInput.value = '';
    renderPairs();
}

// Function to render the pairs list
function renderPairs() {
    pairsList.innerHTML = '';
    pairs.forEach((pair, index) => {
        const div = document.createElement('div');
        div.className = 'pair-item';
        div.textContent = `${pair.name} = ${pair.value}`;
        div.onclick = () => toggleSelection(div);
        pairsList.appendChild(div);
    });
}

// Function to toggle selection of a pair
function toggleSelection(element) {
    element.classList.toggle('selected');
}

// Function to sort by name
function sortByName() {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    renderPairs();
}

// Function to sort by value
function sortByValue() {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    renderPairs();
}

// Function to delete selected pairs
function deleteSelected() {
    const selectedElements = pairsList.querySelectorAll('.pair-item.selected');
    const selectedIndices = new Set();
    
    selectedElements.forEach(element => {
        const index = Array.from(pairsList.children).indexOf(element);
        selectedIndices.add(index);
    });
    
    pairs = pairs.filter((_, index) => !selectedIndices.has(index));
    renderPairs();
}

// Add keyboard event listener for Enter key
pairInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addPair();
    }
});
