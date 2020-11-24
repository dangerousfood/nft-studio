const fs = require('fs')

let buildDir = process.argv[2] + "/build"
if (!fs.existsSync(buildDir)){
    fs.mkdirSync(buildDir);
}

fs.readdir(process.argv[2], (err, files) => {
    files.filter(name => {
        return ('cdc' === name.split('.')[1])
    }).forEach(name => {
        let contract = fs.readFileSync(process.argv[2] + "/" + name, 'utf8').replace(/`/g, `\\` + `\``)
        let result = addressRuntime(contract);
        let params = ``

        result.forEach((item) => {
            if(result[result.length - 1] !== item){
                params = params + item.name + `, `
            }
            else {
                params = params + item.name
            }
        })
        params = `(` + params + `)`

        let contractScaffold = []
        for(let i=0; i < result.length; i++) {
            let item = result[i]
            if(i == 0){
                contractScaffold.push([contract.substring(0, item.start), item.name])
            }
            else {
                contractScaffold.push([contract.substring(result[i - 1].end, item.start), item.name])
            }

            if(i == result.length - 1){
                contractScaffold.push([contract.substring(item.end, contract.length), ])
            }
        }


        console.log(contractScaffold)

        if(contractScaffold.length === 0){
            let data = `module.exports = ` + `\`` + contract + `\``
            try {
                    fs.writeFileSync(buildDir + "/" +name.split('.')[0] + '.js', data)
                }
            catch (err) {
                console.error(err)
            }
        }
        else{
            let data = `module.exports = ` + params +  ` => {
                return (`
            contractScaffold.forEach((item) => {
                if(item === contractScaffold[contractScaffold.length - 1]){
                    data = data + `+ \`` + item[0] + `\``
                }
                else if(item === contractScaffold[0]){
                    data = data + `\`` + item[0] + `\` + ` + item[1]
                }
                else {
                    data = data + ` + \`` + item[0] + `\` + ` +  + item[1]
                }
            })
            data = data + `) \n}`
            try {
                    fs.writeFileSync(buildDir + "/" +name.split('.')[0] + '.js', data)
                }
            catch (err) {
                console.error(err)
            }
        }
    })
  });

const addressRuntime = (contract) => {
    let result = []
    let varAssignment = /0x0(?:|\W)/g

    const matchArray = [...contract.matchAll(varAssignment)]
    if(matchArray !== null) {
        for(let i = 0; i < matchArray.length; i++){
            let item = matchArray[i];
            let start = item.index
            let end = item.index + + item[0].length
            result.push({
                "start": start,
                "end": end,
                "name": "address_" + i
            })
        }
    }
    return result
}

