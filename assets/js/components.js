/* IMDE — header, footer, menu e seletor de idiomas compartilhados */
(function () {
  var LANGS = [
    ['POR','Português','#'],['GER','Deutsch','https://www.imde.net/GER/default.htm?1'],
    ['ENG','English','#'],['FRE','Français','#'],['ITA','Italiano','#'],['SPA','Español','#'],
    ['BRA','Português (BR)','#'],['AUT','Deutsch (AT)','#'],['BUL','Български','#'],
    ['CZE','Čeština','#'],['HRV','Hrvatski','#'],['HUN','Magyar','#'],['POL','Polski','#'],
    ['ROM','Română','#'],['SLK','Slovenčina','#'],['SLV','Slovenščina','#'],['SUI','Deutsch (CH)','#']
  ];
  var NAV = [
    ['Início','index.html'],
    ['Sobre','sobre.html'],
    ['Soluções',null,[
      ['Lean Recruiting','lean-recruiting.html'],
      ['Talent Recruiter','talent-recruiter.html'],
      ['Talent Developer','talent-developer.html']
    ]],
    ['Clientes','clientes.html'],
    ['Depoimentos','depoimentos.html'],
    ['Parceiros','parceiros.html'],
    ['Contato','contato.html']
  ];
  function current(){
    var f=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    return f===''?'index.html':f;
  }
  function headerHTML(){
    var cur=current();
    var items=NAV.map(function(it){
      if(it[1]){
        return '<a href="'+it[1]+'"'+(cur===it[1]?' class="active"':'')+'>'+it[0]+'</a>';
      }
      var sub=it[2].map(function(s){
        return '<a href="'+s[1]+'"'+(cur===s[1]?' style="background:var(--yellow)"':'')+'>'+s[0]+'</a>';
      }).join('');
      return '<div class="dropdown"><button type="button" aria-haspopup="true">'+it[0]+' ▾</button><div class="dropdown-menu">'+sub+'</div></div>';
    }).join('');
    var langItems=LANGS.map(function(l){
      return '<li'+(l[0]==='POR'?' class="current"':'')+'><a href="'+l[2]+'">'+l[0]+' <span>'+l[1]+'</span></a></li>';
    }).join('');
    var mobile=NAV.map(function(it){
      if(it[1]) return '<a href="'+it[1]+'">'+it[0]+'</a>';
      return it[2].map(function(s){return '<a href="'+s[1]+'">— '+s[0]+'</a>';}).join('');
    }).join('');
    return ''+
      '<div class="header-inner">'+
        '<a class="logo" href="index.html"><span class="logo-block"><i></i><i></i><i></i><i></i></span><span>IMDE<small>Talent Acquisition &amp; Development</small></span></a>'+
        '<button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">☰</button>'+
        '<nav class="nav" aria-label="Principal">'+items+
          '<a class="btn btn-yellow login-link" href="login.html">Login</a>'+
          '<div class="lang"><button class="lang-btn" id="langBtn" type="button">POR ▾</button><div class="lang-panel" id="langPanel"><ul>'+langItems+'</ul></div></div>'+
        '</nav>'+
      '</div>'+
      '<div class="mobile-menu" id="mobileMenu">'+mobile+
        '<a href="login.html">Login</a><a href="videos.html">Vídeos</a><a href="suporte.html">Suporte</a><a href="privacidade.html">Privacidade</a></div>';
  }
  function footerHTML(){
    return ''+
      '<div class="footer-grid">'+
        '<div><span class="logo-block light"><i></i><i></i><i></i><i></i></span>'+
          '<p style="margin-top:14px;font-weight:900;font-size:20px;text-transform:uppercase">Reduced to the max.</p>'+
          '<p style="margin-top:8px;color:#555">Talent Acquisition &amp; Talent Development desde 1996.</p></div>'+
        '<div><h4>Produtos</h4><a href="lean-recruiting.html">Lean Recruiting</a><a href="talent-recruiter.html">Talent Recruiter</a><a href="talent-developer.html">Talent Developer</a></div>'+
        '<div><h4>Empresa</h4><a href="sobre.html">Sobre a IMDE</a><a href="clientes.html">Clientes</a><a href="depoimentos.html">Depoimentos</a><a href="parceiros.html">Parceiros</a><a href="videos.html">Vídeos</a></div>'+
        '<div><h4>Contato</h4>'+
          '<p>InSyst Master Data Experts AG<br>Hinterbergstrasse 18, CH-6312 Steinhausen</p>'+
          '<a href="mailto:ddt_imde@imde.net" style="margin-top:8px">ddt_imde@imde.net</a>'+
          '<a href="tel:+41793003116">+41 79 300 31 16</a>'+
          '<a href="suporte.html">Suporte</a><a href="privacidade.html">Privacidade</a></div>'+
      '</div>'+
      '<div class="footer-bottom">'+
        '<span>© '+new Date().getFullYear()+' InSyst Master Data Experts AG (IMDE). Todos os direitos reservados.</span>'+
        '<span><a href="contato.html">Impressum</a> · <a href="privacidade.html">Privacidade</a> · <a href="videos.html">Vídeos</a></span>'+
      '</div>';
  }
  function init(){
    var h=document.getElementById('site-header'); if(h) h.innerHTML=headerHTML();
    var f=document.getElementById('site-footer'); if(f) f.innerHTML=footerHTML();
    var ham=document.getElementById('hamburger'), mm=document.getElementById('mobileMenu');
    if(ham&&mm) ham.addEventListener('click',function(){
      mm.classList.toggle('open'); ham.setAttribute('aria-expanded',mm.classList.contains('open'));
    });
    var lb=document.getElementById('langBtn'), lp=document.getElementById('langPanel');
    if(lb&&lp) lb.addEventListener('click',function(e){e.stopPropagation();lp.classList.toggle('open');});
    document.addEventListener('click',function(e){
      if(lp&&!e.target.closest('.lang')) lp.classList.remove('open');
      if(!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown').forEach(function(d){d.classList.remove('open');});
    });
    document.querySelectorAll('.dropdown>button').forEach(function(b){
      b.addEventListener('click',function(e){e.stopPropagation();b.parentElement.classList.toggle('open');});
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();