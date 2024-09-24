//addition a new list

const fruit=["apples", "mango", "banana", "strawberry"];
const proteins=["fish", "meat", "chicken","lentils"];
const electronics=["computer", "laptop", "smartphone", "tablet"];
const breakfast=["egg", "cheese", "jam"];

fruit.push("orange");

function howILikeToEat(product) {
    let message="";

    for (let product of product) {
        if (fruit.includes(product)) {
            message="I only eat that in summer.";
        }

        if (proteins.includes(product)) {
            message="I only eat that once a week.";
        }

        if (electronics.includes(product)) {
            message="I do not eat.";
        }
        if (breakfast.includes(product)) {
            message="I like breakfast."
        }
        proteins.message="I do not eat meat, i am vegetarian."
    }

    console.log(`${product.join(", ")} $ {message}`);
}

howILikeToEat(["banana", "orange"]);
howILikeToEat(['dorado','beaf','tofu']);
howILikeToEat('computer');
howILikeToEat(['jam', 'egg']);