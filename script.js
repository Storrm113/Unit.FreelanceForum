// Freelancers array
let freelancers = [
    { name: "Alice", occupation: "writer", price: 30 },
    { name: "Bob", occupation: "teacher", price: 50 },
];

const newFreelancers = [
    { name: "Charlie", occupation: "Photographer", price: 40 },
    { name: "Diana", occupation: "Graphic Designer", price: 60 },
    { name: "Ethan", occupation: "Web Developer", price: 70 },
    { name: "Fiona", occupation: "SEO Specialist", price: 50 },
    { name: "George", occupation: "Animator", price: 80 },
    { name: "Hannah", occupation: "Consultant", price: 90 },
    { name: "Ian", occupation: "Copywriter", price: 55 },
    { name: "Jenny", occupation: "Data Analyst", price: 75 },
    { name: "Kevin", occupation: "Mobile Developer", price: 85 },
    { name: "Laura", occupation: "Virtual Assistant", price: 45 },
    { name: "Mike", occupation: "Video Editor", price: 65 },
    { name: "Nina", occupation: "Content Strategist", price: 60 },
    { name: "Oliver", occupation: "UX Designer", price: 70 },
    { name: "Paul", occupation: "Project Manager", price: 95 },
    { name: "Quincy", occupation: "Sales Manager", price: 85 },
    { name: "Rachel", occupation: "Social Media Manager", price: 55 },
    { name: "Steve", occupation: "Sound Engineer", price: 75 },
    { name: "Tina", occupation: "Illustrator", price: 65 },
    { name: "Victor", occupation: "Translator", price: 50 },
    { name: "Wendy", occupation: "Digital Marketer", price: 60 },
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
// setInterval(() => {
//     const newFreelancer = { name: "Carol", occupation: "Programmer", price: 70 };
//     addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.price);
// }, 3000); // Every 3 seconds

// Index to track which freelancer to add next
let index = 0;

// Add a new freelancer every 3 seconds
setInterval(() => {
    if (index < newFreelancers.length) {
        const newFreelancer = newFreelancers[index];
        addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.price);
        index++;
    } else {
        clearInterval(); // Stop adding freelancers once all 20 are added
    }
}, 3000); // Every 3 seconds