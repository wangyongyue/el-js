function Button() {

        this.text = ""

        this.div
        this.add = function (node) {

            this.div = document.createElement('p')
            this.div.style.width = '30px'
            this.div.style.height = '20px'
            this.div.style.background = 'clear'
            this.div.style.textAlign = 'center'

            node.appendChild(this.div)

        }
        this.reload = function () {

            this.div.innerHTML = this.text

        }
}
module.exports=Button;