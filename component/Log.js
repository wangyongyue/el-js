
var Button = require('../style/Button')
function Log() {

        this.div

        this.add = function (node) {

            this.div = document.createElement('div')
            node.appendChild(this.div)
            this.div.style.background  = '#3B3E40'


            var l = document.createElement('p')
            l.innerHTML = "log"
            this.div.appendChild(l)

            for (let i = 0; i < 26; i++) {

                var b = new Button()
                b.add(this.div)

                b.text = i
                b.reload()

            }

        }
        this.reload = function () {


        }


}
module.exports=Log;