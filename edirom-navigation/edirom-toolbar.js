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
            <li id="ne">New Edition</li> 
            </ul>
            <p>Audio</p>
            <ul>
            <li id="ap">Audio Player</li> 
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
            this.shadowRoot.getElementById("ne").addEventListener('click', () => {
                this.createWindow('[{"title": "New Edition", "html": "This is new edition"}]');
            });   
            this.shadowRoot.getElementById("ap").addEventListener('click', () => {
                const audioPlayerElem = "<edirom-audio-player tracks='[ {&quot;title&quot;: &quot;Mercy&quot;, &quot;composer&quot;: &quot;Vernon Maytone&quot;, &quot;work&quot;: &quot;Brotheration Reggae 2015&quot;, &quot;src&quot;: &quot;https://pixabay.com/de/music/download/id-140277.mp3&quot;, &quot;type&quot;: &quot;audio/mpeg&quot;}, {&quot;title&quot;: &quot;Walk Good&quot;, &quot;composer&quot;: &quot;Daddy Roy&quot;, &quot;work&quot;: &quot;Brotheration Records 2016&quot;, &quot;src&quot;: &quot;https://pixabay.com/de/music/download/id-140285.mp3&quot;, &quot;type&quot;: &quot;audio/mpeg&quot;},  {&quot;title&quot;: &quot;To be free&quot;, &quot;composer&quot;: &quot;Composer 1&quot;, &quot;work&quot;: &quot;Own work&quot;, &quot;src&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/1/12/03may2020-tobefree.mp3&quot;, &quot;type&quot;: &quot;audio/mpeg&quot;}, {&quot;title&quot;: &quot;A Tale of Distant Lands&quot;, &quot;composer&quot;: &quot;Robert Schumann&quot;, &quot;work&quot;: &quot;Own work&quot;, &quot;src&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/e/ec/A_Tale_of_Distant_Lands.mp3&quot;, &quot;type&quot;: &quot;audio/mpeg&quot;},  {&quot;title&quot;: &quot;Funky Souls&quot;, &quot;composer&quot;: &quot;Amarià&quot;, &quot;work&quot;: &quot;Soundcloud: Funky Souls (2019)&quot;, &quot;src&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/2/2e/Amari%C3%A0_-_Funky_Souls_%282019%29.mp3&quot;, &quot;type&quot;: &quot;audio/mpeg&quot;}]' height='500px' width='500px' state='pause' track='0' start='0.0' end='' playbackrate='1.0' playbackmode='repeat' displaymode='controls-lg'></edirom-audio-player>";
                this.createWindow('[{"title": "Edirom Audio Player", "html":"'+audioPlayerElem+'"}]');
            });   
        }

}
customElements.define('edirom-toolbar', EdiromToolbar);