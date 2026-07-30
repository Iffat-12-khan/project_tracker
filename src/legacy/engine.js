/* =========================================================
   DATA MODEL — every client owns its own scoped records.
   Clicking into a client/persona always re-renders from here.
   ========================================================= */
const DEFAULT_DATA = {
  clients: {
    northstar: {
      name:"Northstar Retail", industry:"E-commerce", domain:"dm", domainLabel:"DM", dotColor:"var(--accent)",
      status:{label:"Active",cls:"green"}, contractEnds:"Dec 2026",
      projects:[
        {name:"Festive campaign 2026", progress:64, status:{label:"In progress",cls:"green"}, start:"Jun 1, 2026", end:"Jul 22, 2026"},
        {name:"Always-on social & PPC retainer", progress:80, status:{label:"In progress",cls:"green"}, start:"Jan 1, 2026", end:"Dec 31, 2026"}
      ],
      milestones:[
        {title:"Brand audit & media plan", date:"Completed Jun 2", state:"done"},
        {title:"Creative sign-off — festive hero set", date:"Due tomorrow", state:"active"},
        {title:"Campaign go-live", date:"Due Jul 22", state:"upcoming"},
        {title:"Mid-campaign performance review", date:"Due Aug 5", state:"upcoming"}
      ],
      tasks:[
        {id:"nt1", t:"Write festive campaign brief v2", a:"PS", p:"med", status:"To do", sprintId:null, start:null, end:null},
        {id:"nt2", t:"Source influencer shortlist", a:"RD", p:"low", status:"To do", sprintId:"s2", start:null, end:null},
        {id:"nt3", t:"Reels script v2", a:"AK", p:"high", status:"In progress", sprintId:"s1", start:"2026-07-08", end:"2026-07-12"},
        {id:"nt4", t:"Carousel creative — 5 variants", a:"PS", p:"med", status:"In progress", sprintId:"s1", start:"2026-07-09", end:"2026-07-14"},
        {id:"nt5", t:"Landing page copy — festive sale", a:"RD", p:"med", status:"Review", sprintId:"s1", start:"2026-07-10", end:"2026-07-16"},
        {id:"nt6", t:"Media plan approved", a:"RM", p:"low", status:"Done", sprintId:"s1", start:"2026-07-08", end:"2026-07-11"},
        {id:"nt7", t:"Hero banner v1", a:"AK", p:"low", status:"Done", sprintId:null, start:"2026-06-25", end:"2026-06-30"}
      ],
      sprints:[
        {id:"s1", name:"Sprint 1", start:"2026-07-08", end:"2026-07-22", state:"active"},
        {id:"s2", name:"Sprint 2", start:null, end:null, state:"planned"}
      ],
      tickets:[
        {subject:"Ad account access request",desc:"Need admin access to the Meta ad account to launch the carousel set.",priority:"Medium",status:"Open",raisedBy:"Client",assignedTo:"Rohan D.",date:"Jul 13",attachment:null},
        {subject:"Instagram post reported for copyright",desc:"A reel was flagged — need the original licensing proof re-submitted.",priority:"High",status:"Resolved",raisedBy:"Client",assignedTo:"Priya S.",date:"Jul 10",attachment:null}
      ],
      invoices:[
        {id:"#1043",amount:"₹2,10,000",due:"Jul 15, 2026",status:{label:"Sent",cls:"amber"}},
        {id:"#1045",amount:"₹95,000",due:"Jul 30, 2026",status:{label:"Draft",cls:"gray"}}
      ],
      audits:[
        {ts:"Jul 14, 10:42 AM",actor:"Aditya K.",action:"task.status_changed",entity:"Reels script v2 → Review"},
        {ts:"Jul 14, 09:10 AM",actor:"Client",action:"asset.approved",entity:"carousel_slide_02.jpg"},
        {ts:"Jul 13, 04:05 PM",actor:"Rohan D.",action:"budget.updated",entity:"Creative production +₹15,000"},
        {ts:"Jul 13, 11:20 AM",actor:"Riya Mehta",action:"invoice.sent",entity:"#1043 → ₹2,10,000"},
        {ts:"Jul 12, 05:40 PM",actor:"Client",action:"ticket.created",entity:"Ad account access request"}
      ],
      assets:[
        {name:"festive_hero_banner_v3.jpg",type:"JPG",color:"var(--accent)",status:{label:"Approved",cls:"green"}},
        {name:"reel_diwali_teaser.mp4",type:"MP4",color:"var(--clay)",status:{label:"Pending",cls:"amber"}},
        {name:"carousel_slide_02.jpg",type:"JPG",color:"var(--accent-strong)",status:{label:"Approved",cls:"green"}}
      ],
      calendar:{3:[["post","IG post"]],5:[["meet","Client call"]],9:[["deadline","Creative due"]],14:[["post","Reel drop"],["meet","Review"]],20:[["deadline","Campaign go-live"]],25:[["post","Story series"]]},
      reports:{organic:"18.4K",organicD:"+6% MoM",engage:"5.1%",engageD:"+0.4pt",roas:"3.6x",roasD:"+0.2x",leads:"84",leadsD:"+11% MoM"},
      budget:[
        {cat:"Media spend",planned:400000,actual:380000},
        {cat:"Creative production",planned:90000,actual:120000},
        {cat:"Influencer fees",planned:75000,actual:40000},
        {cat:"Tools & platforms",planned:20000,actual:12000}
      ]
    },
    vantage: {
      name:"Vantage Logistics", industry:"B2B / Supply chain", domain:"it", domainLabel:"IT", dotColor:"var(--clay)",
      status:{label:"Active",cls:"green"}, contractEnds:"Mar 2027",
      projects:[{name:"Website rebuild — logistics portal", progress:45, status:{label:"In progress",cls:"green"}, start:"May 15, 2026", end:"Aug 20, 2026"}],
      milestones:[
        {title:"Discovery & wireframes", date:"Completed May 20", state:"done"},
        {title:"Core portal build", date:"In progress", state:"active"},
        {title:"QA + client UAT", date:"Due Aug 1", state:"upcoming"},
        {title:"Go-live", date:"Due Aug 20", state:"upcoming"}
      ],
      tasks:[
        {id:"vt1", t:"Set up staging environment", a:"DV", p:"med", status:"To do", sprintId:null, start:null, end:null},
        {id:"vt2", t:"Fix landing page CTA on mobile", a:"DV", p:"high", status:"In progress", sprintId:"s1", start:"2026-07-02", end:"2026-07-08"},
        {id:"vt3", t:"Build shipment tracking module", a:"TL", p:"high", status:"In progress", sprintId:"s1", start:"2026-07-01", end:"2026-07-14"},
        {id:"vt4", t:"QA pass — checkout flow", a:"QA", p:"med", status:"Review", sprintId:"s1", start:"2026-07-06", end:"2026-07-15"},
        {id:"vt5", t:"Wireframes approved", a:"TL", p:"low", status:"Done", sprintId:null, start:"2026-05-18", end:"2026-05-22"}
      ],
      sprints:[
        {id:"s1", name:"Sprint 1", start:"2026-07-01", end:"2026-07-15", state:"active"},
        {id:"s2", name:"Sprint 2", start:null, end:null, state:"planned"}
      ],
      tickets:[
        {subject:"Landing page CTA button broken on mobile",desc:"CTA on the pricing page doesn't register taps on iOS Safari.",priority:"High",status:"In progress",raisedBy:"Client",assignedTo:"Aditya K.",date:"Jul 14",attachment:"cta_bug_screenshot.png"}
      ],
      invoices:[{id:"#1044",amount:"₹1,45,000",due:"Jul 5, 2026",status:{label:"Overdue",cls:"red"}}],
      audits:[
        {ts:"Jul 14, 06:22 PM",actor:"Client",action:"ticket.created",entity:"Landing page CTA broken"},
        {ts:"Jul 13, 11:15 AM",actor:"Team Lead",action:"task.status_changed",entity:"Shipment tracking module → In progress"},
        {ts:"Jul 12, 09:05 AM",actor:"Riya Mehta",action:"invoice.status_changed",entity:"#1044 → Overdue"}
      ],
      assets:[{name:"landing_page_wireframe.ai",type:"AI",color:"#788B3C",status:{label:"Draft",cls:"gray"}},{name:"product_demo_final.mp4",type:"MP4",color:"var(--clay)",status:{label:"Approved",cls:"green"}}],
      calendar:{4:[["meet","Sprint review"]],10:[["deadline","Staging deploy"]],17:[["meet","Client demo"]],28:[["deadline","QA sign-off"]]},
      reports:{organic:"—",organicD:"Not tracked (IT project)",engage:"—",engageD:"—",roas:"—",roasD:"—",leads:"—",leadsD:"—"},
      budget:[
        {cat:"Development",planned:600000,actual:410000},
        {cat:"Design",planned:120000,actual:95000},
        {cat:"QA & tooling",planned:60000,actual:60000}
      ]
    },
    bloom: {
      name:"Bloom Wellness", industry:"D2C Health", domain:"both", domainLabel:"DM + IT", dotColor:"var(--amber)",
      status:{label:"Renewal due",cls:"amber"}, contractEnds:"Sep 2026",
      projects:[{name:"Brand refresh microsite", progress:20, status:{label:"Planning",cls:"gray"}, start:"Jun 20, 2026", end:"Aug 10, 2026"}],
      milestones:[
        {title:"Brand guidelines finalized", date:"Completed Jun 28", state:"done"},
        {title:"Microsite wireframes", date:"Due Jul 20", state:"active"},
        {title:"Content & design build", date:"Due Aug 10", state:"upcoming"}
      ],
      tasks:[
        {id:"bw1", t:"Draft microsite sitemap", a:"AK", p:"low", status:"To do", sprintId:"s1", start:null, end:null},
        {id:"bw2", t:"Logo lockup — dark variant", a:"AK", p:"med", status:"In progress", sprintId:"s1", start:null, end:null},
        {id:"bw3", t:"Brand guidelines v2", a:"RM", p:"low", status:"Done", sprintId:null, start:"2026-06-24", end:"2026-06-27"}
      ],
      sprints:[
        {id:"s1", name:"Sprint 1", start:null, end:null, state:"planned"}
      ],
      tickets:[{subject:"Need updated brand guidelines PDF",desc:"Marketing team needs the latest PDF for a partner deck.",priority:"Low",status:"Open",raisedBy:"Client",assignedTo:"Priya S.",date:"Jul 12",attachment:null}],
      invoices:[{id:"#1042",amount:"₹85,000",due:"Jun 30, 2026",status:{label:"Paid",cls:"green"}}],
      audits:[{ts:"Jul 14, 09:58 AM",actor:"Riya Mehta",action:"invoice.status_changed",entity:"#1042 → Paid"}],
      assets:[{name:"logo_lockup_dark.png",type:"PNG",color:"var(--amber)",status:{label:"Approved",cls:"green"}},{name:"brand_guidelines_v2.pdf",type:"PDF",color:"#5F5E5A",status:{label:"Approved",cls:"green"}},{name:"insta_story_template.png",type:"PNG",color:"var(--amber)",status:{label:"Pending",cls:"amber"}}],
      calendar:{6:[["meet","Kickoff call"]],15:[["deadline","Wireframes due"]],22:[["post","Teaser post"]]},
      reports:{organic:"6.2K",organicD:"+3% MoM",engage:"4.1%",engageD:"+0.1pt",roas:"—",roasD:"Pre-launch",leads:"12",leadsD:"+2 MoM"},
      budget:[{cat:"Design & content",planned:150000,actual:38000},{cat:"Dev build",planned:220000,actual:0}]
    },
    ferro: {
      name:"Ferro Build Co.", industry:"Construction", domain:"dm", domainLabel:"DM", dotColor:"var(--text-3)",
      status:{label:"Paused",cls:"gray"}, contractEnds:"Jan 2026",
      projects:[], milestones:[], tasks:[], sprints:[],
      tickets:[], invoices:[], audits:[], assets:[], calendar:{},
      reports:{organic:"—",organicD:"Paused",engage:"—",engageD:"—",roas:"—",roasD:"—",leads:"—",leadsD:"—"}, budget:[]
    }
  },
  employees: {
    aditya:{name:"Aditya K.",initials:"AK",title:"Content Writer",clients:["northstar","bloom"],tasks:[
      {title:"Finalize Reels script v2",due:"Today",priority:"High",done:false,link:{clientId:"northstar",taskId:"nt3"}},
      {title:"Draft microsite sitemap copy",due:"Jul 18",priority:"Medium",done:false,link:{clientId:"bloom",taskId:"bw1"}},
      {title:"Media plan recap doc",due:"Jul 10",priority:"Low",done:true}
    ]},
    priya:{name:"Priya S.",initials:"PS",title:"Graphic Designer",clients:["northstar","vantage"],tasks:[
      {title:"5 carousel creative variants",due:"Tomorrow",priority:"High",done:false,link:{clientId:"northstar",taskId:"nt4"}},
      {title:"Logo lockup dark variant review",due:"Jul 19",priority:"Medium",done:false}
    ]},
    rohan:{name:"Rohan D.",initials:"RD",title:"PPC Specialist",clients:["northstar","vantage","bloom"],tasks:[
      {title:"Landing page copy — festive sale",due:"Jul 17",priority:"Medium",done:false,link:{clientId:"northstar",taskId:"nt5"}},
      {title:"Influencer shortlist sourcing",due:"Jul 21",priority:"Low",done:false,link:{clientId:"northstar",taskId:"nt2"}}
    ]}
  },
  employeeTickets:[
    {subject:"Need Figma seat upgrade",raisedBy:"Priya S.",priority:"Low",status:"Open"},
    {subject:"Laptop running out of storage",raisedBy:"Aditya K.",priority:"Medium",status:"In progress"},
    {subject:"Access to Vantage ad account",raisedBy:"Rohan D.",priority:"High",status:"Resolved"}
  ],
  adminActivity:[
    {text:'Aditya moved <b>"Reels script v2"</b> to Review',meta:"Northstar Retail · 12 min ago"},
    {text:"Invoice #1042 marked Paid",meta:"Bloom Wellness · 1 hr ago"},
    {text:"Client approved carousel creative",meta:"Northstar Retail · 2 hrs ago"},
    {text:'New ticket raised: "Landing page CTA broken"',meta:"Vantage Logistics · 3 hrs ago"}
  ],
  adminDeadlines:[
    {text:"Creative sign-off — festive hero set",meta:"Northstar Retail · due tomorrow",pill:"Due soon",cls:"clay"},
    {text:"QA sign-off — logistics portal",meta:"Vantage Logistics · due in 3 days",pill:"Upcoming",cls:"amber"},
    {text:"Microsite wireframes review",meta:"Bloom Wellness · due in 5 days",cls:"gray",pill:"Scheduled"},
    {text:"Website landing page launch",meta:"Northstar Retail · due in 6 days",cls:"gray",pill:"Scheduled"}
  ]
};

