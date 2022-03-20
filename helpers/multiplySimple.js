
const fs = require('fs');
const colors = require('colors')

const toCreateTable = async (base = 5, numberTimes = 10, isList = false)=>{

    try {

        let saida = '';
        let showConsole = '';

        for (let i = 1; i <= numberTimes; i++) {
            showConsole += `${colors.red(base)} x ${colors.magenta(i)} ${'='.yellow} ${colors.bgBlue(base * i)}\n`;
            saida += `${base} x ${i} = ${base * i}\n`;
        }

        if(isList){
            console.log("====================".green);
            console.log('   Tabela de '.black.bgWhite.bold+`${colors.red.bold(base)}      `.bgWhite);
            console.log("====================".green);
            console.log(showConsole);
        }
        

        fs.writeFileSync(`./output/tabela-${base}.txt`,saida)

        return(`tabela-${base}.txt`)
            
    } catch (error) {
        throw error
    }

}

module.exports = {
    toCreateTable//:toCreateTable is redundant
}