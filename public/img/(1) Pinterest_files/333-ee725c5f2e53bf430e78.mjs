(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[333],{"+41Z":function(e,t,s){var i=s("q1tI"),n=s("CKfu"),a=s("qD10"),l=s("28DW"),r=s("xkL+"),c=s("vvax"),o=s("yweb"),d=s("pLLR"),p=s("n6mq"),h=s("nKUr");function b(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class m extends i.Component{constructor(...e){super(...e),b(this,"state",{showLegalText:!1}),b(this,"toggleLegalText",()=>{const e=this.state.showLegalText;this.setState({showLegalText:!e})})}getPersonalizedText(){const{viewer:e}=this.props;let t;return e&&e.firstName?t=e.firstName:e&&e.partner&&e.partner.business_name&&(t=e.partner.business_name),t?Object(c.b)(this.props.i18n._("Hi {{ displayName }},","client.partner.adcredits_calendly.sales_contact_modal.display_text.personalized_business_name","Text to prompt to schedule a sales call with name"),{displayName:t}):this.props.i18n._("Hi!","client.partner.adcredits_calendly.sales_contact_modal.display_text.generic_greeting","Text to prompt to schedule a sales call")}getPersonalizedURL(){const{leadId:e}=this.props;return Object(n.a)({leadId:e,source:"adcredits_calendly.sales_contact_modal"})}renderButtonWithLink(){const{handleComplete:e}=this.props;return Object(h.jsx)(p.f,{padding:6,position:"absolute",display:"flex",bottom:!0,right:!0,children:Object(h.jsx)(p.f,{paddingX:1,paddingY:2,children:Object(h.jsx)(a.a,{to:this.getPersonalizedURL(),external:!0,children:Object(h.jsx)(p.g,{size:"md",color:"red",text:this.props.i18n._("Schedule time now","client.partner.adcredits_calendly.sales_contact_modal.submit_button.schedule_time_now.link","Button to schedule sales call"),onClick:()=>{Object(l.a)("client.partner.adcredits_calendly.sales_contact_modal.complete"),e()}})})})})}renderPinGridImageBoxShort(){return Object(h.jsx)(p.f,{width:180,height:320,children:Object(h.jsx)(p.y,{alt:this.props.i18n._("Pin grid image short","client.partner.adcredits_calendly.sales_contact_modal.image_short","Pin grid image preview text"),naturalWidth:180,naturalHeight:320,src:"https://i.pinimg.com/originals/6a/93/eb/6a93eb6b580747e78f0788b3c36abc12.png"})})}renderPinGridImageBoxLong(){return Object(h.jsx)(p.f,{width:180,height:510,children:Object(h.jsx)(p.y,{alt:this.props.i18n._("Pin grid image long","client.partner.adcredits_calendly.sales_contact_modal.image_long","Pin grid image preview text"),naturalWidth:180,naturalHeight:510,src:"https://i.pinimg.com/originals/58/49/1e/58491ea02f79fb3725684c8e81e4cd09.png"})})}render(){const{showLegalText:e}=this.state,t=e?this.renderPinGridImageBoxLong():this.renderPinGridImageBoxShort(),s=this.renderButtonWithLink();return Object(h.jsx)(p.f,{color:"white",overflow:"hidden",rounding:3,width:540,height:e?480:320,children:Object(h.jsxs)(p.f,{display:"flex",alignItems:"center",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",justifyContent:"start",width:180,height:e?480:320,children:t}),Object(h.jsxs)(p.f,{position:"relative",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",width:360,height:e?480:320,children:Object(h.jsx)(p.f,{paddingX:8,children:Object(h.jsxs)(p.f,{paddingY:8,children:[Object(h.jsx)(p.v,{overflow:"normal",size:"md",children:this.props.i18n._("Get $100 of free ads credit!","client.partner.adcredits_calendly.sales_contact_modal.heading.ads_consultation","Prompt to schedule ads consultation and receive ad credits")}),Object(h.jsx)(p.f,{paddingY:2,children:Object(h.jsx)(p.bb,{size:"md",children:this.getPersonalizedText()})}),Object(h.jsx)(p.f,{paddingY:2,children:Object(h.jsx)(p.bb,{size:"md",children:this.props.i18n._("You’ve qualified for a free ads consultation. Book your session with a Pinterest ads expert and get $100 in ads credit!","client.partner.adcredits_calendly.sales_contact_modal.subtext.schedule_call","Prompt to schedule a sales call")})}),Object(h.jsx)(p.bb,{align:"center",inline:!0,size:"sm",children:Object(c.b)(this.props.i18n._("{{ additionalTerms }}","client.partner.adcredits_calendly.sales_contact_modal.additional_terms","preview of terms"),{additionalTerms:Object(h.jsx)(p.f,{display:"inlineBlock",paddingY:1,children:Object(h.jsx)(p.ab,{fullWidth:!1,onTap:this.toggleLegalText,children:Object(h.jsx)(p.bb,{inline:!0,size:"sm",weight:"bold",children:this.props.i18n._("Additional terms apply","client.partner.adcredits_calendly.sales_contact_modal.additional_terms.text","click for more terms")})})},"additionalTermsModal")})}),e&&Object(h.jsx)(p.f,{marginTop:3,children:Object(h.jsx)(p.bb,{size:"sm",children:this.props.i18n._("By tapping Schedule time now, you agree to Pinterest’s Business Terms of Service, and acknowledge our Privacy Policy. When you click Schedule time now and succesfully book a call with sales, $100 in ads credit will be issued to the account associated with the advertiser ID claiming the credits. Any unused ads credits will expire 90 days after credited to your account. Limit one per account. U.S. only. Must be 18+. Pinterest reserves the right to cancel or modify offer at any time.","client.partner.adcredits_calendly.sales_contact_modal.additional_terms.legal_text","additional legal text")})})]})})}),s]}),Object(h.jsx)(p.f,{padding:4,position:"absolute",right:!0,top:!0,children:Object(h.jsx)(p.x,{accessibilityLabel:this.props.i18n._("Close upsell","client.partner.adcredits_calendly.sales_contact_modal.close_icon_accessibility_label","Accessibility label for close icon in sales contact modal"),icon:"cancel",iconColor:"gray",onClick:()=>{Object(l.a)("client.partner.adcredits_calendly.sales_contact_modal.dismiss"),this.props.handleDismiss()},size:"sm"})})]})})}}function u(e){const t=Object(o.c)(),s=Object(d.d)(),i=Object(r.b)();return Object(h.jsx)(m,{...e,requestContext:s,viewer:i,i18n:t})}class _ extends i.Component{getPersonalizedURL(){const{leadId:e,viewer:t}=this.props;return Object(n.a)({country:t.country||"",leadId:e,source:"outbound_calendly.sales_contact_modal"})}renderButtonWithLink(){const{handleComplete:e}=this.props;return Object(h.jsx)(p.f,{padding:6,position:"absolute",display:"flex",bottom:!0,right:!0,children:Object(h.jsx)(p.f,{paddingX:1,paddingY:2,children:Object(h.jsx)(a.a,{to:this.getPersonalizedURL(),external:!0,children:Object(h.jsx)(p.g,{size:"md",color:"red",text:this.props.i18n._("Schedule time now","client.partner.outbound_calendly.sales_contact_modal.submit_button.schedule_time_now.link","Button to schedule sales call"),onClick:()=>{Object(l.a)("client.partner.outbound_calendly.sales_contact_modal.complete"),e()}})})})})}renderPinGridImageBox(){return Object(h.jsx)(p.f,{width:180,height:315,children:Object(h.jsx)(p.y,{alt:this.props.i18n._("Pin grid image","client.partner.outbound_calendly.sales_contact_modal.image","Pin grid image preview text"),naturalWidth:180,naturalHeight:315,src:"https://i.pinimg.com/originals/32/8c/3d/328c3de21311632f53a50d2462149799.png"})})}render(){const e=this.renderPinGridImageBox(),t=this.renderButtonWithLink(),s=this.props.i18n._("Drive traffic","client.partner.outbound_calendly.sales_contact_modal.subtext.drive_traffic","Benefit for scheduling a sales call -- drive traffic"),i=this.props.i18n._("Increase sales","client.partner.outbound_calendly.sales_contact_modal.subtext.increase_sales","Benefit for scheduling a sales call -- increase sales"),n=this.props.i18n._("Grow brand awareness","client.partner.outbound_calendly.sales_contact_modal.subtext.grow_awareness","Benefit for scheduling a sales call -- grow awareness");return Object(h.jsx)(p.f,{color:"white",overflow:"hidden",rounding:3,width:540,height:315,children:Object(h.jsxs)(p.f,{display:"flex",alignItems:"center",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",justifyContent:"start",width:180,height:315,children:e}),Object(h.jsxs)(p.f,{position:"relative",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",width:360,height:315,children:Object(h.jsx)(p.f,{paddingX:8,children:Object(h.jsxs)(p.f,{paddingY:6,children:[Object(h.jsx)(p.f,{paddingY:2,children:Object(h.jsx)(p.v,{overflow:"normal",size:"md",children:this.props.i18n._("You qualify for a free ads consultation","client.partner.outbound_calendly.sales_contact_modal.heading.ads_consultation","Prompt to schedule outbound ads consultation")})}),Object(h.jsx)(p.bb,{size:"md",children:this.props.i18n._("Let a Pinterest business expert help your business:","client.partner.outbound_calendly.sales_contact_modal.subtext","Subtext to prompt to schedule a sales call with Pinterest business expert")}),Object(h.jsxs)(p.f,{paddingY:1,children:[Object(h.jsxs)(p.bb,{size:"md",children:["• ",s]}),Object(h.jsxs)(p.bb,{size:"md",children:["• ",i]}),Object(h.jsxs)(p.bb,{size:"md",children:["• ",n]})]}),Object(h.jsx)(p.bb,{size:"md",children:this.props.i18n._("Schedule your 20-minute session today!","client.partner.outbound_calendly.sales_contact_modal.subtext.schedule_call","Prompt to schedule a sales call")})]})})}),t]}),Object(h.jsx)(p.f,{padding:4,position:"absolute",right:!0,top:!0,children:Object(h.jsx)(p.x,{accessibilityLabel:this.props.i18n._("Close upsell","client.partner.outbound_calendly.sales_contact_modal.close_icon_accessibility_label","Accessibility label for close icon in outbound sales contact modal"),icon:"cancel",iconColor:"gray",onClick:()=>{Object(l.a)("client.partner.outbound_calendly.sales_contact_modal.dismiss"),this.props.handleDismiss()},size:"sm"})})]})})}}function j(e){const t=Object(o.c)(),s=Object(d.d)(),i=Object(r.b)();return Object(h.jsx)(_,{...e,requestContext:s,viewer:i,i18n:t})}var x=s("7w6Q"),g=s("r8eU");class f extends i.Component{constructor(...e){var t,s,i;super(...e),i={isPersonalized:!1,isInBSLCopyExperiment:!1,isInShopifyCopyExperiment:!1},(s="state")in(t=this)?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i}getPersonalizedText(){const{viewer:e}=this.props;let t,s;return e&&e.partner&&e.partner.business_name&&(s=e.partner.business_name),e&&e.firstName?t=e.firstName:e&&e.partner&&e.partner.business_name&&(t=e.partner.business_name),this.state.isInBSLCopyExperiment?t?Object(c.b)(this.props.i18n._("Hi, {{ displayName }}!","client.partner.calendly.sales_contact_modal.display_text.personalized_business_name","Text to prompt to reserve sales call session"),{displayName:t}):this.props.i18n._("Hi!","client.partner.calendly.sales_contact_modal.display_text.generic_thanks","Text to prompt to schedule a sales call and learn tips from Pinterest experts"):this.state.isInShopifyCopyExperiment?s?Object(c.b)(this.props.i18n._("{{ businessName }} was selected to receive a free, personalized 1:1 ads consultation!","client.partner.calendly.sales_contact_modal.display_text.qualified_business","Text to prompt a business is eligible to reserve sales call session"),{businessName:s}):this.props.i18n._("You were selected to receive a free, personalized 1:1 ads consultation!","client.partner.calendly.sales_contact_modal.display_text.generic_qualified_text","Text to prompt a generic business is eligible to reserve sales call session"):t?Object(c.b)(this.props.i18n._("Thanks for requesting a free ads consultation, {{ displayName }}!","client.partner.calendly.sales_contact_modal.display_text.personalized_business_name","Text to prompt to reserve sales call session"),{displayName:t}):this.props.i18n._("Thanks for requesting a free ads consultation!","client.partner.calendly.sales_contact_modal.display_text.generic_thanks","Text to prompt to schedule a sales call and learn tips from Pinterest experts")}getSubtext(){return this.state.isInShopifyCopyExperiment?this.props.i18n._("Let us show you how our Shopify tools make advertising even easier.","client.partner.calendly.sales_contact_modal.display_subtext.shopify","Subtext to prompt a Shopify user to schedule a sales call and learn tips from Pinterest experts"):this.props.i18n._("After reviewing your business, our Pinterest experts found new ways to help you meet your goals.","client.partner.calendly.sales_contact_modal.display_subtext","Subtext to prompt to schedule a sales call and learn tips from Pinterest experts")}getPersonalizedLink(){const{leadId:e}=this.props;return e?"/business/schedule_call/?sfid="+e:(x.a.increment("client.partner.calendly.sales_contact_modal.lead_missing.route",1),"/schedule_call/")}getPersonalizedURL(){const{leadId:e,viewer:t}=this.props;return Object(n.a)({country:t.country||"",leadId:e,source:"sales_contact_modal"})}renderButtonsWithLink(){const{handleComplete:e}=this.props;return Object(h.jsx)(p.f,{padding:6,position:"absolute",display:"flex",bottom:!0,right:!0,children:Object(h.jsx)(p.f,{paddingX:1,paddingY:2,children:Object(h.jsx)(a.a,{to:this.getPersonalizedURL(),external:!0,children:Object(h.jsx)(p.g,{size:"md",color:"red",text:this.props.i18n._("Schedule time now","client.partner.calendly.sales_contact_modal.submit_button.schedule_time_now.link","Button to schedule sales call"),onClick:()=>{Object(l.a)("client.partner.calendly.sales_contact_modal.complete"),e()}})})})})}renderButtonsWithRoute(){const{handleComplete:e}=this.props;return Object(h.jsx)(p.f,{padding:6,position:"absolute",display:"flex",bottom:!0,right:!0,children:Object(h.jsx)(p.f,{paddingX:1,paddingY:2,children:Object(h.jsx)(a.a,{to:this.getPersonalizedLink(),children:Object(h.jsx)(p.g,{size:"md",color:"red",text:this.props.i18n._("Schedule time now","client.partner.calendly.sales_contact_modal.submit_button.schedule_time_now.route","Button to schedule sales call"),onClick:()=>{Object(l.a)("client.partner.calendly.sales_contact_modal.complete"),e()}})})})})}renderPinGridImageBox(){return Object(h.jsx)(p.f,{width:180,height:315,children:Object(h.jsx)(p.y,{alt:this.props.i18n._("Pin grid image","client.partner.calendly.sales_contact_modal.image","Pin grid image preview text"),naturalWidth:180,naturalHeight:315,src:"https://i.pinimg.com/originals/32/8c/3d/328c3de21311632f53a50d2462149799.png"})})}componentDidMount(){if("webform"===this.props.leadSource){const e=new g.b(this.props.requestContext,"adv_growth_calendly_iframe_sales_contact").enabled();this.setState({isPersonalized:e})}if(502205===this.props.experienceId&&"Behavior Score"===this.props.leadSource){const e=new g.b(this.props.requestContext,"adv_growth_calendly_bsl_modal_copy").enabled();this.setState({isInBSLCopyExperiment:e})}if(502205===this.props.experienceId&&"Shopify"===this.props.leadSource){const e=new g.b(this.props.requestContext,"adv_growth_calendly_shopify_modal").enabled();this.setState({isInShopifyCopyExperiment:e})}}render(){const e=this.state.isPersonalized?this.renderButtonsWithRoute():this.renderButtonsWithLink();return Object(h.jsx)(p.f,{color:"white",overflow:"hidden",rounding:3,width:540,height:315,children:Object(h.jsxs)(p.f,{display:"flex",alignItems:"center",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",justifyContent:"start",width:180,height:315,children:this.renderPinGridImageBox()}),Object(h.jsxs)(p.f,{position:"relative",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"start",width:360,height:315,children:Object(h.jsx)(p.f,{paddingX:8,children:Object(h.jsxs)(p.f,{paddingY:6,children:[Object(h.jsx)(p.v,{overflow:"normal",size:"md",children:this.props.i18n._("Let's talk! Get more traffic and sales","client.partner.calendly.sales_contact_modal.heading.more_sales","prompt to schedule ads consultation")}),Object(h.jsx)(p.f,{paddingY:3,children:Object(h.jsx)(p.bb,{size:"md",children:this.getPersonalizedText()})}),Object(h.jsx)(p.f,{paddingY:2,children:Object(h.jsx)(p.bb,{size:"md",children:this.getSubtext()})})]})})}),e]}),Object(h.jsx)(p.f,{padding:4,position:"absolute",right:!0,top:!0,children:Object(h.jsx)(p.x,{accessibilityLabel:this.props.i18n._("Close upsell","client.partner.calendly.sales_contact_modal.close_icon_accessibility_label","Accessibility label for close icon in sales contact modal"),icon:"cancel",iconColor:"gray",onClick:()=>{Object(l.a)("client.partner.calendly.sales_contact_modal.dismiss"),this.props.handleDismiss()},size:"sm"})})]})})}}function O(e){const t=Object(o.c)(),s=Object(d.d)(),i=Object(r.b)();return Object(h.jsx)(f,{...e,requestContext:s,viewer:i,i18n:t})}var y=s("c4Fo"),w=s("FDmi"),v=s("+Poj"),C=s.n(v),S=s("eOdZ");function L(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const I="first",k="end";class P extends i.Component{constructor(e){super(e),L(this,"onCheck",({checked:e})=>{501312===this.props.experienceId?Object(l.a)("auth.web.fix_bounced_email_modal.uncheck.notifications.box"):Object(l.a)("auth.web.fix_email_modal.uncheck.notifications.box"),this.setState({checked:e})}),L(this,"onTextChange",({value:e})=>{501312===this.props.experienceId?Object(l.a)("auth.web.fix_bounced_email_modal.change.email.text"):Object(l.a)("auth.web.fix_email_modal.change.email.text"),this.setState({newEmail:e})}),L(this,"closeModal",()=>{const{handleComplete:e}=this.props;setTimeout(e,5e3)}),L(this,"updateEmailAddress",()=>{const{currentEmail:e}=this.props,{checked:t,newEmail:s}=this.state;e&&s&&e.trim()!==s?S.a.create("UserSettingsResource",{email:s,email_bounced:!1}).callUpdate({showError:!1}).then(()=>this.updateNotifSetting(t),e=>this.setState({errorMessage:e.message})):this.updateNotifSetting(t)}),L(this,"updateNotifSetting",e=>{let t;this.setState({currentStep:k}),t=!0===e?{section:"settings_email_everything",option:"ONLY_REQUIRED",value:!1}:{section:"settings_email_everything",option:"ONLY_REQUIRED",value:!0},S.a.create("EmailSettingsResource",t).callUpdate(),501312===this.props.experienceId?(Object(l.a)("auth.web.fix_bounced_email_modal.completed"),this.closeModal()):(Object(l.a)("auth.web.fix_email_modal.completed"),this.closeModal())}),this.state={currentStep:I,newEmail:e.currentEmail,checked:!0}}getModalText(e){return e===I?501312===this.props.experienceId?this.props.descriptionText:this.props.i18n._("We're having some trouble reaching you. Is this still your email?","prompt to update email","prompt to update email"):this.props.i18n._("Thanks! Your email preferences have been saved.","after updating email address","after updating email address")}renderStep(e){const{checked:t,errorMessage:s,newEmail:i}=this.state,{experienceId:n}=this.props;return e===I?501312===n?Object(h.jsxs)(p.f,{children:[Object(h.jsx)(p.db,{errorMessage:s,id:"email",onChange:this.onTextChange,size:"lg",type:"email",value:i}),Object(h.jsx)(p.f,{paddingY:2,children:Object(h.jsx)(p.g,{fullWidth:!0,color:"red",text:this.props.i18n._("Done","done updating email address","done updating email address"),onClick:this.updateEmailAddress})}),Object(h.jsxs)(p.f,{alignItems:"center",display:"flex",children:[Object(h.jsx)(p.k,{checked:t,id:"notif",onChange:this.onCheck,size:"sm"}),Object(h.jsx)(p.z,{htmlFor:"notif",children:Object(h.jsx)(p.f,{paddingX:2,children:Object(h.jsx)(p.bb,{size:"md",children:this.props.i18n._("Want to get recommendations and updates in your inbox?","checkbox option in a prompt","checkbox option in a prompt")})})})]})]}):Object(h.jsxs)(p.f,{maxWidth:310,children:[Object(h.jsxs)(p.f,{alignItems:"center",display:"flex",marginBottom:6,children:[Object(h.jsx)(p.k,{checked:t,id:"notif",onChange:this.onCheck,size:"sm"}),Object(h.jsx)(p.z,{htmlFor:"notif",children:Object(h.jsx)(p.f,{paddingX:2,children:Object(h.jsx)(p.bb,{size:"md",children:this.props.i18n._("Want to get recommendations and updates in your inbox?","checkbox option in a prompt","checkbox option in a prompt")})})})]}),Object(h.jsx)(p.db,{errorMessage:s,id:"email",onChange:this.onTextChange,size:"lg",type:"email",value:i}),Object(h.jsx)(p.f,{paddingY:1,children:Object(h.jsx)(p.g,{fullWidth:!0,color:"red",text:this.props.i18n._("Done","done updating email address","done updating email address"),onClick:this.updateEmailAddress})})]}):Object(h.jsx)(p.bb,{overflow:"normal",children:Object(c.b)(this.props.i18n._("You can always change them later from your {{settingsLink}}.","link to change email settings","link to change email settings"),{settingsLink:Object(h.jsx)(a.a,{to:"/settings/",children:this.props.i18n._("Settings","link to edit account settings","link to edit account settings")},"settingsLink")})})}render(){const{handleDismiss:e,experienceId:t,titleText:s,userAvatar:i,userPhoto:n,userName:a}=this.props,{currentStep:r}=this.state;return 501312===t?Object(h.jsx)(p.H,{heading:Object(h.jsx)(p.f,{display:"flex",justifyContent:"center",alignItems:"center",children:s}),accessibilityModalLabel:s||"",onDismiss:()=>{Object(l.a)("auth.web.fix_bounced_email_modal.dismiss"),e()},footer:null,role:"alertdialog",size:"sm",children:Object(h.jsxs)(p.f,{children:[n&&i&&a?Object(h.jsx)(p.f,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(h.jsx)(w.a,{src:i,name:a,size:"lg"})}):null,Object(h.jsxs)(p.f,{children:[Object(h.jsx)(p.f,{paddingX:4,paddingY:2,children:Object(h.jsx)(p.bb,{children:this.getModalText(r)})}),Object(h.jsx)(p.f,{padding:4,alignSelf:"center",children:this.renderStep(r)})]})]})}):Object(h.jsx)(p.f,{color:"white",overflow:"hidden",rounding:2,width:660,height:540,children:Object(h.jsxs)(p.f,{display:"flex",alignItems:"center",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"end",justifyContent:"center",width:330,height:540,children:Object(h.jsx)(p.f,{width:292,height:479,marginBottom:-6,children:Object(h.jsx)(p.y,{alt:this.props.i18n._("preview of mobile app","prompt to fix email","prompt to fix email"),naturalWidth:292,naturalHeight:479,src:C.a})})}),Object(h.jsxs)(p.f,{position:"relative",children:[Object(h.jsx)(p.f,{display:"flex",alignItems:"center",width:330,height:540,children:Object(h.jsxs)(p.f,{paddingX:3,children:[Object(h.jsx)(p.f,{paddingY:6,children:Object(h.jsx)(p.v,{overflow:"normal",size:"sm",children:this.getModalText(r)})}),this.renderStep(r)]})}),r===I&&Object(h.jsx)(p.f,{padding:6,position:"absolute",bottom:!0,right:!0,children:Object(h.jsx)(p.ab,{fullWidth:!1,onTap:()=>{Object(l.a)("auth.web.fix_email_modal.dismiss"),e()},children:Object(h.jsx)(p.bb,{weight:"bold",children:this.props.i18n._("Skip for now","Skip prompt to change email address","Skip prompt to change email address")})})})]})]})})}}function z(e){const t=Object(o.c)(),s=Object(r.b)();return Object(h.jsx)(P,{...e,i18n:t,userAvatar:s.isAuth?s.imageLargeUrl:void 0,userName:s.isAuth?s.username:void 0})}var T=s("Ht9O"),E=s("TgLd"),B=s("NdXn"),A=s("gC5q");t.a=({placementId:e})=>Object(h.jsx)(y.a,{experienceIds:[501312,500331,502205,502334,502271,502726,502804,503587,503192],placementId:e,children:({experience_id:e,complete:t,dismiss:s,display_data:i})=>{const n=function(e){switch(e){case 502205:case 502804:return O;case 503192:return u;case 502334:case 503587:return j;case 502271:return T.a;default:return z}}(e);return Object(h.jsx)(E.b,{accessibilityModalLabel:"",onDismiss:s,size:500331===e?"md":"sm",children:Object(h.jsx)(n,{...Object(A.a)(B.a)(i),handleComplete:t,handleDismiss:s,experienceId:e})})}})},"+Poj":function(e,t){e.exports="https://s.pinimg.com/webapp/fix_email-74ef63c3.png"},CKfu:function(e,t,s){var i=s("7w6Q"),n=s("kmwA");const{CALENDLY_DOMAIN:a,CALENDLY_PINTEREST_CA_SMB_SALES_TEAM:l,CALENDLY_PINTEREST_US_SMB_SALES_TEAM:r,CALENDLY_PINTEREST_DISCOVERY_CALL:c,CALENDLY_PINTEREST_UK_DIRECT_SALES_TEAM:o,CALENDLY_PINTEREST_UK_DISCOVERY_CALL:d}=n.a.settings;t.a=({country:e,leadId:t,source:s})=>{let n=r,p=c;i.a.increment(`client.partner.calendly.${s}.country.${e||"no_country"}`,1),"CA"===e?n=l:"GB"===e&&(n=o,p=d);const h=`${a}/${n}/${p}`;return t?`${h}?sfid=${t}`:(i.a.increment(`client.partner.calendly.${s}.lead_missing.link`,1),h)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/333-ee725c5f2e53bf430e78.mjs.map