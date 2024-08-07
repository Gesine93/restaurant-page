import './style.css';
import Map from './map.png';


document.addEventListener("DOMContentLoaded", () => {
    
    const content = document.querySelector("#content");
    const homeBtn = document.querySelector(".home");
    const contactBtn = document.querySelector(".contact");

    const loadContent = function(div, page) {
        div.innerHTML = "";
        page(div);
    };

    const home = function(content) {
        const text_one = document.createElement("div");
        text_one.classList.add("text");
        text_one.innerHTML = `
            <h2>Welcome to our pizza restaurant</h2> 
            <p>We consider pizza an art: Our dough is freshly prepared daily and topped only with the best, freshest ingredients. Many renowned food manufacturers supply Alfredo's Pizza, allowing us to guarantee a quality level that meets the highest standards.</p>
            <p>If you love oven-fresh pizzas, you’ll find them at Alfredo's Pizza – and not just that. Whether freshly prepared vegan meat and rice dishes, juicy vegan burgers, or Italian pasta, we have something to suit every taste.</p>
            <p>The key to an Alfredo's Pizza, in addition to matured yeast dough and delicious pizza sauce, is a tender melting vegan cheese. 100% vegan Gouda – completely free of colorings and preservatives – ensures this tender melt and a special taste experience.</p>
        `;
    
        content.appendChild(text_one);
    
        const text_two = document.createElement("div");
        text_two.classList.add("text");
        text_two.innerHTML = `
            <h2>Why Choose Alfredo's Pizza</h2>
            <p>With 97 vegan dishes and over 1,000 deliveries daily, Alfredo's Pizza is committed to bringing you the best. We have received 11,432 positive reviews, reflecting our dedication to quality. We exclusively source high-quality vegan products, including vegan ham, salami made to our own recipe, the finest vegan steak strips, and whenever possible, we buy regionally.</p>
            <p>Experience the best in vegan dining with Alfredo's Pizza, where freshness and quality are our top priorities.</p>
        `;
    
        content.appendChild(text_two);
    
        const text_three = document.createElement("div");
        text_three.classList.add("text");
        text_three.innerHTML = `
            <h2>Original Recipes Since 1996</h2>
            <p>That's 25 years of experience in preparing and delivering pizza and other delicious dishes of your choice. Whether it's a classic recipe or your favorite pizza with your desired ingredients, all ordered dishes are freshly prepared with products that not only taste great but also impress. Self-developed recipes from handmade production ensure a unique taste. With our well-coordinated product range, every guest can find their perfect product.</p>
        `;
    
        content.appendChild(text_three);
    
        const text_four = document.createElement("div");
        text_four.classList.add("text");
        text_four.innerHTML = `
            <h2>Quality of the Dishes</h2>
            <p>The pizza dough is prepared by hand and freshly topped for the guest. This not only guarantees an optimal taste experience but also the greatest possible individuality for the guest who can customize their ingredients. High quality and exceptional freshness are as important to us as satisfied customers. Therefore, we deliberately avoid additives in our sauces and dressings. We also rely on seasonal components and regional suppliers in the preparation of our products, reducing the amount of imported ingredients. Alfredo's Pizza aims to deliver products in restaurant quality. Every single employee ensures this: from the pizza baker, who prepares the products with love, to the delivery driver who brings them to your door, to the operations manager and franchise partner.</p>
        `;
    
        content.appendChild(text_four);
    
        const text_five = document.createElement("div");
        text_five.classList.add("text");
        text_five.innerHTML = `
            <h2>Very Fast Deliveries</h2>
            <p>Alfredo's Pizza prefers to use e-bikes for product delivery. But a car or scooter can also be used for delivery to the guest. The average time it takes us to reach you is a maximum of 30 minutes.</p>
        `;
    
        content.appendChild(text_five);
    };
    
    const contact = function(content) {
        const text_one = document.createElement("div");
        text_one.classList.add("text");
        text_one.innerHTML = `
            <h2>Opening hours</h2> 
            <p>Mo-Fr: 10 am to 11 pm </p>
            <p>Sa-Su: 12 pm to 12 am </p>
        `;
    
        content.appendChild(text_one);
    
        const text_two = document.createElement("div");
        text_two.classList.add("text");
        text_two.innerHTML = `
            <h2>Address</h2>
            <p>25 Oak Street</p>
            <p>W1A 1AA London</p>
        `;

        const myMap = new Image();
        myMap.src = Map;
      
        text_two.appendChild(myMap);
    
        content.appendChild(text_two);
    
        const text_three = document.createElement("div");
        text_three.classList.add("text");
        text_three.innerHTML = `
            <h2>Phone and Email</h2>
            <p>phone: +44 20 7123 4567</p>
            <p>email: info@pizza_alfredo@web.uk</p>
        `;
    
        content.appendChild(text_three);
    };

    homeBtn.addEventListener("click", () => loadContent(content, home));
    contactBtn.addEventListener("click", () => loadContent(content, contact));

    // Load home content by default
    home(content);
    
});

