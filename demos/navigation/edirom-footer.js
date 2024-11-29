if (!customElements.get('edirom-footer')) {
    class EdiromFooter extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.ediromWindows = document.querySelector('edirom-windows');

            this.shadowRoot.innerHTML = `
            <style>
                #footer {
                    width: 100%;
                    height: 10%;
                    margin-top: 21%;
                    border: 6px solid #d0cccc;
                    border-radius: 10px;
                    background: #d0cccc;
                }
            </style>
            <body>
                <div id="footer">
                    <input id="horizontal" type="button" name="Horizontal" value="Horizontal"/>
                    <input id="vertical" type="button" name="Vertical" value="Vertical"/>
                </div>
            </body>
            `;

            // Variable to hold windows data
            this.windows = [];
        }

        updateGrid(type) {
            this.ediromWindows.setAttribute("arrange",type)
           
        }
        connectedCallback() {
            this.shadowRoot.getElementById("horizontal").addEventListener('click', () => {
                this.updateGrid('horizontal');
            });
            this.shadowRoot.getElementById("vertical").addEventListener('click', () => {
                this.updateGrid('vertical');
            });
            // Listen for windows-updated event
            document.addEventListener('windows-updated', this.handleWindowsUpdated.bind(this));
        }

        // Handle windows-updated event
        handleWindowsUpdated(event) {
            this.windows = event.detail.windows;
        }
    }

    // Define the custom element
    customElements.define('edirom-footer', EdiromFooter);
}
