export default class ErrorPerso extends Error {
    constructor (novaArea:number) {
        super(`A área informada ${novaArea} é maior do que a area disponivel`)
    }
}