document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".mantra .content header nav ul li a");
    const middleText = document.getElementById("middleText");
    const dynamicContent = document.getElementById("dynamicContent");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent page reload
            const page1 = link.getAttribute("data-page1");
            const page2 = link.getAttribute("data-page2");

            // Fetch both pages in parallel
            Promise.all([
                fetch(`blocks/${page1}.html`).then(res => res.text()),
                fetch(`blocks/${page2}.html`).then(res => res.text())
            ]).then(([html1, html2]) => {
                middleText.innerHTML = html1;       // Insert first file
                dynamicContent.innerHTML = html2;     // Insert second file
            }).catch(error => {
                console.error("Error loading pages:", error);
            });
        });
    });
    document.addEventListener("click", (event) => {
        const target = event.target.closest(".box"); // Find the nearest .box
        if (target) {
            const page = target.getAttribute("data-load"); // Get the page name

            fetch(`blocks/yogaTabs/${page}.html`)
                .then(res => res.text())
                .then(html => {
                    dynamicContent.innerHTML = html; // Insert content
                })
                .catch(error => console.error("Error loading yoga tab:", error));
        }
    });
    document.addEventListener('click', (event) => {
        const target2 = event.target.closest(".back-button");
        if(target2){
            const page3 = target2.getAttribute("data-load");

            fetch(`blocks/${page3}.html`)
            .then(res => res.text())
            .then(html => {
                dynamicContent.innerHTML = html;
            })

        }
    } )
});
