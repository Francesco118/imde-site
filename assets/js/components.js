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
    ['Soluções',null,[
      ['Lean Recruiting (Recrutamento Ágil)','lean-recruiting.html'],
      ['Talent Recruiter (Seleção e Perfil)','talent-recruiter.html'],
      ['Talent Developer (Desenvolvimento)','talent-developer.html'],
      ['Detetives e Agentes de IA','agentes-ia.html']
    ]],
    ['Como Atendemos',null,[
      ['Headhunting Especializado (Done-For-You)','headhunting.html'],
      ['Plataforma SaaS & Agentes (In-House)','saas.html']
    ]],
    ['Casos & Ciência',null,[
      ['Clientes & Referências','clientes.html'],
      ['Depoimentos Reais','depoimentos.html'],
      ['Ciência & Metodologia Suíça','ciencia.html']
    ]],
    ['Sobre o IMDE','sobre.html'],
    ['Diagnóstico Gratuito','contato.html']
  ];

  function current(){
    var f=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    return f===''?'index.html':f;
  }

  function headerHTML(){
    var cur=current();
    var items=NAV.map(function(it){
      if(it[1]){
        var isDiagnostico = it[1] === 'contato.html';
        return '<a href="'+it[1]+'"'+(cur===it[1]?' class="active"':'')+(isDiagnostico?' style="color:var(--accent-blue);font-weight:800;"':'')+'>'+it[0]+'</a>';
      }
      var sub=it[2].map(function(s){
        return '<a href="'+s[1]+'"'+(cur===s[1]?' style="background:rgba(37,99,235,0.08);color:var(--accent-blue);font-weight:700"':'')+'>'+s[0]+'</a>';
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
        '<a class="logo" href="index.html"><span class="logo-block"><i></i><i></i><i></i><i></i></span><span class="logo-wordmark">IMDE<small>Talent Acquisition &amp; Development</small></span></a>'+
        '<button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">☰</button>'+
        '<nav class="nav" aria-label="Principal">'+items+
          '<div class="header-actions">'+
            '<a class="login-link" href="login.html">Login ↗</a>'+
            '<a class="btn btn-primary demo-link" href="contato.html">Agendar Demonstração</a>'+
            '<div class="lang"><button class="lang-btn" id="langBtn" type="button">POR ▾</button><div class="lang-panel" id="langPanel"><ul>'+langItems+'</ul></div></div>'+
          '</div>'+
        '</nav>'+
      '</div>'+
      '<div class="mobile-menu" id="mobileMenu">'+mobile+
        '<a href="parceiros.html">Rede de Parceiros</a>'+
        '<a href="seja-parceiro.html">Seja um Parceiro</a>'+
        '<a href="login.html">Login na Plataforma</a>'+
        '<a href="videos.html">Biblioteca de Vídeos</a>'+
        '<a href="suporte.html">Suporte Técnico</a>'+
        '<a href="privacidade.html">Política de Privacidade</a>'+
      '</div>';
  }

  function footerHTML(){
    return ''+
      '<div class="footer-grid">'+
        '<div><span class="logo-block light"><i></i><i></i><i></i><i></i></span>'+
          '<p style="margin-top:14px;font-weight:900;font-size:22px;letter-spacing:-0.03em;color:var(--primary-dark)">IMDE</p>'+
          '<p style="font-weight:800;font-size:14px;text-transform:uppercase;color:var(--accent-blue);margin-top:4px">Reduced to the max.</p>'+
          '<p style="margin-top:10px;color:#475569;font-size:0.88rem;line-height:1.6">Pioneirismo em psicometria preditiva suíça e ecossistema de inteligência artificial multi-agente desde 1996.</p>'+
          '<p style="margin-top:8px;font-size:0.8rem;color:#64748b"><strong>Instituto Multidisciplinar de Desenvolvimento Executivo</strong><br>InSyst Master Data Experts AG</p>'+
        '</div>'+
        '<div><h4>Soluções &amp; Ciência</h4>'+
          '<a href="lean-recruiting.html">Lean Recruiting</a>'+
          '<a href="talent-recruiter.html">Talent Recruiter</a>'+
          '<a href="talent-developer.html">Talent Developer</a>'+
          '<a href="agentes-ia.html">Detetives e Agentes de IA</a>'+
          '<a href="ciencia.html">Ciência &amp; Psicometria Suíça</a>'+
        '</div>'+
        '<div><h4>Modelos &amp; Rede</h4>'+
          '<a href="headhunting.html">Headhunting Executivo (Done-For-You)</a>'+
          '<a href="saas.html">Plataforma SaaS para RH (In-House)</a>'+
          '<a href="sobre.html">Sobre o IMDE</a>'+
          '<a href="clientes.html">Clientes &amp; Casos de Sucesso</a>'+
          '<a href="depoimentos.html">Depoimentos Reais</a>'+
          '<a href="parceiros.html">Rede Internacional de Parceiros</a>'+
          '<a href="seja-parceiro.html" style="color:var(--accent-blue)">Seja um Parceiro Certificado →</a>'+
        '</div>'+
        '<div><h4>Contato &amp; Acesso</h4>'+
          '<p style="font-size:0.88rem"><strong>InSyst Master Data Experts AG</strong><br>Hinterbergstrasse 18, CH-6312 Steinhausen — Suíça</p>'+
          '<a href="mailto:ddt_imde@imde.net" style="margin-top:6px">ddt_imde@imde.net</a>'+
          '<a href="tel:+41793003116">+41 79 300 31 16</a>'+
          '<div style="margin-top:14px;display:flex;gap:12px;flex-wrap:wrap">'+
            '<a href="login.html" class="btn" style="padding:8px 16px;font-size:0.8rem;background:var(--primary-dark)">Login Datamanager</a>'+
            '<a href="contato.html" class="btn" style="padding:8px 16px;font-size:0.8rem;background:var(--accent-blue)">Diagnóstico Gratuito</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="footer-bottom">'+
        '<span>© '+new Date().getFullYear()+' IMDE / InSyst Master Data Experts AG. Todos os direitos reservados.</span>'+
        '<span><a href="contato.html">Contato &amp; Impressum</a> · <a href="privacidade.html">Política de Privacidade</a> · <a href="suporte.html">Suporte</a> · <a href="videos.html">Vídeos</a> · <a href="seja-parceiro.html">Programa de Parceiros</a></span>'+
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