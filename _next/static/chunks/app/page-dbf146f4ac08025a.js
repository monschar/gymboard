(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8115:function(e,l,i){Promise.resolve().then(i.bind(i,8566))},8566:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return w}});var s,t,a,r,n=i(7437),c=i(2265),d=i(8466),o=i(9135);function m(e){return(0,n.jsx)(d.u,{show:e.isModalOpen,children:(0,n.jsxs)(o.Vq,{className:"relative z-10",onClose:e.onClose,children:[(0,n.jsx)(d.x,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,n.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,n.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",children:(0,n.jsx)(d.x,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,n.jsx)(o.EM,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg h-full",children:(0,n.jsx)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,n.jsx)("div",{className:"sm:flex sm:items-start",children:e.modalContent})})})})})})]})})}function p(e){let[l,i]=(0,c.useState)(!1),s=(0,n.jsx)("iframe",{src:e.link+"&danmaku=0&mute=0",className:"h-[80vh] w-full object-cover object-center lg:h-[80vh] lg:w-full"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"group relative cursor-pointer",onClick:()=>i(!0),children:[(0,n.jsx)("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:(0,n.jsx)("iframe",{className:"w-full h-full object-cover object-center lg:h-full lg:w-full",src:e.link+"&autoplay=0&poster=1"})}),(0,n.jsx)("div",{className:"mt-4 flex justify-between ",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{className:"text-sm text-gray-700 group-hover:text-indigo-500",children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.name]}),(0,n.jsx)("p",{className:"mt-1 text-sm text-gray-500 group-hover:text-indigo-300",children:e.tips})]})})]},e.name),(0,n.jsx)(m,{isModalOpen:l,onClose:()=>i(!1),modalContent:s})]})}function x(e){let{clips:l}=e;return(0,n.jsx)("div",{className:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8",children:l.map(e=>(0,n.jsx)(p,{...e},e.name))})}var u=i(4573),h=i(9808);(s=a||(a={})).All="All",s.Arm="Arm",s.Leg="Leg",s.Shoulder="Shoulder",s.Chest="Chest",s.Back="Back",s.Abs="Abs",(t=r||(r={})).SetClips="SET_CLIPS",t.SetSelectedBodyPart="SET_SELECTED_BODY_PART",t.FilterClips="FILTER_CLIPS";let y=Object.keys(a);function b(e){let{children:l,dispatch:i}=e,[s,t]=(0,c.useState)(!1),a=e=>{i({type:r.SetSelectedBodyPart,payload:e}),i({type:r.FilterClips})};return(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(d.u,{show:s,children:(0,n.jsxs)(o.Vq,{className:"relative z-40 lg:hidden",onClose:t,children:[(0,n.jsx)(d.x,{enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,n.jsx)("div",{className:"fixed inset-0 z-40 flex",children:(0,n.jsx)(d.x,{enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,n.jsxs)(o.EM,{className:"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between px-4",children:[(0,n.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),(0,n.jsxs)("button",{type:"button",className:"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",onClick:()=>t(!1),children:[(0,n.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,n.jsx)(u.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,n.jsxs)("form",{className:"mt-4 border-t border-gray-200",children:[(0,n.jsx)("h3",{className:"sr-only",children:"Categories"}),(0,n.jsx)("ul",{role:"list",className:"px-2 py-3 font-medium text-gray-900",children:y.map(e=>(0,n.jsx)("li",{onClick:()=>a(e),children:(0,n.jsx)("p",{className:"block px-2 py-3",children:e})},e))})]})]})})})]})}),(0,n.jsxs)("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,n.jsxs)("div",{className:"flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold tracking-tight text-gray-900",children:"Gym Board"}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("button",{type:"button",className:"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",onClick:()=>t(!0),children:[(0,n.jsx)("span",{className:"sr-only",children:"Filters"}),(0,n.jsx)(h.Z,{className:"h-5 w-5","aria-hidden":"true"})]})})]}),(0,n.jsxs)("section",{"aria-labelledby":"products-heading",className:"pb-24 pt-6",children:[(0,n.jsx)("h2",{id:"products-heading",className:"sr-only",children:"Products"}),(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4",children:[(0,n.jsxs)("form",{className:"hidden lg:block",children:[(0,n.jsx)("h3",{className:"sr-only",children:"Categories"}),(0,n.jsx)("ul",{role:"list",className:"space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900",children:y.map(e=>(0,n.jsx)("li",{onClick:()=>a(e),className:"cursor-pointer hover:bg-violet-40",children:(0,n.jsx)("p",{children:e})},e))})]}),(0,n.jsx)("div",{className:"lg:col-span-3",children:l})]})]})]})]})})}let f={clips:[],filteredClips:[],selectedBodyPart:""};function j(e,l){switch(l.type){case r.SetClips:return{...e,clips:l.payload,filteredClips:l.payload};case r.SetSelectedBodyPart:return{...e,selectedBodyPart:l.payload};case r.FilterClips:return{...e,filteredClips:e.clips.filter(l=>e.selectedBodyPart==a.All?l:l.bodyPart==e.selectedBodyPart)};default:throw Error("Unknown action type")}}let g=[{name:"直杆弯举",bodyPart:a.Arm,tips:"大臂靠住身体，快上慢下",link:"//player.bilibili.com/player.html?isOutside=true&aid=1253903614&bvid=BV1xJ4m1E7JJ&cid=1526897321&p=1"},{name:"哑铃弯举",bodyPart:a.Arm,tips:"靠住板凳，交替，吐气外旋",link:"//player.bilibili.com/player.html?isOutside=true&aid=1253903614&bvid=BV1xJ4m1E7JJ&cid=1526897321&p=1"},{name:"蜘蛛弯举",bodyPart:a.Arm,tips:"靠住板凳，大腿夹住，大臂垂直地面，交替",link:"//player.bilibili.com/player.html?isOutside=true&aid=1154505127&bvid=BV18Z421x7cz&cid=1546007377&p=1"},{name:"锤式弯举",bodyPart:a.Arm,tips:"大臂靠住身体，快上微停慢下",link:"//player.bilibili.com/player.html?isOutside=true&aid=1204512882&bvid=BV14f421m7nx&cid=1543907910&p=1"},{name:"绳索臂屈伸",bodyPart:a.Arm,tips:"挺胸，两侧打开",link:"//player.bilibili.com/player.html?isOutside=true&aid=1104983285&bvid=BV1Cw4m1U7nK&cid=1551289162&p=1"}],v=[{name:"绳索下拉",bodyPart:a.Back,tips:"沉肩，掌心朝前到相对",link:"//player.bilibili.com/player.html?isOutside=true&aid=1754326677&bvid=BV1xt421u7aG&cid=1536770025&p=1"},{name:"单臂划船",bodyPart:a.Back,tips:"身体微微旋转，放回去吐气",link:""},{name:"坐姿划船",bodyPart:a.Back,tips:"拉向肚脐，肘关节往后一顶",link:"//player.bilibili.com/player.html?isOutside=true&aid=1404081644&bvid=BV1Br421E7Ve&cid=1529533394&p=1"},{name:"高位下拉",bodyPart:a.Back,tips:"对握把手，大臂内夹，沉肩，",link:""},{name:"杠铃划船",bodyPart:a.Back,tips:"大臂内夹，小腿垂直",link:""},{name:"斜板凳划船",bodyPart:a.Back,tips:"大臂内夹，小腿垂直",link:""},{name:"高位下拉",bodyPart:a.Back,tips:"大臂内夹，小腿垂直",link:""}],N=[{name:"直杆弯举",bodyPart:a.Arm,tips:"大臂靠住身体，快上慢下",link:"//player.bilibili.com/player.html?isOutside=true&aid=1253903614&bvid=BV1xJ4m1E7JJ&cid=1526897321&p=1"}],k=[...g,...v,{name:"直杆弯举",bodyPart:a.Arm,tips:"大臂靠住身体，快上慢下",link:"//player.bilibili.com/player.html?isOutside=true&aid=1253903614&bvid=BV1xJ4m1E7JJ&cid=1526897321&p=1"},...N,{name:"直杆弯举",bodyPart:a.Arm,tips:"大臂靠住身体，快上慢下",link:"//player.bilibili.com/player.html?isOutside=true&aid=1253903614&bvid=BV1xJ4m1E7JJ&cid=1526897321&p=1"}];function w(){let[e,l]=(0,c.useReducer)(j,f);return(0,c.useEffect)(()=>{l({type:r.SetClips,payload:k})},[]),(0,n.jsx)(b,{dispatch:l,children:(0,n.jsx)(x,{clips:e.filteredClips})})}}},function(e){e.O(0,[602,971,23,744],function(){return e(e.s=8115)}),_N_E=e.O()}]);