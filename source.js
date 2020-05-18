
const VideoHTML = document.querySelector("#sphere-video")
class SphereVideo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      var shadowDom = this.attachShadow({mode:'open'})
      shadowDom.innerHTML = VideoHTML.innerHTML;
      shadowDom.querySelector("video").src=this.getAttribute("src");
      // Element functionality written in here
  

    }
  }
window.customElements.define("video-ball",SphereVideo);