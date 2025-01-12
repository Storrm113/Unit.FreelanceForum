// Freelancers array
let freelancers = [
    { name: "Alice", occupation: "writer", price: 30 },
    { name: "Bob", occupation: "teacher", price: 50 },
];

// Render freelancer list
function renderFreelancers() {
    const freelancerList = document.getElementById("freelancerList");
    freelancerList.innerHTML = ""; // Clear the list

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.classList.add("freelancers");
        li.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        freelancerList.appendChild(li);
    });
}

// Update average price
function UpdateAveragePrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrice / freelancers.length;
    document.getElementById("avgPrice").textContent = `$${averagePrice.toFixed(2)}`;
}

// Initial render
renderFreelancers();
UpdateAveragePrice();

// Function to add new freelancer and update prices
function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
    renderFreelancers();
    UpdateAveragePrice();
}

// Add a new freelancer after a delay
setInterval(() => {
    const newFreelancer = { name: "Carol", occupation: "Programmer", price: 70 };
    addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.price);
}, 3000); // Every 3 seconds