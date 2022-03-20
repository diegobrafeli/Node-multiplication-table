
const fs = require('fs');

const handleToCreateTable = (base)=>{

    return promise = new Promise((resolve, reject) =>{

        let saida = "";

        console.log("====================");
        console.log('   Tabela de', base);
        console.log("====================");

        for (let i = 1; i < 11; i++) {
            saida += (`${base} x ${i} = ${base * i} \n`);
        }

        fs.writeFileSync(`tabela-${base}.txt`,saida)

        console.log(saida);

        (saida)
            ? resolve(`tabela-${base}.txt`)
            : reject(`Erro of saida`)

    })

}

const checkTabela = (path) =>{

    return promise = new Promise((resolve, reject)=>{

        fs.access(`./${path}`, fs.constants.F_OK, (err) => {
            err ? reject('does not exist') : resolve(path)
        })
    })
}

const toCreateTable = async (base)=>{

    try {
        const resultSaida = await handleToCreateTable(base)
        const resultCheckTabela = await checkTabela(resultSaida)
        return resultCheckTabela     
    } catch (error) {
        throw error
    }

}

module.exports = {
    toCreateTable//:toCreateTable is redundant
}