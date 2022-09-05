const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("nav ul");
const menuContainer = document.querySelector(".menu-container")
const navBar = document.querySelector("nav div");
const body = document.querySelector("body");

const handleOpenMenu = () => {
    navBar.style.display = "none";
    body.style.overflowY = "hidden";
    menu.style.left = "0";
    
}

const handleCloseMenu = () => {
    navBar.style.display = "flex";
    body.style.overflowY = "scroll";
    menu.style.left = "100%";
}

openMenu.addEventListener('click', handleOpenMenu);
closeMenu.addEventListener('click', handleCloseMenu);
menu.addEventListener('click', handleCloseMenu);


// Scroll Animation
const fadeIn = document.querySelectorAll(".fade-in");
const slideB = document.querySelectorAll(".slide-b");

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if(entry.target.classList.contains("fade-in")) entry.target.classList.toggle("faded", entry.isIntersecting);
        if(entry.target.classList.contains("slide-b")) entry.target.classList.toggle("slided", entry.isIntersecting);       
    })
}, {
    threshold: .65,
});

// Fade In to display

fadeIn.forEach((fade) => {
    observer.observe(fade);
});

// Slide in to display

slideB.forEach((slide) => {
    observer.observe(slide);
});

// cards
const btcCard = document.querySelector(".btc-card");
const ethCard = document.querySelector(".eth-card");
const litCard = document.querySelector(".lit-card");

const clickCard = (el) => { 
    const card = document.querySelector(`.${el}`); 
    const title = document.querySelector(`.${el} .title`);
    const subTitle = document.querySelector(`.${el} .sub-title`);
    const arrowLink = document.querySelector(`.${el} .arrow`);
    const smLink = document.querySelector(`.${el} .start-mining`);

    card.classList.remove("bg-white");
    card.classList.add("bg-dark");

    title.classList.remove("text-dark");
    title.classList.add("text-white");

    subTitle.classList.remove("text-gray-500");
    subTitle.classList.add("text-white");

    smLink.classList.remove('hidden');
    arrowLink.classList.add('hidden');
}

const unClickCard = (el1, el2) => { 
    const card1 = document.querySelector(`.${el1}`); 
    const card2 = document.querySelector(`.${el2}`);

    const title1 = document.querySelector(`.${el1} .title`);
    const title2 = document.querySelector(`.${el2} .title`);

    const subTitle1 = document.querySelector(`.${el1} .sub-title`);
    const subTitle2 = document.querySelector(`.${el2} .sub-title`);
    
    const arrowLink1 = document.querySelector(`.${el1} .arrow`);
    const arrowLink2 = document.querySelector(`.${el2} .arrow`);

    const smLink1 = document.querySelector(`.${el1} .start-mining`);
    const smLink2 = document.querySelector(`.${el2} .start-mining`);

    card1.classList.add("bg-white");
    card1.classList.remove("bg-dark");

    card2.classList.add("bg-white");
    card2.classList.remove("bg-dark");

    title1.classList.add("text-dark");
    title1.classList.remove("text-white");

    title2.classList.add("text-dark");
    title2.classList.remove("text-white");

    subTitle1.classList.add("text-gray-500");
    subTitle1.classList.remove("text-white");

    subTitle2.classList.add("text-gray-500");
    subTitle2.classList.remove("text-white");

    smLink1.classList.add('hidden');
    arrowLink1.classList.remove('hidden');

    smLink2.classList.add('hidden');
    arrowLink2.classList.remove('hidden');
}

btcCard.addEventListener('click', () => {
    clickCard("btc-card");

    setTimeout(() => {
        unClickCard("eth-card", "lit-card");
    }, 300)
});

ethCard.addEventListener('click', () => {
    clickCard("eth-card");

    setTimeout(() => {
        unClickCard("btc-card", "lit-card");
    }, 300)
});

litCard.addEventListener('click', () => {
    clickCard("lit-card");

    setTimeout(() => {
        unClickCard("eth-card", "btc-card");
    }, 300)
});

// Email Validation

const removeDisabledAttribute = (els) => els.forEach(el => {
    el.removeAttribute("disabled");
});

const addDisabledAttribute = (els) => els.forEach(el => {
    el.setAttribute("disabled", "true");
});

const contactForm = document.querySelector('#contact-form');
const contactBtn = document.querySelector('#contact-btn');
const contactInput = document.querySelector('#email');

const postInfo = (email) => {
    console.info(email);
    return new Promise(resolve => setTimeout(resolve, 2500));
}

const contactBtnOptions = {
    pending: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline animate-spin">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>


    <span class="uppercase tracking-wide animate-pulse">Sending...</span>
    `,
    success: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
    <span class="uppercase tracking-wide">thank you!</span>`
}

const handleFormSubmit = async (e) => {
    e.preventDefault();
    addDisabledAttribute([contactBtn, contactForm]);
    contactBtn.innerHTML = contactBtnOptions.pending;
    contactInput.style.display = "none";
    const userEmail = contactInput.value;
    await postInfo(userEmail);
    contactBtn.innerHTML = contactBtnOptions.success;
}

contactForm.addEventListener('submit', handleFormSubmit);

