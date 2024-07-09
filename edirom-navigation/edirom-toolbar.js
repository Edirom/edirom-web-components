class EdiromToolbar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
        this.windows = []
        this.shadowRoot.innerHTML = `
        <style>
        #toolbar{
            width: 20%;
            height: 450px;
            margin-left: 80%;
            margin-top: 1%;
            border: 6px solid #d0cccc;
            border-radius: 10px;
        }
        p{
            font-size: 13px;
            margin: 5%;
            font-family: "PT Sans", "Open Sans", "Courier New", "Helvetica Neue", Helvetica, "Myriad Pro", ScalaSans, Arial, sans-serif;
        }   
        #toolbar ul {
            list-style-type: none;
            font-family: "PT Sans", "Open Sans", "Courier New", "Helvetica Neue", Helvetica, "Myriad Pro", ScalaSans, Arial, sans-serif;
            font-size: 13px;

        }
        #toolbar ul:hover {
            cursor: pointer;
        }
        </style>
        <body>
            <div id="toolbar">
            <p>Introduction<p>
            <ul>
                <li id=rea>Read Me!</li>
            </ul>
            <p>Work</p>
            <ul>
                <li id="cri">Critical remarks</li>
                
            </ul>
            <p>Sources</p>
            <ul>
            <li id="aut">Autograph</li> 
            <li id="fe"> First edition</li>
            </ul>
            <p> Edition</p>
            <ul>
            <li id="ve">Verovio</li> 
            </ul>
            </div>
        </body>
        
        `
    }
     createWindow(windows){
        console.log("the event is fired with attribute ", windows)     
        const ediromWindows = document.querySelector('edirom-windows');
        ediromWindows.setAttribute("add",windows)
 
    }

        // connected callback
        connectedCallback() {
     
            this.shadowRoot.getElementById("rea").addEventListener('click', () => {
                this.createWindow('[{"title": "Read me", "html": "This is read me"}]');
            });            

            this.shadowRoot.getElementById("cri").addEventListener('click', () => {
                this.createWindow('[{"title": "Critical Remarks", "html": "This is remarks"}]');
            });   
            this.shadowRoot.getElementById("aut").addEventListener('click', () => {
                this.createWindow('[{"title": "Autograph", "html": "This is read autograph"}]');
            });   
            this.shadowRoot.getElementById("fe").addEventListener('click', () => {
                this.createWindow('[{"title": "First Edition", "html": "This is read first edition"}]');
            });   
            this.shadowRoot.getElementById("ve").addEventListener('click', () => {
                this.createWindow('[{"title": "Verovio", "html": "<verovio-api-renderer></verovio-api-renderer>"}]');
            });
        }

}
customElements.define('edirom-toolbar', EdiromToolbar);