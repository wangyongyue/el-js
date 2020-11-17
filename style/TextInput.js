function TextInput() {

        this.text = ""

        this.div
        this.l
        this.add = function (node) {

            this.div = document.createElement('div')
            node.appendChild(this.div)
            this.div.style.background  = 'white'


            this.l = document.createElement('p')
            this.div.appendChild(this.l)
            this.l.style.width = '30px'
            this.l.style.height = '20px'

        }
        this.reload = function () {

            this.l.innerHTML = this.text

        }
}
module.exports=TextInput;