const STORAGE_KEY = "project_tracker_data";

function loadSavedData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && parsed.clients) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load project tracker data from localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
  } catch (e) {
    console.error("Failed to save project tracker data to localStorage:", e);
  }
}

function resetData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  } catch (e) {
    console.error("Failed to reset localStorage data:", e);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", saveData);
  window.addEventListener("pagehide", saveData);
}

const DATA = loadSavedData();

/* =========================================================
   STATE
   ========================================================= */
const state = { role:"admin", persona:null, currentClient:null, currentTab:null, empTicketFilter:"all", empTicketSource:"client", empKanbanClient:null, modalMode:null, modalOpts:{}, kanbanView:"board" };

const titles = {
  "admin-dashboard":["Dashboard","Agency-wide overview across all clients"],
  "admin-clients":["Clients","Click into a client to see their full project workspace"],
  "admin-employees":["Employees","Manage your team and what they're currently assigned to"],
  "admin-employee-support":["Employee support","Internal requests raised by your team"],
  "client-detail":["","" ],
  "emp-tickets":["Tickets","Client tickets from your accounts, and your own internal requests"],
  "emp-kanban":["Kanban board","Track and update work items across your assigned clients"],
  "client-dashboard":["Dashboard","Your projects at a glance"],
  "client-projects":["My projects","Full detail on every project we're running for you"],
  "client-calendar":["Calendar","Upcoming posts, meetings and deliverables"],
  "client-tickets":["Support tickets","Raise and track requests with our team"]
};

/* =========================================================
   NAV DEFINITIONS PER ROLE
   ========================================================= */
