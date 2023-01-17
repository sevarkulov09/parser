const readline = require("readline")
const fs = require("fs");
const rl = readline.createInterface(process.stdin, process.stdout)

class Card {
    constructor(pan) {
        this.bin = pan.slice(0, 9)
        //read .json file
        let json = fs.readFileSync("./products.json", "utf8")
        this.products = JSON.parse(json)

    }

    getProduct() {
        return this.products[this.bin]
    }
}

function fileHandler(product, data) {
    fs.appendFile(`finished_files/eb1_vsdc_file${product}.cap`, `${data}\n`, (err) => {
        if (err) {
            throw err;
        }
        console.log("Data has been added!")
    })
}


rl.question("Write file name= ", (fileName) => {
    let fs = require("fs");

    let fileContent =
        fs.readFileSync(fileName, "utf8");
    let str = fileContent.split("\n");

    for (let i = 0; i < str.length; i++) {
        let card = new Card(str[i])
        fileHandler(card.getProduct(), str[i])
    }
    rl.close()
})


