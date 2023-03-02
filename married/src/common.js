const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const scrollToInvalidElement = (className = "invalid", option = { block: "center", behavior: "smooth" }) => {
    document.getElementsByClassName(className)[0]?.scrollIntoView(option);
};

export {
    getRandomInt,
    scrollToInvalidElement,
};