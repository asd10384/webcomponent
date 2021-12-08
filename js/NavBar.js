export default class NavBar extends HTMLElement {
  connectedCallback() {
    const check = this.getAttribute("check");
    let doc = document.createElement("div");
    doc.className = "nav-bar";
    doc.innerHTML += this.makeli({
      icon: 'home-outline',
      href: '/',
      title: '홈',
      check: check
    });
    doc.innerHTML += this.makeli({
      icon: 'log-in-outline',
      href: '/login',
      title: '로그인',
      check: check
    });
    
    this.appendChild(doc);
  }

  makeli(data={ icon: '', href: '/', title: '', check: '' }) {
    var output = `<li class="list${(data.title === data.check) ? '-active' : ''}">`;
    // output += `<b id="nav.b"></b><b id="nav.b"></b>`;
    output += `<a href="${data.href ? data.href : '/'}">`;
    output += `<span class="icon"><ion-icon name="${data.icon}"></ion-icon></span>`;
    output += `<span class="title">${data.title}</span>`;
    output += `</a></div>`;
    return output;
  }
}