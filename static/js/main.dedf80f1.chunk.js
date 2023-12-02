(this["webpackJsonpipl-dashboard-app"]=this["webpackJsonpipl-dashboard-app"]||[]).push([[0],{31:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(25),i=a.n(n),r=a(10),l=a(4),m=a(9),o=a(12),d=a(13),h=a(20),j=a(14),g=a(19),p=(a(31),a(16)),u=a.n(p),b=(a(24),a(52),a(0)),O=function(e){var t=e.teamData,a=t.id,s=t.name,c=t.teamImageUrl;return Object(b.jsx)(r.b,{to:"/team-matches/".concat(a),className:"team-container",children:Object(b.jsxs)("li",{className:"team-container-li",children:[Object(b.jsx)("img",{src:c,alt:"".concat(s),className:"team-logo"}),Object(b.jsx)("p",{className:"team-name",children:s})]})})},x=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,teamsData:[]},e.getIplData=Object(o.a)(Object(m.a)().mark((function t(){var a,s,c;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://apis.ccbp.in/ipl/");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,c=s.teams.map((function(e){return{id:e.id,name:e.name,teamImageUrl:e.team_image_url}})),e.setState({isLoading:!1,teamsData:c});case 8:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getIplData()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.teamsData;return Object(b.jsx)("div",{className:"bg-container",children:t?Object(b.jsx)("div",{"data-testid":"loader",children:Object(b.jsx)(u.a,{type:"Oval",color:"#ffffff",height:50,width:50})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"logo-container",children:[Object(b.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png",alt:"ipl logo",className:"ipl-logo"}),Object(b.jsx)("h1",{className:"heading",children:"IPL Dashboard"})]}),Object(b.jsx)("ul",{className:"team-cards",children:a.map((function(e){return Object(b.jsx)(O,{teamData:e},e.id)}))})]})})}}]),a}(s.Component),f=x,N=(a(60),function(){return Object(b.jsx)("div",{className:"not-found-container",children:Object(b.jsx)("h1",{className:"not-found-heading",children:"Page Not Found !!"})})}),v=(a(61),function(e){var t=e.latestMatchDetails,a=t.competingTeam,s=t.competingTeamLogo,c=t.date,n=t.firstInnings,i=t.manOfTheMatch,r=t.result,l=t.secondInnings,m=t.umpires,o=t.venue;return Object(b.jsxs)("div",{className:"latest-match-bg-container",children:[Object(b.jsxs)("div",{className:"latest-match-sm-container",children:[Object(b.jsxs)("div",{className:"sm-upper-container",children:[Object(b.jsxs)("div",{className:"sm-upper-details-container",children:[Object(b.jsx)("h1",{className:"sm-upper-details-container-heading",children:a}),Object(b.jsx)("p",{className:"sm-latest-match-date",children:c}),Object(b.jsx)("p",{className:"sm-latest-match-venue",children:o}),Object(b.jsx)("p",{className:"sm-latest-match-result",children:r})]}),Object(b.jsx)("img",{src:s,alt:"latest match ".concat(a),className:"sm-latest-match-logo"})]}),Object(b.jsx)("hr",{className:"sm-lower-container-hr"}),Object(b.jsxs)("div",{className:"sm-lower-container",children:[Object(b.jsxs)("p",{className:"sm-lower-container-first-innings",children:["First Innings - ",n]}),Object(b.jsxs)("p",{className:"sm-lower-container-second-innings",children:["Second Innings - ",l]}),Object(b.jsxs)("p",{className:"sm-lower-container-man-of-the-match",children:["Man Of The Match - ",i]}),Object(b.jsxs)("p",{className:"sm-lower-container-umpires",children:["Umpires - ",m]})]})]}),Object(b.jsxs)("div",{className:"latest-match-lg-container",children:[Object(b.jsxs)("div",{className:"winner-container",children:[Object(b.jsx)("h1",{className:"lg-heading",children:a}),Object(b.jsx)("p",{className:"lg-date",children:c}),Object(b.jsx)("p",{className:"lg-venue",children:o}),Object(b.jsx)("p",{className:"lg-result",children:r})]}),Object(b.jsx)("img",{src:s,alt:"latest match ".concat(a),className:"lg-match-logo"}),Object(b.jsxs)("div",{className:"inning-container",children:[Object(b.jsx)("p",{className:"lg-fi-heading",children:"First Innings"}),Object(b.jsx)("p",{className:"lg-fi",children:n}),Object(b.jsx)("p",{className:"lg-si-heading",children:"Second Innings"}),Object(b.jsx)("p",{className:"lg-si",children:l}),Object(b.jsx)("p",{className:"lg-motm-heading",children:"Man Of The Match"}),Object(b.jsx)("p",{className:"lg-motm",children:i}),Object(b.jsx)("p",{className:"lg-umpires-heading",children:"Umpires"}),Object(b.jsx)("p",{className:"lg-umpires",children:m})]})]})]})}),_=(a(62),function(e){var t=e.matchData,a=t.competingTeam,s=t.competingTeamLogo,c=t.matchStatus,n=t.result,i="Won"===c?"green":"red";return Object(b.jsxs)("div",{className:"match-card-container",children:[Object(b.jsx)("img",{src:s,alt:"competing team ".concat(a),className:"match-card-logo"}),Object(b.jsx)("h1",{className:"match-card-heading",children:a}),Object(b.jsx)("p",{className:"match-card-result",children:n}),Object(b.jsx)("p",{className:i,children:c})]})}),M=(a(63),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0},e.getMatchData=Object(o.a)(Object(m.a)().mark((function t(){var a,s,c,n,i,r,l,o;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,s=a.params,c=s.id,t.next=5,fetch("https://apis.ccbp.in/ipl/".concat(c));case 5:return n=t.sent,t.next=8,n.json();case 8:i=t.sent,r=i.recent_matches.map((function(e){return{id:e.id,competingTeam:e.competing_team,competingTeamLogo:e.competing_team_logo,firstInnings:e.first_innings,date:e.date,manOfTheMatch:e.man_of_the_match,matchStatus:e.match_status,result:e.result,secondInnings:e.second_innings,umpires:e.umpires,venue:e.venue}})),l=i.team_banner_url,o={competingTeam:i.latest_match_details.competing_team,competingTeamLogo:i.latest_match_details.competing_team_logo,date:i.latest_match_details.date,firstInnings:i.latest_match_details.first_innings,id:i.latest_match_details.id,manOfTheMatch:i.latest_match_details.man_of_the_match,matchStatus:i.latest_match_details.match_status,result:i.latest_match_details.result,secondInnings:i.latest_match_details.second_innings,umpires:i.latest_match_details.umpires,venue:i.latest_match_details.venue},e.setState({isLoading:!1,recentMatches:r,teamBannerUrl:l,latestMatchDetails:o,id:c});case 13:case"end":return t.stop()}}),t)}))),e.getGradient=function(){var t=e.state.id,a="";return"KKR"===t?a="kkr-gradient":"RCB"===t?a="rcb-gradient":"KXP"===t?a="kxp-gradient":"CSK"===t?a="csk-gradient":"RR"===t?a="rr-gradient":"MI"===t?a="mi-gradient":"SH"===t?a="sh-gradient":"DC"===t&&(a="dc-gradient"),a},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getMatchData()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.teamBannerUrl,s=e.latestMatchDetails,c=e.recentMatches,n=this.getGradient();return Object(b.jsx)("div",{className:n,children:t?Object(b.jsx)("div",{"data-testid":"loader",children:Object(b.jsx)(u.a,{type:"Oval",color:"#ffffff",height:50,width:50})}):Object(b.jsxs)("div",{className:"team-match-container",children:[Object(b.jsx)("img",{src:a,className:"team-banner-img",alt:"team banner"}),Object(b.jsx)("p",{className:"latest-match-heading",children:"Latest Matches"}),Object(b.jsx)(v,{latestMatchDetails:s}),Object(b.jsx)("ul",{className:"match-cards-container",children:c.map((function(e){return Object(b.jsx)(_,{matchData:e},e.id)}))})]})})}}]),a}(s.Component)),D=M,w=(a(64),function(){return Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(l.a,{exact:!0,path:"/team-matches/:id",component:D}),Object(b.jsx)(l.a,{component:N})]})});i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(r.a,{basename:"/react-ipl-dashboard",children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.dedf80f1.chunk.js.map