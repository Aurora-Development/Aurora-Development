const auroraseriesProductsElement = document.querySelector('.auroraseries');
const productTemplate = document.querySelector('#product-template');

const auroraseriesProducts = [
    {
        title: "Aurora Prison Lucky Blocks",
        name: "prisonluckyblocks",
        productImage: "images/logo.png",
        description: "Comming Soon.",
        canBuyProduct: false
    },
    {
        title: "Aurora Chat Reaction",
        name: "chatreaction",
        productImage: "images/logo.png",
        description: "Comming Soon.",
        canBuyProduct: false
    },
    {
        title: "Aurora Factories",
        name: "factories",
        productImage: "images/logo.png",
        description: "Comming Soon.",
        canBuyProduct: false
    },
    {
        title: "Aurora GG Wave",
        name: "ggwave",
        productImage: "images/logo.png",
        description: "Very cheap fully customizable gg wave plugin.",
        canBuyProduct: true
    }
];

auroraseriesProducts.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);
    clone.querySelector('.product-title').innerText = product.title;
    clone.querySelector('.product-image').src = product.productImage;
    clone.querySelector('.product-description').innerText = product.description;
    if (!product.canBuyProduct) clone.querySelector('.btn').setAttribute('disabled', null);
    clone.querySelector('.btn').href = '/buy#'+product.name;
    auroraseriesProductsElement.appendChild(clone);
});