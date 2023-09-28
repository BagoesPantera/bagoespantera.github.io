const datas = [
    {
        link: "https://github.com/BagoesPantera",
        img: "img/github.png",
        title: "Github"
    },
    {
        link: "https://www.instagram.com/bagoespantera/",
        img: "img/Instagram-Icon.jpg",
        title: "Instagram"
    },
    {
        link: "https://developers.google.com/profile/u/bagoespantera",
        img: "img/Google-Developers.png",
        title: "Google Developer"
    },
    {
        link: "https://www.codewars.com/users/panteraa",
        img: "img/codewar.svg",
        title: "Code War"  
    },
    {
        link: "https://www.hackerrank.com/bagoespantera",
        img: "img/HackerRank_logo.png",
        title: "Hacker Rank"
    },
    {
        link: "https://leetcode.com/panteraa/",
        img: "img/LeetCode_logo_black.png",
        title: "Leet Code"
    }
    
]

let linkContainer = document.getElementById("container");
let inhtml = ''
const mappedLinks = datas.map((data, index) => {
    inhtml += `<div class="page-item-wrap relative" key=${index}>
                <div class="page-item flex-both-center absolute"></div>
                <a target="_blank" class="page-item-each py-10 flex-both-center" href="${data.link}">
                    <img class="link-each-image" src="${data.img}"/>
                    <span class=" item-title text-center">${data.title}</span>
                </a>
            </div>`;
});
linkContainer.innerHTML = inhtml


new TypeIt(".typetext", {
    speed: 200,
    loop: true,
    })
    .type("Hai", { delay : 1000 })
    .delete()
    .type("Hello", { delay : 1000 })
    .delete()
    .type("こんにちは", { delay : 1000 })
    .delete()
    .type("안녕하세요", {delay : 1000})
    .go();