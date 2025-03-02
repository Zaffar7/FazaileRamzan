console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.getElementById("day-buttons");
    const contentContainer = document.getElementById("content");

    // Generate 30 buttons and corresponding content dynamically
    for (let i = 1; i <= 30; i++) {
        // Create a button for each day
        const button = document.createElement("button");
        button.className = "day-button";
        button.textContent = `Day ${i}`;
        button.setAttribute("data-day", i);
        buttonContainer.appendChild(button);

        // Create content for each day
        const content = document.createElement("div");
        content.className = "day-content";
        content.id = `day-${i}`;
        content.innerHTML = `
            <h3>Day ${i}: Fazail-e-Ramzan</h3>
            <p>Welcome to Day ${i} content.</p>
        `;
        contentContainer.appendChild(content);
    }

    const buttons = document.querySelectorAll(".day-button");
    const contents = document.querySelectorAll(".day-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("data-day");
            
            // Hide all contents
            contents.forEach(content => content.style.display = "none");
            
            // Show the selected day content
            const selectedContent = document.getElementById(`day-${day}`);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        });
    });

    // Ensure all contents are hidden initially
    contents.forEach(content => content.style.display = "none");
    
    // Show the first day's content by default
    document.getElementById("day-1").style.display = "block";
});

