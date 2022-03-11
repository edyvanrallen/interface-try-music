import factoryMessage from './../utils/factoryMessage.js'

export default class LocalStorage {
    constructor () {
        if(!localStorage.getItem('index'))
            localStorage.setItem('index', 1)
    }
    /**
     * Retorna o índice atual
     * @returns {(string)}
     */
    currentIndex () {
        return localStorage.getItem('index')
    }
    /**
     * Atualiza o índice
     * @param {*} index
     */
    updateIndex (index) {
        localStorage.removeItem('index')
        localStorage.setItem('index', parseInt(index) + 1)
    }
    /**
     * Adiciona o elemento ao localStorage
     * @param {*} data
     */
    add(data) {
        let index = this.currentIndex()
        localStorage.setItem(index,JSON.stringify(data))
        this.updateIndex(index)
    }
    /**
     * Retorna todos os elementos presentes no localStorage
     * @returns {(Array)}
     */
    getAll() {
        let length = this.currentIndex() - 1
        let result = []
        for(let i = 0;i < length; i++){
            let data = JSON.parse(localStorage.getItem(i + 1))
            if(data)
                result.push(data)
        }
        return result
    }
    /**
     * Busca por apenas um registro
     * @param {*} index
     * @returns {(object)}
     */
    findOne(index) {
        let result = localStorage.getItem(index)
        if(result){
            return factoryMessage(true, result)
        }
        return factoryMessage(false, 'Algo deu errado, informe o índice correto')
    }
    /**
     * Remove item do localStorage
     * @param {*} index
     * @returns
     */
    removeItem(index){
        let result = localStorage.getItem(index)
        if(result){
            localStorage.removeItem(index)
            return factoryMessage(true, 'Elemento removido com sucesso')
        }
        return factoryMessage(false, 'O elemento não existe para ser removido')
    }
}