/*
const fetchData = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Resolved successfully!");
    } else {
        reject("Attempt rejected...");
    }
});

export default fetchData;
*/ 

const fetchData = (success = true) => {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Resolved successfully!");
        } else {
            reject("Attempt rejected...");
        }
    });
};

export default fetchData;