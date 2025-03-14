const manifest = (() => {

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B5ZL1bI1.js",app:"_app/immutable/entry/app.CLmifiv9.js",imports:["_app/immutable/entry/start.B5ZL1bI1.js","_app/immutable/chunks/P3ZA7ReR.js","_app/immutable/chunks/-0xMANws.js","_app/immutable/chunks/DNhBMxFD.js","_app/immutable/entry/app.CLmifiv9.js","_app/immutable/chunks/-0xMANws.js","_app/immutable/chunks/CHYSFP-A.js","_app/immutable/chunks/_-hrNojG.js","_app/immutable/chunks/D2j1xl2H.js","_app/immutable/chunks/B5JkUXHv.js","_app/immutable/chunks/BSihdq5R.js","_app/immutable/chunks/DNhBMxFD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/auth/sign-in","/auth/sign-up","/contact","/customer-reviews","/design","/design/questionare","/design/questionare/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/auth/sign-in","/auth/sign-up","/contact","/customer-reviews","/design","/design/questionare","/design/questionare/__data.json"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