const NAV = {
  admin:[
    {group:"Overview", items:[["dashboard","admin-dashboard",iconGrid()]]},
    {group:"Agency", items:[["clients","admin-clients",iconClients()],["employees","admin-employees",iconEmployee()]]},
    {group:"Support", items:[["employee-support","admin-employee-support",iconTicket(),true]]}
  ],
  employee:[
    {group:"Work", items:[["tickets","emp-tickets",iconTicket()]]},
    {group:"Work", items:[["kanban","emp-kanban",iconGrid()]]}
  ],
  client:[
    {group:"Overview", items:[["dashboard","client-dashboard",iconGrid()]]},
    {group:"Projects", items:[["myprojects","client-projects",iconClients()]]},
    {group:"Schedule", items:[["calendar","client-calendar",iconCal()]]},
    {group:"Support", items:[["tickets","client-tickets",iconTicket()]]}
  ]
};
function iconGrid(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>';}
function iconClients(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="8.5" r="2.6"/><path d="M15.5 14.2c2.8.3 4.7 2.3 4.7 5.3"/></svg>';}
function iconTicket(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v9a2 2 0 0 1-2 2H9l-5 4z"/></svg>';}
function iconCal(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>';}
function iconEmployee(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 18c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5"/></svg>';}

function renderNav(){
  const wrap = document.getElementById('nav-container');
  wrap.innerHTML='';
  NAV[state.role].forEach(sec=>{
    const label = document.createElement('div'); label.className='nav-group-label'; label.textContent=sec.group;
    wrap.appendChild(label);
    sec.items.forEach(([view,id,icon,hasBadge])=>{
      const el = document.createElement('div');
      el.className='nav-item'; el.dataset.view=id;
      el.innerHTML = icon + capLabel(view) + (hasBadge?` <span class="badge">${DATA.employeeTickets.filter(t=>t.status!=='Resolved').length}</span>`:'');
      el.onclick = ()=>setView(id, el);
      wrap.appendChild(el);
    });
  });
}
function capLabel(v){
  const map={dashboard:"Dashboard",clients:"Clients",employees:"Employees","employee-support":"Employee support",calendar:"Calendar",tickets:"Support tickets",myprojects:"My projects",kanban:"Kanban board"};
  return map[v]||v;
}

/* =========================================================
   VIEW SWITCHING
   ========================================================= */
function setView(id, el){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const target = document.getElementById('view-'+id);
  if(target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  else { const match = document.querySelector(`.nav-item[data-view="${id}"]`); if(match) match.classList.add('active'); }

  const t = titles[id];
  if(t && t[0]){ document.getElementById('page-title').textContent=t[0]; document.getElementById('page-sub').textContent=t[1]; }

  updateTopbarButtons(id);

  if(id==='admin-dashboard') renderAdminDashboard();
  if(id==='admin-clients') renderAdminClients();
  if(id==='admin-employees') renderAdminEmployees();
  if(id==='admin-employee-support') renderEmpTickets();
  if(id==='emp-tickets') renderEmpTicketsPage();
  if(id==='emp-kanban') renderEmpKanbanPage();
  if(id==='client-dashboard') renderClientDashboard();
  if(id==='client-projects') renderClientProjects();
  if(id==='client-calendar') renderClientCalendarFull();
  if(id==='client-tickets') renderClientTickets();
}

function updateTopbarButtons(id){
  const primary = document.getElementById('topbar-primary-btn');
  const secondary = document.getElementById('topbar-secondary-btn');
  primary.style.display='none'; secondary.style.display='none';
  if(id==='client-tickets'){
    primary.style.display='inline-block'; primary.textContent='+ Raise ticket';
    primary.onclick = ()=>openModal('client-ticket');
  }
  if(id==='emp-tickets'){
    primary.style.display='inline-block'; primary.textContent='+ Raise internal ticket';
    primary.onclick = ()=>openModal('internal-ticket');
  }
  if(id==='admin-dashboard'){
    secondary.style.display='inline-block'; secondary.textContent='+ Assign task';
    secondary.onclick = ()=>openModal('assign-task');
  }
  if(id==='admin-clients'){
    secondary.style.display='inline-block'; secondary.textContent='+ Assign task';
    secondary.onclick = ()=>openModal('assign-task');
    primary.style.display='inline-block'; primary.textContent='+ New client';
    primary.onclick = ()=>openModal('new-client');
  }
  if(id==='admin-employees'){
    primary.style.display='inline-block'; primary.textContent='+ Add employee';
    primary.onclick = ()=>openModal('new-employee');
  }
  if(id==='admin-employee-support'){
    primary.style.display='inline-block'; primary.textContent='+ Assign task';
    primary.onclick = ()=>openModal('assign-task');
  }
}

/* =========================================================
   ROLE + PERSONA SWITCHING
   ========================================================= */
function setRole(role, el){
  state.role = role;
  document.querySelectorAll('.role-tier button').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderNav();

  const personaWrap = document.getElementById('persona-wrap');
  const select = document.getElementById('persona-select');
  select.innerHTML='';
  if(role==='admin'){
    personaWrap.style.display='none';
    state.persona=null;
    setWho('Riya Mehta','Super Admin','RM');
    setView('admin-dashboard');
  } else if(role==='employee'){
    personaWrap.style.display='block';
    document.getElementById('persona-label').textContent='Acting as';
    Object.entries(DATA.employees).forEach(([id,e])=>{
      const o=document.createElement('option'); o.value=id; o.textContent=`${e.name} — ${e.title}`; select.appendChild(o);
    });
    setPersona(Object.keys(DATA.employees)[0]);
    setView('emp-tickets');
  } else {
    personaWrap.style.display='block';
    document.getElementById('persona-label').textContent='Viewing as client';
    Object.entries(DATA.clients).forEach(([id,c])=>{
      if(!c.projects) return;
      const o=document.createElement('option'); o.value=id; o.textContent=c.name; select.appendChild(o);
    });
    setPersona('northstar');
    setView('client-dashboard');
  }
}
function setPersona(id){
  state.persona = id;
  if(state.role==='employee'){
    const e = DATA.employees[id];
    setWho(e.name, e.title, e.initials);
    if(document.getElementById('view-emp-tickets').classList.contains('active')) renderEmpTicketsPage();
    if(document.getElementById('view-emp-kanban').classList.contains('active')) renderEmpKanbanPage();
  } else if(state.role==='client'){
    const c = DATA.clients[id];
    setWho('Client contact', c.name, c.name.split(' ').map(w=>w[0]).slice(0,2).join(''));
    if(document.getElementById('view-client-dashboard').classList.contains('active')) renderClientDashboard();
    if(document.getElementById('view-client-projects').classList.contains('active')) renderClientProjects();
    if(document.getElementById('view-client-calendar').classList.contains('active')) renderClientCalendarFull();
    if(document.getElementById('view-client-tickets').classList.contains('active')) renderClientTickets();
  }
  document.getElementById('persona-select').value = id;
}
function setWho(name, role, initials){
  document.getElementById('who-name').textContent=name;
  document.getElementById('who-role').textContent=role;
  document.getElementById('who-avatar').textContent=initials;
}

/* =========================================================
   ADMIN — DASHBOARD / CLIENTS / EMPLOYEE SUPPORT
   ========================================================= */
function renderAdminDashboard(){
  document.getElementById('admin-deadlines').innerHTML = DATA.adminDeadlines.map(d=>
    `<div class="row-item"><div>${d.text}<div class="meta">${d.meta}</div></div><span class="pill ${d.cls}">${d.pill}</span></div>`).join('');
  document.getElementById('admin-activity').innerHTML = DATA.adminActivity.map(a=>
    `<div class="row-item"><div>${a.text}<div class="meta">${a.meta}</div></div></div>`).join('');
}
function renderAdminClients(){
  document.getElementById('admin-clients-rows').innerHTML = Object.entries(DATA.clients).map(([id,c])=>
    `<tr class="clickable" onclick="openClientDetail('${id}','admin')">
      <td><div class="name-cell"><span class="dot" style="background:${c.dotColor}"></span>${c.name}</div></td>
      <td>${c.industry}</td><td>${c.projects.length}</td><td>${c.contractEnds}</td>
      <td><span class="pill ${c.status.cls}">${c.status.label}</span></td>
      <td>${ticketEditIcon(`openEditClient('${id}')`,'Edit client')}${ticketDeleteIcon(`deleteClient('${id}')`,'Delete client')}</td>
    </tr>`).join('');
}
function renderAdminEmployees(){
  document.getElementById('admin-employees-rows').innerHTML = Object.entries(DATA.employees).map(([id,e])=>{
    const openTasks = e.tasks.filter(t=>!t.done).length;
    return `<tr>
      <td><div class="name-cell"><span class="init" style="width:24px;height:24px;border-radius:50%;background:var(--accent-soft);color:var(--accent-strong);font-size:10.5px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">${e.initials}</span>${e.name}</div></td>
      <td>${e.title}</td>
      <td>${e.clients.length ? e.clients.map(cid=>DATA.clients[cid].name).join(', ') : '<span class="empty-hint" style="padding:0;">None yet</span>'}</td>
      <td>${openTasks}</td>
      <td>${ticketEditIcon(`openEditEmployee('${id}')`,'Edit employee')}${ticketDeleteIcon(`deleteEmployee('${id}')`,'Delete employee')}</td>
    </tr>`;
  }).join('');
}
function deleteClient(id){
  const client = DATA.clients[id];
  if(!client) return;
  customConfirm(`Delete ${client.name}? This removes the client and all of their tickets, tasks, events, and files. This cannot be undone.`, ()=>{
    delete DATA.clients[id];
    Object.values(DATA.employees).forEach(emp=>{
      emp.clients = emp.clients.filter(cid=>cid!==id);
      emp.tasks = emp.tasks.filter(t=>!(t.link && t.link.clientId===id));
    });
    if(state.currentClient===id) state.currentClient = null;
    saveData();
    renderAdminClients();
    renderNav();
    if(document.getElementById('view-client-detail').classList.contains('active')){
      setView('admin-clients');
    }
  }, {title:'Delete client?'});
}
function deleteEmployee(id){
  const emp = DATA.employees[id];
  if(!emp) return;
  customConfirm(`Delete ${emp.name}? This removes them from the team. Their existing task assignments will be unassigned. This cannot be undone.`, ()=>{
    delete DATA.employees[id];
    saveData();
    renderAdminEmployees();
  }, {title:'Delete employee?'});
}
function filterEmpTickets(f, el){
  state.empTicketFilter = f;
  document.querySelectorAll('#view-admin-employee-support .ftab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderEmpTickets();
}
function renderEmpTickets(){
  const list = DATA.employeeTickets.filter(t=> state.empTicketFilter==='all' || t.status===state.empTicketFilter);
  document.getElementById('admin-emp-tickets-rows').innerHTML = list.length ? list.map(t=>{
    const idx = DATA.employeeTickets.indexOf(t);
    return `<tr><td>${t.subject}</td><td>${t.raisedBy}</td><td><span class="pill ${prioCls(t.priority)}">${t.priority}</span></td>
     <td><span class="pill ${statusCls(t.status)}">${t.status}</span></td><td>${ticketEditIcon(`openEditInternalTicket(${idx})`,'Edit ticket')}</td></tr>`;
  }).join('')
    : `<tr><td colspan="5"><div class="empty-hint">No tickets in this filter.</div></td></tr>`;
}
function prioCls(p){return p==='High'?'red':p==='Medium'?'amber':'gray';}
function statusCls(s){return s==='Resolved'?'green':s==='In progress'?'amber':'gray';}
function ticketEditIcon(onclickAttr, title='Edit'){
  return `<button type="button" class="ticket-edit-btn" title="${title}" onclick="event.stopPropagation();${onclickAttr}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4.2-1 11-11-3.2-3.2-11 11z"/><path d="M14 6l3.2 3.2"/></svg></button>`;
}
const TRASH_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>`;
function ticketDeleteIcon(onclickAttr, title='Delete'){
  return `<button type="button" class="ticket-delete-btn" title="${title}" onclick="event.stopPropagation();${onclickAttr}">${TRASH_SVG}</button>`;
}
/* Audit is a client<->admin channel only — any entry authored by an
   employee (task/status updates, internal actions) is excluded so the
   trail never surfaces employee activity, only what the client and
   admin did/said to each other. */
function isClientAdminAudit(a){
  const adminNames = ['Riya Mehta','Admin','Super Admin'];
  return a.actor === 'Client' || adminNames.includes(a.actor);
}
function cycleStatus(idx){
  const order=['Open','In progress','Resolved'];
  const item = DATA.employeeTickets[idx];
  if(!item) return;
  item.status = order[(order.indexOf(item.status)+1)%order.length];
  saveData();
  renderEmpTickets();
  renderNav();
}

/* =========================================================
   SHARED CLIENT DETAIL (Admin sees all tabs, Employee sees a subset)
   ========================================================= */
const ADMIN_TABS = [["overview","Overview"],["tickets","Tickets"],["invoices","Invoices"],["audits","Audits"],["kanban","Kanban board"],["assets","Asset library"],["calendar","Calendar"],["reports","Reports"],["budget","Budget"]];
const EMP_TABS   = [["tickets","Tickets"],["kanban","Kanban board"],["assets","Asset library"],["calendar","Calendar"],["reports","Reports"]];

function openClientDetail(clientId, fromRole){
  state.currentClient = clientId;
  state.detailFromRole = fromRole;
  state.kanbanView = 'board';
  const c = DATA.clients[clientId];
  document.getElementById('cd-dot').style.background = c.dotColor;
  document.getElementById('cd-name').textContent = c.name;
  document.getElementById('cd-meta').textContent = `${c.industry} · Contract ends ${c.contractEnds}`;
  document.getElementById('cd-domain-pill').textContent = c.domainLabel;
  document.getElementById('cd-domain-pill').className = 'pill ' + (c.domain==='it'?'clay':c.domain==='both'?'amber':'green');

  const tabs = fromRole==='admin' ? ADMIN_TABS : EMP_TABS;
  document.getElementById('cd-tabs').innerHTML = tabs.map(([id,label],i)=>
    `<div class="cd-tab${i===0?' active':''}" data-tab="${id}" onclick="setClientTab('${id}',this)">${label}</div>`).join('');
  setView('client-detail');
  setClientTab(tabs[0][0], document.querySelector('.cd-tab'));
}
function backToClientList(){
  setView(state.detailFromRole==='admin' ? 'admin-clients' : 'emp-kanban');
}
function setClientTab(tab, el){
  state.currentTab = tab;
  document.querySelectorAll('.cd-tab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  const c = DATA.clients[state.currentClient];
  const host = document.getElementById('cd-tab-content');

  if(tab==='overview'){
    host.innerHTML = `<div class="grid-2">
      <div class="card"><h3>Projects ${state.detailFromRole==='admin'?'<a onclick="openModal(\'new-project\')">+ Add project</a>':''}</h3><div>${(c.projects.length?c.projects.map((p,idx)=>projectRow(p,state.currentClient,idx)).join(''):'<div class="empty-hint">No active projects yet.</div>')}</div></div>
      <div class="card"><h3>Milestones</h3><div class="milestone-list">${milestonesHtml(c.milestones)}</div></div>
    </div>`;
  }
  if(tab==='tickets'){
    host.innerHTML = `<table><tr><th>Subject</th><th>Priority</th><th>Assigned to</th><th>Status</th><th></th></tr>
      ${c.tickets.length? c.tickets.map((t,i)=>`<tr><td>${t.subject}</td><td><span class="pill ${prioCls(t.priority)}">${t.priority}</span></td><td>${t.assignedTo}</td>
        <td><span class="pill ${statusCls(t.status)}">${t.status}</span></td><td>${ticketEditIcon(`openEditClientTicket('${state.currentClient}',${i})`,'Edit ticket')}</td></tr>`).join('') : `<tr><td colspan="5"><div class="empty-hint">No tickets for this client.</div></td></tr>`}
    </table>`;
  }
  if(tab==='invoices'){
    host.innerHTML = `<table><tr><th>Invoice</th><th>Amount</th><th>Due date</th><th>Status</th></tr>
      ${c.invoices.length? c.invoices.map(i=>`<tr><td>${i.id}</td><td>${i.amount}</td><td>${i.due}</td><td><span class="pill ${i.status.cls}">${i.status.label}</span></td></tr>`).join(''):`<tr><td colspan="4"><div class="empty-hint">No invoices yet.</div></td></tr>`}
    </table>`;
  }
  if(tab==='audits'){
    const clientAdminAudits = c.audits.filter(isClientAdminAudit);
    host.innerHTML = `<div class="empty-hint" style="padding:0 0 12px;">Showing client ↔ admin activity only — internal employee actions are not part of this trail.</div>
      <table><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Entity</th></tr>
      ${clientAdminAudits.length? clientAdminAudits.map(a=>`<tr><td>${a.ts}</td><td>${a.actor}</td><td>${a.action}</td><td>${a.entity}</td></tr>`).join(''):`<tr><td colspan="4"><div class="empty-hint">No client/admin audit events yet.</div></td></tr>`}
    </table>`;
  }
  if(tab==='kanban'){
    const isAdmin = state.detailFromRole==='admin';
    const toggleHtml = isAdmin ? `<div class="filter-tabs">
      <div class="ftab ${state.kanbanView!=='sprints'?'active':''}" onclick="setKanbanView('board')">Board</div>
      <div class="ftab ${state.kanbanView==='sprints'?'active':''}" onclick="setKanbanView('sprints')">Sprints</div>
    </div>` : '';
    if(isAdmin && state.kanbanView==='sprints'){
      host.innerHTML = toggleHtml + `<div id="cd-kanban-sprints"></div>`;
      renderKanbanSprints(document.getElementById('cd-kanban-sprints'), state.currentClient);
    } else {
      host.innerHTML = toggleHtml + `${isAdmin?'<div style="display:flex;justify-content:flex-end;margin:0 0 10px;"><button class="btn sm" onclick="openModal(\'assign-task\',{lockClient:true})">+ Assign task</button></div>':''}<div class="kanban-cols" id="cd-kanban"></div>`;
      renderKanban(document.getElementById('cd-kanban'), state.currentClient, {allowAddColumn:isAdmin, allowEdit:isAdmin});
    }
  }
  if(tab==='assets'){
    host.innerHTML = `<div class="asset-grid">${c.assets.length? c.assets.map((a,i)=>
      `<div class="asset-card" onclick="toggleAssetApproval('${state.currentClient}',${i})"><div class="asset-thumb" style="background:${a.color}">${a.type}</div>
        <div class="info"><div class="fname">${a.name}</div><div class="ftag">${c.name} · <span class="pill ${a.status.cls}" style="padding:1px 7px;">${a.status.label}</span></div></div></div>`).join('')
      : '<div class="empty-hint">No assets uploaded yet.</div>'}</div>`;
  }
  if(tab==='calendar'){
    const isAdmin = state.detailFromRole==='admin';
    const isDM = c.domain==='dm' || c.domain==='both';
    const canAdd = isAdmin && isDM;
    const addEventBtn = canAdd
      ? `<div style="display:flex;justify-content:flex-end;margin-bottom:10px;"><button class="btn sm" onclick="openModal('new-event',{clientId:'${state.currentClient}'})">+ Add event</button></div>`
      : '';
    host.innerHTML = addEventBtn + `<div class="cal-grid" id="cd-cal"></div>
      <div class="cal-legend"><span><span class="cal-ev post" style="padding:2px 8px;">■</span> Post</span><span><span class="cal-ev meet" style="padding:2px 8px;">■</span> Meeting</span><span><span class="cal-ev deadline" style="padding:2px 8px;">■</span> Deadline</span></div>`;
    renderCalendar(document.getElementById('cd-cal'), c.calendar, canAdd ? {clientId:state.currentClient} : {});
  }
  if(tab==='reports'){
    const r = c.reports;
    host.innerHTML = `<div class="kpi-row">
      <div class="kpi"><div class="label">Organic traffic</div><div class="value">${r.organic}</div><div class="delta up">${r.organicD}</div></div>
      <div class="kpi"><div class="label">Avg. engagement</div><div class="value">${r.engage}</div><div class="delta up">${r.engageD}</div></div>
      <div class="kpi"><div class="label">ROAS</div><div class="value">${r.roas}</div><div class="delta up">${r.roasD}</div></div>
      <div class="kpi"><div class="label">Leads generated</div><div class="value">${r.leads}</div><div class="delta up">${r.leadsD}</div></div>
    </div>`;
  }
  if(tab==='budget'){
    host.innerHTML = c.budget.length ? `<div class="card" style="max-width:640px;">${c.budget.map(b=>{
      const pct = Math.min(100, Math.round(b.actual/b.planned*100));
      const over = b.actual > b.planned;
      return `<div class="budget-row"><div class="top"><span>${b.cat}</span><b>₹${b.actual.toLocaleString('en-IN')} / ₹${b.planned.toLocaleString('en-IN')}</b></div>
        <div class="bbar"><div class="actual ${over?'over':''}" style="width:${pct}%"></div></div></div>`;
    }).join('')}</div>` : `<div class="empty-hint">No budget lines for this client yet.</div>`;
  }
}
function projectRow(p, clientId, idx){
  const canEdit = state.detailFromRole==='admin';
  return `<div class="row-item"><div>${p.name}<div class="meta">${p.progress}% complete</div></div>
    <div style="display:flex;align-items:center;gap:6px;">
      ${projectStatusPill(p)}
      ${canEdit ? ticketEditIcon(`openEditProject('${clientId}',${idx})`,'Edit project') : ''}
    </div>
  </div>`;
}
function milestonesHtml(ms){
  if(!ms.length) return '<div class="empty-hint">No milestones set yet.</div>';
  return ms.map(m=>`<div class="milestone-item ${m.state}"><div class="mdot"></div><div class="mtitle">${m.title}</div><div class="mdate">${m.date}</div></div>`).join('');
}
function toggleAssetApproval(clientId, assetIdx){
  const a = DATA.clients[clientId].assets[assetIdx];
  if(!a) return;
  const order=[{label:"Draft",cls:"gray"},{label:"Pending",cls:"amber"},{label:"Approved",cls:"green"}];
  const idx = order.findIndex(o=>o.label===a.status.label);
  a.status = order[(idx+1)%order.length];
  saveData();
  setClientTab('assets', document.querySelector('.cd-tab.active'));
}
function cycleClientTicketStatus(clientId, idx){
  const order=['Open','In progress','Resolved'];
  const t = DATA.clients[clientId].tickets[idx];
  if(!t) return;
  t.status = order[(order.indexOf(t.status)+1)%order.length];
  saveData();
  setClientTab('tickets', document.querySelector('.cd-tab.active'));
}
/* ---- Ticket editing: clicking a ticket row opens a dialog pre-filled
   with its current data; saving writes the edits back in place and
   refreshes whichever list is currently on screen. ---- */
function openEditClientTicket(clientId, idx){
  const t = DATA.clients[clientId].tickets[idx];
  if(!t) return;
  openModal('edit-client-ticket', {clientId, idx, prefill:{
    subject:t.subject, desc:t.desc||'', priority:t.priority, assignedTo:t.assignedTo||'', status:t.status
  }});
}
function saveClientTicketEdit(vals){
  const {clientId, idx} = state.modalOpts;
  const t = DATA.clients[clientId] && DATA.clients[clientId].tickets[idx];
  if(!t || !vals.subject.trim()) return false;
  t.subject = vals.subject.trim();
  t.desc = vals.desc;
  t.priority = vals.priority;
  t.assignedTo = vals.assignedTo || 'Unassigned';
  t.status = vals.status;
  saveData();
  if(document.getElementById('view-client-detail').classList.contains('active') && state.currentTab==='tickets'){
    setClientTab('tickets', document.querySelector('.cd-tab.active'));
  }
  if(document.getElementById('view-emp-tickets').classList.contains('active')) renderEmpTicketsPage();
  return true;
}
function openEditInternalTicket(idx){
  const t = DATA.employeeTickets[idx];
  if(!t) return;
  openModal('edit-internal-ticket', {idx, prefill:{subject:t.subject, priority:t.priority, status:t.status}});
}
function saveInternalTicketEdit(vals){
  const {idx} = state.modalOpts;
  const t = DATA.employeeTickets[idx];
  if(!t || !vals.subject.trim()) return false;
  t.subject = vals.subject.trim();
  t.priority = vals.priority;
  t.status = vals.status;
  saveData();
  renderNav();
  if(document.getElementById('view-admin-employee-support').classList.contains('active')) renderEmpTickets();
  if(document.getElementById('view-emp-tickets').classList.contains('active')) renderEmpTicketsPage();
  return true;
}
function openEditMyTicket(clientId, idx){
  const t = DATA.clients[clientId].tickets[idx];
  if(!t) return;
  openModal('edit-my-ticket', {clientId, idx, prefill:{subject:t.subject, desc:t.desc||'', priority:t.priority}});
}
function saveMyTicketEdit(vals){
  const {clientId, idx} = state.modalOpts;
  const t = DATA.clients[clientId] && DATA.clients[clientId].tickets[idx];
  if(!t || !vals.subject.trim()) return false;
  t.subject = vals.subject.trim();
  t.desc = vals.desc;
  t.priority = vals.priority;
  saveData();
  if(document.getElementById('view-client-tickets').classList.contains('active')) renderClientTickets();
  return true;
}

/* =========================================================
   EMPLOYEE PORTAL — scoped to just Tickets + Kanban board.
   No client list / client records are exposed to employees.
   ========================================================= */
function setEmpTicketSource(src, el){
  state.empTicketSource = src;
  document.querySelectorAll('#view-emp-tickets .ftab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderEmpTicketsPage();
}
function renderEmpTicketsPage(){
  const e = DATA.employees[state.persona];
  const src = state.empTicketSource || 'client';
  const head = document.getElementById('emp-tickets-head');
  const rows = document.getElementById('emp-tickets-rows');
  if(src==='client'){
    head.innerHTML = `<th>Subject</th><th>Client</th><th>Priority</th><th>Status</th><th></th>`;
    const clientTix = [];
    e.clients.forEach(cid=>{
      DATA.clients[cid].tickets.forEach((t,i)=> clientTix.push({clientId:cid, clientName:DATA.clients[cid].name, idx:i, ...t}));
    });
    rows.innerHTML = clientTix.length ? clientTix.map(t=>
      `<tr><td>${t.subject}<div class="meta" style="color:var(--text-2);font-size:11.5px;margin-top:2px;">${t.desc||''}</div></td>
        <td>${t.clientName}</td>
        <td><span class="pill ${prioCls(t.priority)}">${t.priority}</span></td>
        <td><span class="pill ${statusCls(t.status)}">${t.status}</span></td>
        <td>${ticketEditIcon(`openEditClientTicket('${t.clientId}',${t.idx})`,'Edit ticket')}</td></tr>`).join('')
      : `<tr><td colspan="5"><div class="empty-hint">No client tickets on your accounts.</div></td></tr>`;
  } else {
    head.innerHTML = `<th>Subject</th><th>Raised by</th><th>Priority</th><th>Status</th><th></th>`;
    const mine = DATA.employeeTickets.map((t,i)=>({...t, idx:i})).filter(t=>t.raisedBy===e.name);
    rows.innerHTML = mine.length ? mine.map(t=>
      `<tr><td>${t.subject}</td><td>${t.raisedBy}</td><td><span class="pill ${prioCls(t.priority)}">${t.priority}</span></td>
        <td><span class="pill ${statusCls(t.status)}">${t.status}</span></td>
        <td><span class="row-actions">${ticketEditIcon(`openEditInternalTicket(${t.idx})`,'Edit ticket')}${ticketDeleteIcon(`deleteInternalTicket(${t.idx})`,'Delete ticket')}</span></td></tr>`).join('')
      : `<tr><td colspan="5"><div class="empty-hint">You haven't raised any internal tickets yet.</div></td></tr>`;
  }
}
function deleteInternalTicket(idx){
  const t = DATA.employeeTickets[idx];
  if(!t) return;
  customConfirm(`Delete your internal ticket "${t.subject}"? This cannot be undone.`, ()=>{
    DATA.employeeTickets.splice(idx, 1);
    saveData();
    renderNav();
    if(document.getElementById('view-admin-employee-support').classList.contains('active')) renderEmpTickets();
    if(document.getElementById('view-emp-tickets').classList.contains('active')) renderEmpTicketsPage();
  }, {title:'Delete ticket?'});
}
function renderEmpKanbanPage(){
  const e = DATA.employees[state.persona];
  const select = document.getElementById('emp-kanban-client-select');
  const prevVal = state.empKanbanClient && e.clients.includes(state.empKanbanClient) ? state.empKanbanClient : e.clients[0];
  select.innerHTML = e.clients.map(cid=>`<option value="${cid}" ${cid===prevVal?'selected':''}>${DATA.clients[cid].name}</option>`).join('');
  state.empKanbanClient = prevVal;
  const board = document.getElementById('emp-kanban');
  if(!prevVal){
    board.innerHTML = '<div class="empty-hint">No clients assigned to you yet.</div>';
    return;
  }
  renderKanban(board, prevVal, {allowAddColumn:true});
}
function setEmpKanbanClient(cid){
  state.empKanbanClient = cid;
  renderKanban(document.getElementById('emp-kanban'), cid, {allowAddColumn:true});
}
function openMyRaiseInternal(){ openModal('internal-ticket'); }

/* =========================================================
   CLIENT — DASHBOARD / CALENDAR / TICKETS
   ========================================================= */
function renderClientDashboard(){
  const c = DATA.clients[state.persona];
  document.getElementById('client-projects').innerHTML = c.projects.length ? c.projects.map(p=>
    `<div class="row-item"><div style="flex:1;">${p.name}<div class="progress-bar lg" style="margin-top:8px;"><div class="fill" style="width:${p.progress}%"></div></div></div>
     <div style="display:flex;align-items:center;gap:10px;margin-left:14px;"><span style="font-weight:600;">${p.progress}%</span>${projectStatusPill(p)}</div></div>`).join('')
    : '<div class="empty-hint">No active projects right now.</div>';
  document.getElementById('client-milestones').innerHTML = milestonesHtml(c.milestones);

  const upcoming = [];
  Object.entries(c.calendar).forEach(([day, evs])=> evs.forEach(([type,label])=> upcoming.push({day,type,label})));
  upcoming.sort((a,b)=>a.day-b.day);
  document.getElementById('client-upcoming').innerHTML = upcoming.length ? upcoming.slice(0,5).map(u=>
    `<div class="row-item"><div>${u.label}<div class="meta">Jul ${u.day}</div></div><span class="pill ${u.type==='deadline'?'clay':u.type==='meet'?'amber':'green'}">${u.type==='deadline'?'Deliverable':u.type==='meet'?'Meeting':'Content'}</span></div>`).join('')
    : '<div class="empty-hint">Nothing scheduled yet.</div>';
}
function renderClientProjects(){
  const c = DATA.clients[state.persona];
  const host = document.getElementById('client-projects-cards');
  if(!c.projects.length){
    host.innerHTML = '<div class="empty-state"><div class="big">📁</div>No active projects right now.</div>';
    return;
  }
  const budgetActual = c.budget.reduce((s,b)=>s+b.actual,0);
  const budgetPlanned = c.budget.reduce((s,b)=>s+b.planned,0);
  host.innerHTML = c.projects.map(p=>`
    <div class="card" style="margin-bottom:18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <h3 style="margin:0;font-size:16px;">${p.name}</h3>${projectStatusPill(p)}
      </div>
      <div class="progress-bar lg" style="margin-bottom:6px;"><div class="fill" style="width:${p.progress}%"></div></div>
      <div class="meta" style="margin-bottom:16px;">${p.progress}% complete · ${p.start||'—'} → ${p.end||'—'}</div>
      <div class="grid-2">
        <div><h3 style="font-size:13px;">Milestones</h3><div class="milestone-list">${milestonesHtml(c.milestones)}</div></div>
        <div><h3 style="font-size:13px;">Related tickets</h3>${c.tickets.length? c.tickets.map(t=>
          `<div class="row-item"><div>${t.subject}<div class="meta">${t.date}</div></div><span class="pill ${statusCls(t.status)}">${t.status}</span></div>`).join('')
          : '<div class="empty-hint">No tickets raised for this project.</div>'}</div>
      </div>
      <div class="meta" style="margin-top:14px;border-top:1px solid var(--border);padding-top:10px;">Budget utilized: ₹${budgetActual.toLocaleString('en-IN')} of ₹${budgetPlanned.toLocaleString('en-IN')} · ${c.assets.length} asset${c.assets.length!==1?'s':''} on file · ${c.invoices.length} invoice${c.invoices.length!==1?'s':''}</div>
    </div>`).join('');
}
function renderClientCalendarFull(){
  const c = DATA.clients[state.persona];
  renderCalendar(document.getElementById('client-cal-grid'), c.calendar);
}
function renderClientTickets(){
  const c = DATA.clients[state.persona];
  document.getElementById('client-tickets-rows').innerHTML = c.tickets.length ? c.tickets.map((t,i)=>
    `<tr><td>${t.subject}<div class="meta" style="color:var(--text-2);font-size:11.5px;margin-top:2px;">${t.desc||''}</div></td>
      <td><span class="pill ${prioCls(t.priority)}">${t.priority}</span></td>
      <td>${t.attachment?`<span class="pill gray">${t.attachment}</span>`:'—'}</td>
      <td><span class="pill ${statusCls(t.status)}">${t.status}</span></td>
      <td><span class="row-actions">${ticketEditIcon(`openEditMyTicket('${state.persona}',${i})`,'Edit ticket')}${ticketDeleteIcon(`deleteMyTicket('${state.persona}',${i})`,'Delete ticket')}</span></td></tr>`).join('')
    : `<tr><td colspan="5"><div class="empty-state"><div class="big">🗂️</div>No support tickets yet. Use "+ Raise ticket" above to get help from your team.</div></td></tr>`;
}
function deleteMyTicket(clientId, idx){
  const c = DATA.clients[clientId];
  const t = c && c.tickets[idx];
  if(!t) return;
  customConfirm(`Delete your support ticket "${t.subject}"? This cannot be undone.`, ()=>{
    c.tickets.splice(idx, 1);
    saveData();
    if(document.getElementById('view-client-tickets').classList.contains('active')) renderClientTickets();
  }, {title:'Delete ticket?'});
}

/* =========================================================
   MODAL — config-driven so one modal serves tickets, new
   client, new project, and task assignment.
   ========================================================= */
let pickedFileName = null;
const MODAL_CONFIGS = {
  'client-ticket': { title:'Raise a support ticket', submitLabel:'Submit ticket', fields:[
    {key:'subject', label:'Subject', type:'text', placeholder:'e.g. Landing page CTA not working'},
    {key:'desc', label:'Description', type:'textarea', placeholder:"Add any detail that helps us resolve it faster..."},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'},
    {key:'file', label:'Attach media (optional)', type:'file'}
  ]},
  'internal-ticket': { title:'Raise an internal ticket', submitLabel:'Submit ticket', fields:[
    {key:'subject', label:'Subject', type:'text', placeholder:'e.g. Need a software license renewed'},
    {key:'desc', label:'Description', type:'textarea', placeholder:'Any extra detail for the admin team...'},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'}
  ]},
  'edit-client-ticket': { title:'Edit ticket', submitLabel:'Save changes', fields:[
    {key:'subject', label:'Subject', type:'text', placeholder:'e.g. Landing page CTA not working'},
    {key:'desc', label:'Description', type:'textarea', placeholder:"Add any detail that helps resolve it faster..."},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'},
    {key:'assignedTo', label:'Assigned to', type:'text', placeholder:'e.g. Priya S.'},
    {key:'status', label:'Status', type:'select', options:['Open','In progress','Resolved'], default:'Open'}
  ]},
  'edit-internal-ticket': { title:'Edit internal ticket', submitLabel:'Save changes', fields:[
    {key:'subject', label:'Subject', type:'text', placeholder:'e.g. Need a software license renewed'},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'},
    {key:'status', label:'Status', type:'select', options:['Open','In progress','Resolved'], default:'Open'}
  ]},
  'edit-my-ticket': { title:'Edit your ticket', submitLabel:'Save changes', fields:[
    {key:'subject', label:'Subject', type:'text', placeholder:'e.g. Landing page CTA not working'},
    {key:'desc', label:'Description', type:'textarea', placeholder:"Add any detail that helps resolve it faster..."},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'}
  ]},
  'new-client': { title:'Add a new client', submitLabel:'Add client', fields:[
    {key:'name', label:'Client name', type:'text', placeholder:'e.g. Solstice Interiors'},
    {key:'industry', label:'Industry', type:'text', placeholder:'e.g. Home & lifestyle'},
    {key:'domain', label:'Domain', type:'select', options:['DM','IT','Both'], default:'DM'},
    {key:'contractEnds', label:'Contract ends', type:'text', placeholder:'e.g. Dec 2027'},
    {key:'status', label:'Status', type:'select', options:['Active','Renewal due','Paused'], default:'Active'}
  ]},
  'edit-client': { title:'Edit client details', submitLabel:'Save changes', fields:[
    {key:'name', label:'Client name', type:'text', placeholder:'e.g. Solstice Interiors'},
    {key:'industry', label:'Industry', type:'text', placeholder:'e.g. Home & lifestyle'},
    {key:'domain', label:'Domain', type:'select', options:['DM','IT','Both'], default:'DM'},
    {key:'contractEnds', label:'Contract ends', type:'text', placeholder:'e.g. Dec 2027'},
    {key:'status', label:'Status', type:'select', options:['Active','Renewal due','Paused'], default:'Active'}
  ]},
  'new-project': { title:'Add a new project', submitLabel:'Add project', fields:[
    {key:'name', label:'Project name', type:'text', placeholder:'e.g. Spring launch campaign'},
    {key:'progress', label:'Starting progress (%)', type:'text', placeholder:'0'},
    {key:'status', label:'Status', type:'select', options:['Planning','In progress','On hold','Completed'], default:'Planning'}
  ]},
  'edit-project': { title:'Edit project', submitLabel:'Save changes', fields:[
    {key:'name', label:'Project name', type:'text', placeholder:'e.g. Spring launch campaign'},
    {key:'progress', label:'Progress (%)', type:'text', placeholder:'0'},
    {key:'status', label:'Status', type:'select', options:['Planning','In progress','On hold','Completed'], default:'Planning'}
  ]},
  'assign-task': { title:'Assign work to an employee', submitLabel:'Assign task', fields:[
    {key:'clientId', label:'Client', type:'select-clients'},
    {key:'employeeId', label:'Assign to', type:'select-employees'},
    {key:'title', label:'Task title', type:'text', placeholder:'e.g. Draft Q3 newsletter copy'},
    {key:'epicId', label:'Epic (optional)', type:'select-epics'},
    {key:'status', label:'Status', type:'select', options:['To do','In progress','Review','Done'], default:'To do'},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High'], default:'Medium'},
    {key:'start', label:'Start date', type:'date'},
    {key:'end', label:'End date', type:'date'}
  ]},
  'sprint-item': { title:'Add work item to sprint', submitLabel:'Add item', fields:[
    {key:'title', label:'Work item title', type:'text', placeholder:'e.g. Fix checkout redirect bug'},
    {key:'assigneeId', label:'Assignee', type:'select-employees'},
    {key:'epicId', label:'Epic (optional)', type:'select-epics'},
    {key:'status', label:'Status', type:'select', options:['To do','In progress','Review','Done'], default:'To do'},
    {key:'start', label:'Start date', type:'date'},
    {key:'end', label:'End date', type:'date'}
  ]},
  'new-sprint': { title:'Add a sprint', submitLabel:'Add sprint', fields:[
    {key:'name', label:'Sprint name', type:'text', placeholder:'e.g. Sprint 3'},
    {key:'start', label:'Start date', type:'date'},
    {key:'end', label:'End date', type:'date'}
  ]},
  'new-event': { title:'Add a calendar event', submitLabel:'Add event', fields:[
    {key:'day', label:'Day of month (1–30)', type:'text', placeholder:'e.g. 18'},
    {key:'type', label:'Event type', type:'select', options:['Content post','Client meeting','Deliverable due'], default:'Content post'},
    {key:'label', label:'Event label', type:'text', placeholder:'e.g. Reels drop, Client sync call'}
  ]},
  'edit-event': { title:'Edit calendar event', submitLabel:'Save changes', fields:[
    {key:'day', label:'Day of month (1–30)', type:'text', placeholder:'e.g. 18'},
    {key:'type', label:'Event type', type:'select', options:['Content post','Client meeting','Deliverable due'], default:'Content post'},
    {key:'label', label:'Event label', type:'text', placeholder:'e.g. Reels drop, Client sync call'}
  ]},
  'edit-task': { title:'Edit ticket', submitLabel:'Save changes', fields:[
    {key:'title', label:'Task title', type:'text', placeholder:'e.g. Draft Q3 newsletter copy'},
    {key:'assigneeId', label:'Assignee', type:'select-employees'},
    {key:'status', label:'Status', type:'select', options:['To do','In progress','Review','Done']},
    {key:'priority', label:'Priority', type:'select', options:['Low','Medium','High']},
    {key:'epicId', label:'Epic (optional)', type:'select-epics'},
    {key:'start', label:'Start date', type:'date'},
    {key:'end', label:'End date', type:'date'}
  ]},
  'new-employee': { title:'Add a new employee', submitLabel:'Add employee', fields:[
    {key:'name', label:'Full name', type:'text', placeholder:'e.g. Neha Kapoor'},
    {key:'title', label:'Role / title', type:'select', options:['Content Writer','Graphic Designer','Video Editor','PPC Specialist','SEO Executive','Developer','QA Engineer','Team Lead'], default:'Content Writer'}
  ]},
  'edit-employee': { title:'Edit employee details', submitLabel:'Save changes', fields:[
    {key:'name', label:'Full name', type:'text', placeholder:'e.g. Neha Kapoor'},
    {key:'title', label:'Role / title', type:'select', options:['Content Writer','Graphic Designer','Video Editor','PPC Specialist','SEO Executive','Developer','QA Engineer','Team Lead'], default:'Content Writer'}
  ]},
  'new-column': { title:'Add a board column', submitLabel:'Add column', fields:[
    {key:'name', label:'Column name', type:'text', placeholder:'e.g. Blocked, QA, Deployed'}
  ]},
  'new-epic': { title:'Add an epic', submitLabel:'Add epic', fields:[
    {key:'name', label:'Epic name', type:'text', placeholder:'e.g. Festive Campaign Launch'}
  ]}
};
function fieldHtml(f){
  if(f.type==='text') return `<div class="field"><label>${f.label}</label><input type="text" id="mf-${f.key}" placeholder="${f.placeholder||''}"></div>`;
  if(f.type==='date') return `<div class="field"><label>${f.label}</label><input type="date" id="mf-${f.key}"></div>`;
  if(f.type==='textarea') return `<div class="field"><label>${f.label}</label><textarea id="mf-${f.key}" placeholder="${f.placeholder||''}"></textarea></div>`;
  if(f.type==='select') return `<div class="field"><label>${f.label}</label><select id="mf-${f.key}">${f.options.map(o=>`<option ${o===f.default?'selected':''}>${o}</option>`).join('')}</select></div>`;
  if(f.type==='select-clients') return `<div class="field"><label>${f.label}</label><select id="mf-${f.key}" ${state.modalOpts.lockClient?'disabled':''}>${Object.entries(DATA.clients).map(([id,c])=>`<option value="${id}" ${id===(state.modalOpts.lockClient?state.currentClient:Object.keys(DATA.clients)[0])?'selected':''}>${c.name}</option>`).join('')}</select></div>`;
  if(f.type==='select-employees') return `<div class="field"><label>${f.label}</label><select id="mf-${f.key}">${Object.entries(DATA.employees).map(([id,e])=>`<option value="${id}">${e.name} — ${e.title}</option>`).join('')}</select></div>`;
  if(f.type==='select-epics'){
    const cid = state.modalOpts.lockClient ? state.currentClient : (state.modalOpts.clientId || Object.keys(DATA.clients)[0]);
    const epics = cid ? getEpics(DATA.clients[cid]) : [];
    return `<div class="field"><label>${f.label}</label><select id="mf-${f.key}"><option value="">No epic</option>${epics.map(ep=>`<option value="${ep.id}">${ep.name}</option>`).join('')}</select></div>`;
  }
  if(f.type==='file') return `<div class="field"><label>${f.label}</label><div class="file-drop" id="mf-file-drop" onclick="document.getElementById('mf-file').click()">Click to upload a screenshot, video or file</div><input type="file" id="mf-file" style="display:none" onchange="onFilePicked(this)"></div>`;
  return '';
}
function openModal(mode, opts={}){
  state.modalMode = mode;
  state.modalOpts = opts;
  pickedFileName = null;
  const cfg = MODAL_CONFIGS[mode];
  let fields = cfg.fields;
  let title = cfg.title;
  if(mode==='new-sprint' && opts.editSprintId){
    fields = cfg.fields.filter(f=>f.key!=='name');
    title = 'Set sprint dates';
  }
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-submit-btn').textContent = cfg.submitLabel;
  document.getElementById('modal-body').innerHTML = fields.map(fieldHtml).join('');
  if(opts.prefill){
    fields.forEach(f=>{
      if(!(f.key in opts.prefill)) return;
      const el = document.getElementById('mf-'+f.key);
      if(el) el.value = opts.prefill[f.key];
    });
  }
  document.getElementById('modal-overlay').classList.add('active');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('active'); }

/* ---- Lightweight in-page confirm dialog used for every delete action.
   Deliberately not window.confirm(): native dialogs are blocked/ignored
   in some embedded preview contexts, which made delete silently no-op. ---- */
let _confirmCallback = null;
function customConfirm(message, onConfirm, opts={}){
  document.getElementById('confirm-title').textContent = opts.title || 'Delete this?';
  document.getElementById('confirm-message').textContent = message;
  _confirmCallback = onConfirm;
  document.getElementById('confirm-overlay').classList.add('active');
}
function closeConfirm(){
  document.getElementById('confirm-overlay').classList.remove('active');
  _confirmCallback = null;
}
function confirmOk(){
  const cb = _confirmCallback;
  closeConfirm();
  if(cb) cb();
}
function onFilePicked(input){
  if(input.files && input.files[0]){
    pickedFileName = input.files[0].name;
    const drop = document.getElementById('mf-file-drop');
    drop.textContent = '✓ ' + pickedFileName;
    drop.classList.add('has-file');
  }
}
function submitModal(){
  const cfg = MODAL_CONFIGS[state.modalMode];
  const vals = {};
  cfg.fields.forEach(f=>{
    if(f.type==='file'){ vals[f.key]=pickedFileName; return; }
    const el = document.getElementById('mf-'+f.key);
    vals[f.key] = el ? el.value : '';
  });

  if(state.modalMode==='client-ticket'){
    if(!vals.subject.trim()) return;
    const c = DATA.clients[state.persona];
    c.tickets.unshift({subject:vals.subject, desc:vals.desc, priority:vals.priority, status:'Open', raisedBy:'Client', assignedTo:'Unassigned', date:'Today', attachment:vals.file});
    saveData();
    renderClientTickets();
  }
  if(state.modalMode==='internal-ticket'){
    if(!vals.subject.trim()) return;
    const e = DATA.employees[state.persona];
    DATA.employeeTickets.unshift({subject:vals.subject, raisedBy:e.name, priority:vals.priority, status:'Open'});
    saveData();
    renderNav();
    if(document.getElementById('view-admin-employee-support').classList.contains('active')) renderEmpTickets();
  }
  let ok = true;
  if(state.modalMode==='new-client') ok = createClient(vals);
  if(state.modalMode==='edit-client') ok = saveClientEdit(vals);
  if(state.modalMode==='new-employee') ok = createEmployee(vals);
  if(state.modalMode==='edit-employee') ok = saveEmployeeEdit(vals);
  if(state.modalMode==='new-event') ok = createCalendarEvent(vals);
  if(state.modalMode==='edit-event') ok = saveEventEdit(vals);
  if(state.modalMode==='edit-task') ok = saveTaskEdit(vals);
  if(state.modalMode==='edit-client-ticket') ok = saveClientTicketEdit(vals);
  if(state.modalMode==='edit-internal-ticket') ok = saveInternalTicketEdit(vals);
  if(state.modalMode==='edit-my-ticket') ok = saveMyTicketEdit(vals);
  if(state.modalMode==='new-project') ok = createProject(vals);
  if(state.modalMode==='edit-project') ok = saveProjectEdit(vals);
  if(state.modalMode==='assign-task') ok = assignTask(vals);
  if(state.modalMode==='sprint-item') ok = addSprintItem(vals);
  if(state.modalMode==='new-sprint') ok = createSprint(vals);
  if(state.modalMode==='new-column') ok = createColumn(vals);
  if(state.modalMode==='new-epic') ok = createEpic(vals);

  if(ok !== false) {
    saveData();
    closeModal();
  }
}
function nextTaskId(client){
  if(!client._seq){
    let max = 0;
    (client.tasks||[]).forEach(t=>{ const m = /-?(\d+)$/.exec(t.id||''); if(m) max = Math.max(max, parseInt(m[1],10)); });
    client._seq = max + 1;
  }
  const prefix = client.name.split(' ').map(w=>w[0]).join('').slice(0,2).toLowerCase();
  return `${prefix}${client._seq++}`;
}
function addSprintItem(vals){
  const {clientId, sprintId} = state.modalOpts;
  const client = DATA.clients[clientId];
  const emp = DATA.employees[vals.assigneeId];
  if(!client || !emp || !vals.title.trim()) return false;
  if(!client.tasks) client.tasks = [];
  const id = nextTaskId(client);
  const pKey = 'med';
  client.tasks.push({id, t:vals.title, a:emp.initials, p:pKey, status:vals.status, sprintId, start:vals.start||null, end:vals.end||null, epicId:vals.epicId||null, assignedBy:'Admin'});
  emp.tasks.unshift({title:`${vals.title} — ${client.name}`, due: vals.end ? fmtDate(vals.end) : 'TBD', priority:'Medium', done:vals.status==='Done', link:{clientId, taskId:id}});
  if(!emp.clients.includes(clientId)) emp.clients.push(clientId);
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
  return true;
}
function createColumn(vals){
  const {clientId} = state.modalOpts;
  const client = DATA.clients[clientId];
  if(!client || !vals.name.trim()) return false;
  const columns = getColumns(client);
  if(columns.includes(vals.name.trim())) return false;
  columns.push(vals.name.trim());
  if(state.currentClient===clientId && state.currentTab==='kanban'){
    setClientTab('kanban', document.querySelector('.cd-tab.active'));
  } else if(state.role==='employee'){
    renderEmpKanbanPage();
  }
  return true;
}
function createEpic(vals){
  const {clientId} = state.modalOpts;
  const client = DATA.clients[clientId];
  if(!client || !vals.name.trim()) return false;
  const epics = getEpics(client);
  const color = EPIC_COLORS[epics.length % EPIC_COLORS.length];
  epics.push({id:'ep'+(epics.length+1)+'_'+Date.now().toString(36).slice(-4), name:vals.name.trim(), color});
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
  return true;
}
function createSprint(vals){
  const {clientId, editSprintId} = state.modalOpts;
  const client = DATA.clients[clientId];
  if(!client) return false;
  if(editSprintId){
    const s = client.sprints.find(sp=>sp.id===editSprintId);
    if(s){ s.start = vals.start||null; s.end = vals.end||null; }
    setClientTab('kanban', document.querySelector('.cd-tab.active'));
    return true;
  }
  if(!vals.name.trim()) return false;
  if(!client.sprints) client.sprints = [];
  const id = 's' + (client.sprints.length + 1) + '_' + Date.now().toString(36).slice(-4);
  client.sprints.push({id, name:vals.name, start:vals.start||null, end:vals.end||null, state:'planned'});
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
  return true;
}
function createClient(vals){
  if(!vals.name.trim()) return false;
  let id = vals.name.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  if(!id || DATA.clients[id]) id = id + '-' + Date.now();
  const domainKey = vals.domain==='IT'?'it':vals.domain==='Both'?'both':'dm';
  const dotColor = domainKey==='it'?'var(--clay)':domainKey==='both'?'var(--amber)':'var(--accent)';
  const statusCls = vals.status==='Active'?'green':vals.status==='Renewal due'?'amber':'gray';
  DATA.clients[id] = {
    name:vals.name, industry:vals.industry||'—', domain:domainKey, domainLabel:vals.domain, dotColor,
    status:{label:vals.status,cls:statusCls}, contractEnds:vals.contractEnds||'—',
    projects:[], milestones:[], tasks:[], sprints:[],
    tickets:[], invoices:[], audits:[], assets:[], calendar:{},
    reports:{organic:"—",organicD:"No data yet",engage:"—",engageD:"—",roas:"—",roasD:"—",leads:"—",leadsD:"—"},
    budget:[]
  };
  renderAdminClients();
  return true;
}
function openEditClient(id){
  const c = DATA.clients[id];
  if(!c) return;
  const domainLabel = c.domain==='it'?'IT':c.domain==='both'?'Both':'DM';
  openModal('edit-client', {id, prefill:{name:c.name, industry:c.industry, domain:domainLabel, contractEnds:c.contractEnds, status:c.status.label}});
}
function saveClientEdit(vals){
  const {id} = state.modalOpts;
  const c = DATA.clients[id];
  if(!c || !vals.name.trim()) return false;
  c.name = vals.name.trim();
  c.industry = vals.industry || '—';
  const domainKey = vals.domain==='IT'?'it':vals.domain==='Both'?'both':'dm';
  c.domain = domainKey;
  c.domainLabel = vals.domain;
  c.dotColor = domainKey==='it'?'var(--clay)':domainKey==='both'?'var(--amber)':'var(--accent)';
  c.contractEnds = vals.contractEnds || '—';
  c.status = {label:vals.status, cls: vals.status==='Active'?'green':vals.status==='Renewal due'?'amber':'gray'};
  renderAdminClients();
  refreshClientHeaderIfOpen(id);
  return true;
}
function refreshClientHeaderIfOpen(id){
  if(document.getElementById('view-client-detail').classList.contains('active') && state.currentClient===id){
    const c = DATA.clients[id];
    document.getElementById('cd-dot').style.background = c.dotColor;
    document.getElementById('cd-name').textContent = c.name;
    document.getElementById('cd-meta').textContent = `${c.industry} · Contract ends ${c.contractEnds}`;
    document.getElementById('cd-domain-pill').textContent = c.domainLabel;
    document.getElementById('cd-domain-pill').className = 'pill ' + (c.domain==='it'?'clay':c.domain==='both'?'amber':'green');
  }
}
function createEmployee(vals){
  if(!vals.name.trim()) return false;
  let id = vals.name.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  if(!id || DATA.employees[id]) id = id + '-' + Date.now();
  const initials = vals.name.trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
  DATA.employees[id] = {name:vals.name.trim(), initials, title:vals.title||'Team member', clients:[], tasks:[]};
  renderAdminEmployees();
  return true;
}
function openEditEmployee(id){
  const e = DATA.employees[id];
  if(!e) return;
  openModal('edit-employee', {id, prefill:{name:e.name, title:e.title}});
}
function saveEmployeeEdit(vals){
  const {id} = state.modalOpts;
  const e = DATA.employees[id];
  if(!e || !vals.name.trim()) return false;
  e.name = vals.name.trim();
  e.title = vals.title || e.title;
  e.initials = e.name.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
  renderAdminEmployees();
  return true;
}
function createCalendarEvent(vals){
  const {clientId} = state.modalOpts;
  const client = DATA.clients[clientId];
  if(!client || !vals.label.trim()) return false;
  const day = Math.max(1, Math.min(30, parseInt(vals.day) || 1));
  const typeKey = vals.type==='Client meeting' ? 'meet' : vals.type==='Deliverable due' ? 'deadline' : 'post';
  if(!client.calendar[day]) client.calendar[day] = [];
  client.calendar[day].push([typeKey, vals.label.trim()]);
  if(state.currentClient===clientId && state.currentTab==='calendar'){
    setClientTab('calendar', document.querySelector('.cd-tab.active'));
  }
  return true;
}
/* ---- Calendar event editing: clicking the edit icon on an event opens
   a dialog pre-filled with its current data; saving writes the edit back
   in place (moving it to a new day if the day was changed). ---- */
function openEditEvent(clientId, day, evIdx){
  const client = DATA.clients[clientId];
  const ev = client && client.calendar[day] && client.calendar[day][evIdx];
  if(!ev) return;
  const typeLabel = ev[0]==='meet' ? 'Client meeting' : ev[0]==='deadline' ? 'Deliverable due' : 'Content post';
  openModal('edit-event', {clientId, day, evIdx, prefill:{day:String(day), type:typeLabel, label:ev[1]}});
}
function saveEventEdit(vals){
  const {clientId, day, evIdx} = state.modalOpts;
  const client = DATA.clients[clientId];
  const events = client && client.calendar[day];
  if(!events || !events[evIdx] || !vals.label.trim()) return false;
  const newDay = Math.max(1, Math.min(30, parseInt(vals.day) || day));
  const typeKey = vals.type==='Client meeting' ? 'meet' : vals.type==='Deliverable due' ? 'deadline' : 'post';
  events.splice(evIdx, 1);
  if(!client.calendar[newDay]) client.calendar[newDay] = [];
  client.calendar[newDay].push([typeKey, vals.label.trim()]);
  if(state.currentClient===clientId && state.currentTab==='calendar'){
    setClientTab('calendar', document.querySelector('.cd-tab.active'));
  }
  return true;
}
function deleteEvent(clientId, day, evIdx){
  const client = DATA.clients[clientId];
  const events = client && client.calendar[day];
  const ev = events && events[evIdx];
  if(!ev) return;
  customConfirm(`Delete "${ev[1]}" from the calendar? This cannot be undone.`, ()=>{
    events.splice(evIdx, 1);
    saveData();
    if(state.currentClient===clientId && state.currentTab==='calendar'){
      setClientTab('calendar', document.querySelector('.cd-tab.active'));
    }
  }, {title:'Delete event?'});
}
function createProject(vals){
  if(!state.currentClient || !vals.name.trim()) return false;
  const statusCls = (vals.status==='In progress'||vals.status==='Completed')?'green':vals.status==='On hold'?'amber':'gray';
  const progress = Math.max(0, Math.min(100, parseInt(vals.progress)||0));
  DATA.clients[state.currentClient].projects.push({name:vals.name, progress, status:{label:vals.status,cls:statusCls}});
  setClientTab('overview', document.querySelector('.cd-tab[data-tab="overview"]'));
  return true;
}
function openEditProject(clientId, idx){
  const p = DATA.clients[clientId] && DATA.clients[clientId].projects[idx];
  if(!p) return;
  openModal('edit-project', {clientId, idx, prefill:{name:p.name, progress:String(p.progress), status:p.status.label}});
}
function saveProjectEdit(vals){
  const {clientId, idx} = state.modalOpts;
  const p = DATA.clients[clientId] && DATA.clients[clientId].projects[idx];
  if(!p || !vals.name.trim()) return false;
  p.name = vals.name.trim();
  p.progress = Math.max(0, Math.min(100, parseInt(vals.progress)||0));
  const statusCls = (vals.status==='In progress'||vals.status==='Completed')?'green':vals.status==='On hold'?'amber':'gray';
  p.status = {label:vals.status, cls:statusCls};
  if(document.getElementById('view-client-detail').classList.contains('active') && state.currentClient===clientId && state.currentTab==='overview'){
    setClientTab('overview', document.querySelector('.cd-tab.active'));
  }
  if(document.getElementById('view-client-dashboard').classList.contains('active')) renderClientDashboard();
  if(document.getElementById('view-client-projects').classList.contains('active')) renderClientProjects();
  return true;
}
function projectStatusPill(p){
  return `<span class="pill ${p.status.cls}">${p.status.label==='Completed'?'✓ ':''}${p.status.label}</span>`;
}
function assignTask(vals){
  const client = DATA.clients[vals.clientId];
  const emp = DATA.employees[vals.employeeId];
  if(!client || !emp || !vals.title.trim()) return false;
  const pKey = vals.priority==='High'?'high':vals.priority==='Medium'?'med':'low';
  if(!client.tasks) client.tasks = [];
  const taskId = nextTaskId(client);
  client.tasks.push({id:taskId, t:vals.title, a:emp.initials, p:pKey, status:vals.status, sprintId:null, start:vals.start||null, end:vals.end||null, epicId:vals.epicId||null, assignedBy:'Admin'});
  emp.tasks.unshift({title:`${vals.title} — ${client.name}`, due: vals.end ? fmtDate(vals.end) : 'TBD', priority:vals.priority, done:vals.status==='Done', link:{clientId:vals.clientId, taskId}});
  if(!emp.clients.includes(vals.clientId)) emp.clients.push(vals.clientId);
  if(state.currentClient===vals.clientId && state.currentTab==='kanban'){
    setClientTab('kanban', document.querySelector('.cd-tab.active'));
  }
  return true;
}

/* =========================================================
   REUSABLE: KANBAN + CALENDAR RENDERERS
   Board and Sprint views both read/write DATA.clients[id].tasks —
   one list, two filtered views, so a change in either place
   is instantly visible in the other.
   ========================================================= */
const BOARD_COLUMNS = ["To do","In progress","Review","Done"];
const EPIC_COLORS = ["#0F6E56","#C75A3A","#BA7517","#3D5A99","#7A4A9E","#A32D2D"];
function fmtDate(iso){
  if(!iso) return null;
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
}
function dateRangeLabel(t){
  if(!t.start && !t.end) return null;
  return `${fmtDate(t.start)||'?'} → ${fmtDate(t.end)||'?'}`;
}
/* Columns are per-client so any board can grow its own workflow,
   Jira-style, via the "+ Add column" control next to Done. */
function getColumns(client){
  if(!client.columns) client.columns = [...BOARD_COLUMNS];
  return client.columns;
}
function getEpics(client){
  if(!client.epics) client.epics = [];
  return client.epics;
}
function epicById(client, epicId){
  return getEpics(client).find(e=>e.id===epicId) || null;
}
function renderKanban(board, clientId, opts={}){
  board.innerHTML = '';
  const client = DATA.clients[clientId];
  const tasks = client.tasks || [];
  const columns = getColumns(client);
  columns.forEach(col=>{
    const cards = tasks.filter(t=>t.status===col);
    const colEl = document.createElement('div');
    colEl.className = 'kcol'; colEl.dataset.col = col;
    colEl.innerHTML = `<h4>${col} <span>${cards.length}</span></h4>`;
    cards.forEach(c=>{
      const card = document.createElement('div');
      card.className = `kcard p-${c.p}`; card.draggable = true; card.dataset.id = c.id||'';
      const sprint = c.sprintId ? (client.sprints||[]).find(s=>s.id===c.sprintId) : null;
      const epic = c.epicId ? epicById(client, c.epicId) : null;
      const range = dateRangeLabel(c);
      const editBtn = opts.allowEdit ? `<button type="button" class="kcard-edit-btn" title="Edit ticket" draggable="false" onclick="event.stopPropagation();openEditTask('${clientId}','${c.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4.2-1 11-11-3.2-3.2-11 11z"/><path d="M14 6l3.2 3.2"/></svg></button>` : '';
      const deleteBtn = opts.allowEdit ? `<button type="button" class="kcard-delete-btn" title="Delete ticket" draggable="false" onclick="event.stopPropagation();deleteTask('${clientId}','${c.id}')">${TRASH_SVG}</button>` : '';
      const cardActions = opts.allowEdit ? `<span class="kcard-actions">${editBtn}${deleteBtn}</span>` : '';
      card.innerHTML = `${epic?`<span class="epic-tag" style="background:${epic.color}">${epic.name}</span>`:''}
        <div class="t"><span class="t-text">${c.t}</span>${cardActions}</div>
        ${range?`<div class="kcard-dates">${range}</div>`:''}
        <div class="meta-row"><span class="init">${c.a}</span>${sprint?`<span class="pill gray" style="padding:1px 7px;">${sprint.name}</span>`:''}<span class="assigned-by">By ${c.assignedBy||'Admin'}</span></div>`;
      card.addEventListener('dragstart', e=>{ card.classList.add('dragging'); e.dataTransfer.setData('text/plain', c.t); });
      card.addEventListener('dragend', ()=> card.classList.remove('dragging'));
      colEl.appendChild(card);
    });
    colEl.addEventListener('dragover', e=>{ e.preventDefault(); colEl.classList.add('dragover'); });
    colEl.addEventListener('dragleave', ()=> colEl.classList.remove('dragover'));
    colEl.addEventListener('drop', e=>{
      e.preventDefault(); colEl.classList.remove('dragover');
      const dragging = document.querySelector('.kcard.dragging');
      if(dragging && clientId){
        const taskId = dragging.dataset.id;
        if(taskId) setTaskStatus(clientId, taskId, col);
      }
    });
    board.appendChild(colEl);
  });
  if(opts.allowAddColumn){
    const addBtn = document.createElement('div');
    addBtn.className = 'kcol-add';
    addBtn.innerHTML = '+ Add column';
    addBtn.onclick = ()=> openModal('new-column',{clientId});
    board.appendChild(addBtn);
  }
}

/* ---- Kanban card editing (admin side): clicking the edit icon on a
   ticket opens a dialog pre-filled with its current data; saving writes
   the edits back in place and refreshes every view built off tasks. ---- */
function findEmployeeIdByInitials(initials){
  return Object.keys(DATA.employees).find(id=>DATA.employees[id].initials===initials) || '';
}
function openEditTask(clientId, taskId){
  const client = DATA.clients[clientId];
  const t = client && (client.tasks||[]).find(x=>x.id===taskId);
  if(!t) return;
  const priorityLabel = t.p==='high' ? 'High' : t.p==='low' ? 'Low' : 'Medium';
  openModal('edit-task', {clientId, taskId, prefill:{
    title:t.t, assigneeId:findEmployeeIdByInitials(t.a), status:t.status, priority:priorityLabel,
    epicId:t.epicId||'', start:t.start||'', end:t.end||''
  }});
}
function saveTaskEdit(vals){
  const {clientId, taskId} = state.modalOpts;
  const client = DATA.clients[clientId];
  const t = client && (client.tasks||[]).find(x=>x.id===taskId);
  const emp = DATA.employees[vals.assigneeId];
  if(!t || !emp || !vals.title.trim()) return false;
  t.t = vals.title.trim();
  t.a = emp.initials;
  t.p = vals.priority==='High' ? 'high' : vals.priority==='Low' ? 'low' : 'med';
  t.status = vals.status;
  t.epicId = vals.epicId || null;
  t.start = vals.start || null;
  t.end = vals.end || null;
  if(!emp.clients.includes(clientId)) emp.clients.push(clientId);
  syncLinkedEmployeeTask(clientId, taskId, t.status==='Done');
  refreshTaskViews();
  return true;
}
function deleteTask(clientId, taskId){
  const client = DATA.clients[clientId];
  const tasks = client && client.tasks;
  const t = tasks && tasks.find(x=>x.id===taskId);
  if(!t) return;
  customConfirm(`Delete ticket "${t.t}"? This cannot be undone.`, ()=>{
    client.tasks = tasks.filter(x=>x.id!==taskId);
    Object.values(DATA.employees).forEach(emp=>{
      emp.tasks = emp.tasks.filter(et=>!(et.link && et.link.clientId===clientId && et.link.taskId===taskId));
    });
    refreshTaskViews();
  }, {title:'Delete ticket?'});
}
/* ---- single source of truth: updates the task, then re-renders
   whichever views (board / sprints / employee dashboard) are on screen ---- */
function setTaskStatus(clientId, taskId, newStatus, opts={}){
  const client = DATA.clients[clientId];
  const task = (client.tasks||[]).find(t=>t.id===taskId);
  if(!task) return;
  task.status = newStatus;
  if(!opts.skipEmpSync) syncLinkedEmployeeTask(clientId, taskId, newStatus==='Done');
  refreshTaskViews();
}
function setTaskDates(clientId, taskId, field, value){
  const task = (DATA.clients[clientId].tasks||[]).find(t=>t.id===taskId);
  if(!task) return;
  task[field] = value || null;
  refreshTaskViews();
}
function setTaskSprint(clientId, taskId, sprintId){
  const task = (DATA.clients[clientId].tasks||[]).find(t=>t.id===taskId);
  if(!task) return;
  task.sprintId = sprintId || null;
  saveData();
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
}
function setTaskEpic(clientId, taskId, epicId){
  const task = (DATA.clients[clientId].tasks||[]).find(t=>t.id===taskId);
  if(!task) return;
  task.epicId = epicId || null;
  saveData();
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
}
function syncLinkedEmployeeTask(clientId, taskId, isDone){
  Object.values(DATA.employees).forEach(emp=>{
    emp.tasks.forEach(t=>{
      if(t.link && t.link.clientId===clientId && t.link.taskId===taskId) t.done = isDone;
    });
  });
}
function refreshTaskViews(){
  saveData();
  if(state.currentClient && document.getElementById('view-client-detail').classList.contains('active')){
    setClientTab(state.currentTab, document.querySelector('.cd-tab.active'));
  }
  if(document.getElementById('view-emp-kanban').classList.contains('active')) renderEmpKanbanPage();
}

/* ---- Jira-style sprint planning (admin only) — reads/writes the SAME
   client.tasks array as the Board view above, filtered by sprintId ---- */
function setKanbanView(v){
  state.kanbanView = v;
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
}
function keyLabel(id){
  const m = /^([a-z]+)0*(\d+)$/i.exec(id||'');
  return m ? `${m[1].toUpperCase()}-${m[2]}` : (id||'').toUpperCase();
}
function jiraRowHtml(clientId, client, it, opts={}){
  const statusCls = it.status==='Done' ? 'done' : it.status==='Review' ? 'review' : it.status==='In progress' ? 'inprogress' : '';
  const moveSelect = opts.showMove ? `<select class="jira-status" style="text-transform:none;font-weight:500;width:120px;" title="Move to sprint" onchange="setTaskSprint('${clientId}','${it.id}',this.value)">
              <option value="">Backlog</option>
              ${(client.sprints||[]).map(s=>`<option value="${s.id}" ${it.sprintId===s.id?'selected':''}>${s.name}</option>`).join('')}
            </select>` : '';
  const epics = getEpics(client);
  const epicSelect = `<select class="jira-status" style="text-transform:none;font-weight:500;width:120px;" title="Epic" onchange="setTaskEpic('${clientId}','${it.id}',this.value)">
              <option value="">No epic</option>
              ${epics.map(ep=>`<option value="${ep.id}" ${it.epicId===ep.id?'selected':''}>${ep.name}</option>`).join('')}
            </select>`;
  return `<div class="jira-row">
            <span class="jira-type story" title="Story"><svg viewBox="0 0 16 16"><path d="M2 2h12v12H2z"/></svg></span>
            <span class="jira-key">${keyLabel(it.id)}</span>
            <span class="jira-title">${it.t}</span>
            <div class="jira-dateedit">
              <input type="date" value="${it.start||''}" title="Start date" onchange="setTaskDates('${clientId}','${it.id}','start',this.value)">
              <span style="color:var(--text-3);">→</span>
              <input type="date" value="${it.end||''}" title="End date" onchange="setTaskDates('${clientId}','${it.id}','end',this.value)">
            </div>
            <span class="jira-tag">${client.domainLabel}</span>
            ${epicSelect}
            ${moveSelect}
            <select class="jira-status ${statusCls}" onchange="setTaskStatus('${clientId}','${it.id}',this.value)">
              <option ${it.status==='To do'?'selected':''}>To do</option>
              <option ${it.status==='In progress'?'selected':''}>In progress</option>
              <option ${it.status==='Review'?'selected':''}>Review</option>
              <option ${it.status==='Done'?'selected':''}>Done</option>
            </select>
            <span class="assignedby-pill" title="Assigned by">By ${it.assignedBy||'Admin'}</span>
            <span class="jira-avatar">${it.a}</span>
          </div>`;
}
function renderKanbanSprints(container, clientId){
  const client = DATA.clients[clientId];
  if(!client.sprints) client.sprints = [];
  const tasks = client.tasks || [];
  const epics = getEpics(client);
  const sprintIds = new Set(client.sprints.map(s=>s.id));
  const backlogItems = tasks.filter(t=>!t.sprintId || !sprintIds.has(t.sprintId));
  let html = `<div class="jira-toolbar" style="justify-content:space-between;">
      <div class="epic-toolbar">
        <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--text-2);">Epics:</span>
        ${epics.length ? epics.map(ep=>`<span class="epic-pill" style="background:${ep.color}">${ep.name}</span>`).join('') : '<span class="empty-hint" style="padding:0;">None yet</span>'}
        <button class="btn ghost sm" onclick="openModal('new-epic',{clientId:'${clientId}'})">+ Add epic</button>
      </div>
      <button class="btn ghost sm" onclick="openModal('new-sprint',{clientId:'${clientId}'})">+ Add sprint</button>
    </div>`;
  if(!client.sprints.length && !backlogItems.length){
    html += `<div class="empty-hint">No sprints yet. Use "+ Add sprint" to start planning and distributing work.</div>`;
  } else {
    client.sprints.forEach(s=>{
      const items = tasks.filter(t=>t.sprintId===s.id);
      const todoCt = items.filter(t=>t.status==='To do').length;
      const progCt = items.filter(t=>t.status==='In progress' || t.status==='Review').length;
      const doneCt = items.filter(t=>t.status==='Done').length;
      const actionBtn = s.state==='planned'
        ? `<button class="jira-actionbtn" onclick="toggleSprintState('${clientId}','${s.id}')">Start sprint</button>`
        : s.state==='active'
        ? `<button class="jira-actionbtn ghost" onclick="toggleSprintState('${clientId}','${s.id}')">Complete sprint</button>`
        : `<span class="pill gray">Completed</span>`;
      const datesHtml = (s.start||s.end)
        ? `<span class="jira-dates">${fmtDate(s.start)||'?'} – ${fmtDate(s.end)||'?'}</span>`
        : `<span class="jira-dates link" onclick="openModal('new-sprint',{clientId:'${clientId}',editSprintId:'${s.id}'})">Add dates</span>`;
      html += `<div class="jira-panel">
        <div class="jira-head">
          <span class="chev">⌄</span>
          <b>${s.name}</b>
          ${datesHtml}
          <span class="jira-count">(${items.length} work item${items.length!==1?'s':''})</span>
          <div class="jira-head-right">
            <div class="jira-mini-counts"><span>${todoCt}</span><span>${progCt}</span><span>${doneCt}</span></div>
            ${actionBtn}
          </div>
        </div>
        ${items.length ? items.map(it=>jiraRowHtml(clientId, client, it)).join('') : `<div class="empty-hint" style="padding:14px;">No work items in this sprint yet.</div>`}
        <div class="jira-add" onclick="openModal('sprint-item',{clientId:'${clientId}',sprintId:'${s.id}'})">+ Create work item</div>
        ${sprintMessageBoxHtml(clientId, s)}
      </div>`;
    });
    if(backlogItems.length){
      html += `<div class="jira-panel">
        <div class="jira-head">
          <span class="chev">⌄</span>
          <b>Backlog</b>
          <span class="jira-count">(${backlogItems.length} work item${backlogItems.length!==1?'s':''} · not in a sprint)</span>
        </div>
        ${backlogItems.map(it=>jiraRowHtml(clientId, client, it, {showMove:true})).join('')}
        <div class="jira-add" onclick="openModal('sprint-item',{clientId:'${clientId}',sprintId:null})">+ Create work item</div>
      </div>`;
    }
  }
  container.innerHTML = html;
}
/* ---- Message box (admin side): a lightweight discussion thread scoped
   to each sprint, so admins can leave notes/instructions for the team
   without those internal notes leaking into the client<->admin audit trail ---- */
function sprintMessageBoxHtml(clientId, sprint){
  if(!sprint.messages) sprint.messages = [];
  const msgs = sprint.messages;
  return `<div class="sprint-msgbox">
    <div class="msg-head">💬 Sprint messages</div>
    <div class="sprint-msg-list">
      ${msgs.length ? msgs.map(m=>`<div class="sprint-msg"><span class="init">${m.initials}</span>
        <div class="body"><b>${m.author}</b> <span class="ts">· ${m.ts}</span><div class="txt">${m.text}</div></div></div>`).join('')
        : '<div class="empty-hint" style="padding:2px 0;">No messages yet — leave a note for the team below.</div>'}
    </div>
    <div class="sprint-msg-input">
      <input type="text" id="sprint-msg-input-${sprint.id}" placeholder="Message the team about this sprint..." onkeydown="if(event.key==='Enter') postSprintMessage('${clientId}','${sprint.id}')">
      <button class="btn sm" onclick="postSprintMessage('${clientId}','${sprint.id}')">Send</button>
    </div>
  </div>`;
}
function postSprintMessage(clientId, sprintId){
  const input = document.getElementById(`sprint-msg-input-${sprintId}`);
  if(!input || !input.value.trim()) return;
  const client = DATA.clients[clientId];
  const sprint = client.sprints.find(s=>s.id===sprintId);
  if(!sprint) return;
  if(!sprint.messages) sprint.messages = [];
  sprint.messages.push({author:'Riya Mehta', initials:'RM', text:input.value.trim(), ts:'Just now'});
  saveData();
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
}
function toggleSprintState(clientId, sprintId){
  const s = DATA.clients[clientId].sprints.find(sp=>sp.id===sprintId);
  s.state = s.state==='planned' ? 'active' : 'completed';
  saveData();
  setClientTab('kanban', document.querySelector('.cd-tab.active'));
}

function renderCalendar(grid, events, opts={}){
  grid.innerHTML='';
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  days.forEach(d=>{ const h=document.createElement('div'); h.className='cal-day-h'; h.textContent=d; grid.appendChild(h); });
  for(let i=0;i<3;i++){ const c=document.createElement('div'); c.className='cal-cell muted'; grid.appendChild(c); }
  for(let day=1; day<=30; day++){
    const c = document.createElement('div'); c.className='cal-cell';
    let html = `<div class="num">${day}</div>`;
    (events[day]||[]).forEach(([type,label],evIdx)=>{
      const editBtn = opts.clientId ? `<button type="button" class="cal-ev-edit-btn" title="Edit event" onclick="event.stopPropagation();openEditEvent('${opts.clientId}',${day},${evIdx})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4.2-1 11-11-3.2-3.2-11 11z"/><path d="M14 6l3.2 3.2"/></svg></button>` : '';
      const deleteBtn = opts.clientId ? `<button type="button" class="cal-ev-delete-btn" title="Delete event" onclick="event.stopPropagation();deleteEvent('${opts.clientId}',${day},${evIdx})">${TRASH_SVG}</button>` : '';
      const evActions = opts.clientId ? `<span class="cal-ev-actions">${editBtn}${deleteBtn}</span>` : '';
      html += `<div class="cal-ev ${type}"><span class="cal-ev-label">${label}</span>${evActions}</div>`;
    });
    if(opts.clientId){
      html += `<button type="button" class="cal-add-btn" title="Add event on this date" onclick="event.stopPropagation(); openAddEventForDay('${opts.clientId}',${day})">+</button>`;
    }
    c.innerHTML = html;
    grid.appendChild(c);
  }
}
function openAddEventForDay(clientId, day){
  openModal('new-event', {clientId, prefill:{day:String(day)}});
}

/* =========================================================
   INIT
   ========================================================= */
renderNav();
setView('admin-dashboard');


/* ---------------------------------------------------------------
   Vite/React bundling note: this file is loaded as an ES module,
   so its top-level function declarations are scoped to the module
   and are NOT attached to window automatically (unlike a classic
   <script> tag). The markup above is injected via
   dangerouslySetInnerHTML and relies entirely on inline
   onclick=/onchange=/onkeydown= attributes, which resolve function
   names against the global scope at click-time. This block makes
   every top-level function reachable that way, without changing
   a single line of the original logic above.
   --------------------------------------------------------------- */
if (typeof window !== 'undefined') {
  Object.assign(window, {
    addSprintItem,
    assignTask,
    backToClientList,
    capLabel,
    closeConfirm,
    closeModal,
    confirmOk,
    createCalendarEvent,
    createClient,
    createColumn,
    createEmployee,
    createEpic,
    createProject,
    createSprint,
    customConfirm,
    cycleClientTicketStatus,
    cycleStatus,
    dateRangeLabel,
    deleteClient,
    deleteEmployee,
    deleteEvent,
    deleteInternalTicket,
    deleteMyTicket,
    deleteTask,
    epicById,
    fieldHtml,
    filterEmpTickets,
    findEmployeeIdByInitials,
    fmtDate,
    getColumns,
    getEpics,
    iconCal,
    iconClients,
    iconEmployee,
    iconGrid,
    iconTicket,
    isClientAdminAudit,
    jiraRowHtml,
    keyLabel,
    milestonesHtml,
    nextTaskId,
    onFilePicked,
    openAddEventForDay,
    openClientDetail,
    openEditClient,
    openEditClientTicket,
    openEditEmployee,
    openEditEvent,
    openEditInternalTicket,
    openEditMyTicket,
    openEditProject,
    openEditTask,
    openModal,
    openMyRaiseInternal,
    postSprintMessage,
    prioCls,
    projectRow,
    projectStatusPill,
    refreshClientHeaderIfOpen,
    refreshTaskViews,
    renderAdminClients,
    renderAdminDashboard,
    renderAdminEmployees,
    renderCalendar,
    renderClientCalendarFull,
    renderClientDashboard,
    renderClientProjects,
    renderClientTickets,
    renderEmpKanbanPage,
    renderEmpTickets,
    renderEmpTicketsPage,
    renderKanban,
    renderKanbanSprints,
    renderNav,
    resetData,
    saveClientEdit,
    saveClientTicketEdit,
    saveData,
    saveEmployeeEdit,
    saveEventEdit,
    saveInternalTicketEdit,
    saveMyTicketEdit,
    saveProjectEdit,
    saveTaskEdit,
    setClientTab,
    setEmpKanbanClient,
    setEmpTicketSource,
    setKanbanView,
    setPersona,
    setRole,
    setTaskDates,
    setTaskEpic,
    setTaskSprint,
    setTaskStatus,
    setView,
    setWho,
    sprintMessageBoxHtml,
    statusCls,
    submitModal,
    syncLinkedEmployeeTask,
    ticketDeleteIcon,
    ticketEditIcon,
    toggleAssetApproval,
    toggleSprintState,
    updateTopbarButtons
  });
}
