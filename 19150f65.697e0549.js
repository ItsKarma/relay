(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(323)),i=t(329),s=(t(324),{id:"fragments",title:"Fragments",slug:"/guided-tour/rendering/fragments/"}),c={unversionedId:"guided-tour/rendering/fragments",id:"version-v11.0.0/guided-tour/rendering/fragments",isDocsHomePage:!1,title:"Fragments",description:"The main building block for declaring data dependencies for React Components in Relay are GraphQL Fragments. Fragments are reusable units in GraphQL that repesent a set of data to query from a GraphQL type exposed in the schema.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/rendering/fragments.md",slug:"/guided-tour/rendering/fragments/",permalink:"/docs/guided-tour/rendering/fragments/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/rendering/fragments.md",version:"v11.0.0",lastUpdatedBy:"Sojin Park",lastUpdatedAt:1617984929,sidebar:"version-v11.0.0/docs",previous:{title:"Queries",permalink:"/docs/guided-tour/rendering/queries/"},next:{title:"Variables",permalink:"/docs/guided-tour/rendering/variables/"}},l=[{value:"Rendering Fragments",id:"rendering-fragments",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]},{value:"Composing Fragments into Queries",id:"composing-fragments-into-queries",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The main building block for declaring data dependencies for React Components in Relay are ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#fragments"}),"GraphQL Fragments"),". Fragments are reusable units in GraphQL that repesent a set of data to query from a GraphQL type exposed in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/"}),"schema"),"."),Object(o.b)("p",null,"In practice, they are a selection of fields on a GraphQL Type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n}\n")),Object(o.b)("p",null,"In order to declare a fragment inside your JavaScript code, you must use the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," tag:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('react-relay');\n\nconst userFragment = graphql`\n  fragment UserFragment_user on User {\n    name\n    age\n    profile_picture(scale: 2) {\n      uri\n    }\n  }\n`;\n")),Object(o.b)("h2",{id:"rendering-fragments"},"Rendering Fragments"),Object(o.b)("p",null,"In order to ",Object(o.b)("em",{parentName:"p"},"render")," the data for a fragment, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"useFragment")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>\n        <img src={data.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(o.b)("p",null,"Let's distill what's going on here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useFragment")," takes a fragment definition and a ",Object(o.b)("em",{parentName:"li"},"fragment reference"),", and returns the corresponding ",Object(o.b)("inlineCode",{parentName:"li"},"data")," for that fragment and reference."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"fragment reference")," is an object that Relay uses to ",Object(o.b)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the ",Object(o.b)("inlineCode",{parentName:"li"},"UserComponent_user")," fragment itself just declares fields on the ",Object(o.b)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",Object(o.b)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference is like ",Object(o.b)("em",{parentName:"li"},"a pointer to a specific instance of a type")," that we want to read data from."),Object(o.b)("li",{parentName:"ul"},"Note that ",Object(o.b)("em",{parentName:"li"},"the component is automatically subscribed to updates to the fragment data"),": if the data for this particular ",Object(o.b)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),Object(o.b)("li",{parentName:"ul"},"Relay will automatically generate Flow types for any declared fragments when the compiler is run, so you can use these types to declare the type for your Component's ",Object(o.b)("inlineCode",{parentName:"li"},"props"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The generated Flow types include a type for the fragment reference, which is the type with the ",Object(o.b)("inlineCode",{parentName:"li"},"$key")," suffix: ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>$key"),", and a type for the shape of the data, which is the type with the ",Object(o.b)("inlineCode",{parentName:"li"},"$data")," suffix:  ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>$data"),"; these types are available to import from files that are generated with the following name: ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),"."),Object(o.b)("li",{parentName:"ul"},"We use our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/relayjs/eslint-plugin-relay"}),"lint rule")," to enforce that the type of the fragment reference prop is correctly declared when using ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment"),". By using a properly typed fragment reference as input, the type of the returned ",Object(o.b)("inlineCode",{parentName:"li"},"data")," will automatically be Flow typed without requiring an explicit annotation."),Object(o.b)("li",{parentName:"ul"},"In our example, we're typing the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," prop as the fragment reference we need for ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment"),", which corresponds to the ",Object(o.b)("inlineCode",{parentName:"li"},"UserComponent_user$key")," imported from  ",Object(o.b)("inlineCode",{parentName:"li"},"UserComponent_user.graphql"),", which means that the type of ",Object(o.b)("inlineCode",{parentName:"li"},"data")," above would be: ",Object(o.b)("inlineCode",{parentName:"li"},"{ name: ?string, profile_picture: ?{ uri: ?string } }"),"."))),Object(o.b)("li",{parentName:"ul"},"Fragment names need to be globally unique. In order to easily achieve this, we name fragments using the following convention based on the module name followed by an identifier: ",Object(o.b)("inlineCode",{parentName:"li"},"<module_name>_<property_name>"),". This makes it easy to identify which fragments are defined in which modules and avoids name collisions when multiple fragments are defined in the same module.")),Object(o.b)("p",null,"If you need to render data from multiple fragments inside the same component, you can use  ",Object(o.b)("inlineCode",{parentName:"p"},"useFragment")," multiple times:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\nimport type {UserComponent_viewer$key} from 'UserComponent_viewer.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n  viewer: UserComponent_viewer$key,\n};\n\nfunction UserComponent(props: Props) {\n  const userData = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const viewerData = useFragment(\n    graphql`\n      fragment UserComponent_viewer on Viewer {\n        actor {\n          name\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (\n    <>\n      <h1>{userData.name}</h1>\n      <div>\n        <img src={userData.profile_picture?.uri} />\n        Acting as: {viewerData.actor?.name ?? 'Unknown'}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(o.b)("h2",{id:"composing-fragments"},"Composing Fragments"),Object(o.b)("p",null,"In GraphQL, fragments are reusable units, which means they can include ",Object(o.b)("em",{parentName:"p"},"other")," fragments, and consequently a fragment can be included within other fragments or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../queries/"}),"queries"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n  ...AnotherUserFragment\n}\n\nfragment AnotherUserFragment on User {\n  username\n  ...FooUserFragment\n}\n")),Object(o.b)("p",null,"With Relay, you can compose fragment components in a similar way, using both component composition and fragment composition. Each React component is responsible for fetching the data dependencies of its direct children - just as it has to know about its children's props in order to render them correctly. This pattern means that developers are able to reason locally about components - what data they need, what components they render - but Relay is able to derive a global view of the data dependencies of an entire UI tree."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UsernameSection.react.js\n *\n * Child Fragment Component\n */\n\nimport type {UsernameSection_user$key} from 'UsernameSection_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UsernameSection_user$key,\n};\n\nfunction UsernameSection(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UsernameSection_user on User {\n        username\n      }\n    `,\n    props.user,\n  );\n\n  return <div>{data.username ?? 'Unknown'}</div>;\n}\n\nmodule.exports = UsernameSection;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UserComponent.react.js\n *\n * Parent Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\nconst UsernameSection = require('./UsernameSection.react');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const user = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        age\n        profile_picture(scale: 2) {\n          uri\n        }\n\n        # Include child fragment:\n        ...UsernameSection_user\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <div>\n        <img src={user.profile_picture?.uri} />\n        {user.age}\n\n        {/* Render child component, passing the _fragment reference_: */}\n        <UsernameSection user={user} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),Object(o.b)("p",null,"There are a few things to note here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UserComponent")," both renders ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection"),", ",Object(o.b)("em",{parentName:"li"},"and")," includes the fragment declared by ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection")," inside its own ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," fragment declaration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection")," expects a ",Object(o.b)("em",{parentName:"li"},"fragment reference")," as the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," prop. As we've mentioned before, a fragment reference is an object that Relay uses to ",Object(o.b)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the child ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection_user")," fragment itself just declares fields on the ",Object(o.b)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",Object(o.b)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference is like ",Object(o.b)("em",{parentName:"li"},"a pointer to a specific instance of a type")," that we want to read data from."),Object(o.b)("li",{parentName:"ul"},"Note that in this case the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," passed to ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection"),", i.e. the fragment reference, ",Object(o.b)("em",{parentName:"li"},"doesn't actually contain any of the data declared by the child ",Object(o.b)("inlineCode",{parentName:"em"},"UsernameSection")," component"),"; instead, ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection")," will use the fragment reference to read the data ",Object(o.b)("em",{parentName:"li"},"it")," declared internally, using ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment"),". This prevents the parent from implicitly creating dependencies on data declared by its children, and vice-versa, which allows us to reason locally about our components and modify them without worrying about affecting other components. If this wasn't the case, and the parent had access to the child's data, modifying the data declared by the child could break the parent. This is known as ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../../principles-and-architecture/thinking-in-relay/"}),Object(o.b)("em",{parentName:"a"},"data masking")),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"fragment reference")," that the child (i.e.  ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection"),") expects is the result of reading a parent fragment that ",Object(o.b)("em",{parentName:"li"},"includes")," the child fragment. In our particular example, that means the result of reading a fragment that includes ",Object(o.b)("inlineCode",{parentName:"li"},"...UsernameSection_user")," will be the fragment reference that ",Object(o.b)("inlineCode",{parentName:"li"},"UsernameSection")," expects. In other words, the data obtained as a result of reading a fragment via ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment")," also serves as the fragment reference for any child fragments included in that fragment.")),Object(o.b)("h2",{id:"composing-fragments-into-queries"},"Composing Fragments into Queries"),Object(o.b)("p",null,"Fragments in Relay allow declaring data dependencies for a component, but they ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"can't be fetched by themselves")),". Instead, they need to be included in a query, either directly or transitively. This means that ",Object(o.b)("em",{parentName:"p"},"all fragments must belong to a query when they are rendered"),', or in other words, they must be "rooted" under some query. Note that a single fragment can still be included by multiple queries, but when rendering a specific ',Object(o.b)("em",{parentName:"p"},"instance")," of a fragment component, it must have been included as part of a specific query request."),Object(o.b)("p",null,"To fetch and render a query that includes a fragment, you can compose them in the same way fragments are composed, as shown in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#composing-fragments"}),"Composing Fragments")," section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * UserComponent.react.js\n *\n * Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`...`,\n    props.user,\n  );\n\n  return (...);\n}\n\nmodule.exports = UserComponent;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n *\n * Query Component\n */\n\nimport type {AppQuery} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nconst UserComponent = require('./UserComponent.react');\n\ntype Props = {\n  appQueryRef: PreloadedQuery<AppQuery>,\n}\n\nfunction App({appQueryRef}) {\n  const data = usePreloadedQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n\n          # Include child fragment:\n          ...UserComponent_user\n        }\n      }\n    `,\n    appQueryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      {/* Render child component, passing the fragment reference: */}\n      <UserComponent user={data.user} />\n    </>\n  );\n}\n\n")),Object(o.b)("p",null,"Note that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"fragment reference")," that  ",Object(o.b)("inlineCode",{parentName:"li"},"UserComponent")," expects is is the result of reading a parent query that includes its fragment, which in our case means a query that includes ",Object(o.b)("inlineCode",{parentName:"li"},"...UsernameSection_user"),". In other words, the ",Object(o.b)("inlineCode",{parentName:"li"},"data")," obtained as a result of ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also serves as the fragment reference for any child fragments included in that query."),Object(o.b)("li",{parentName:"ul"},"As mentioned previously, ",Object(o.b)("em",{parentName:"li"},"all fragments must belong to a query when they are rendered,")," which means that all fragment components ",Object(o.b)("em",{parentName:"li"},"must")," be descendants of a query. This guarantees that you will always be able to provide a fragment reference for ",Object(o.b)("inlineCode",{parentName:"li"},"useFragment"),", by starting from the result of reading a root query with ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),".")),Object(o.b)(i.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,s(s({ref:n},l),{},{components:t})):a.a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},324:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=o(t(327));const i=["internal","external"];let s;try{s=t(325).usePluginData}catch(m){s=null}function c(e){return u(e),p()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function p(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=p,n.FbInternalOnly=function(e){return p()?e.children:null},n.OssOnly=function(e){return p()?null:e.children}}).call(this,t(326))},325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return o})),t.d(n,"usePluginData",(function(){return i}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function i(e,n){void 0===n&&(n="default");var t=o(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},326:function(e,n){var t,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],u=!1,p=-1;function m(){u&&c&&(u=!1,c.length?l=c.concat(l):p=-1,l.length&&d())}function d(){if(!u){var e=s(m);u=!0;for(var n=l.length;n;){for(c=l,l=[];++p<n;)c&&c[p].run();p=-1,n=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function b(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new f(e,n)),1!==l.length||u||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},327:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(n){o(n)}}function s(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(328);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(n){o(n)}}function s(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,o=0;const i={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,s),t}))}},329:function(e,n,t){"use strict";t(61);var r=t(324),a=t(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},l=function(){return a.createElement(i,null,a.createElement(c,null),a.createElement(s,null))},u=function(){return a.createElement(i,null,a.createElement(s,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(l,null),external:a.createElement(u,null)})}}}]);