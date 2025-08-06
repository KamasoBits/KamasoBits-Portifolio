
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/packages"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24009, hash: '2c3921e40c249ae23c300c70b81393f54e72016038be9ff8e1e2441daa67c856', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17194, hash: 'eddbb2926e0f6eed0880f7a48fcbd24195942d1ae015d99a8038f897cef61ad1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38887, hash: '4b6c9782a5bf223de2a6b37302fb630562a9b59ac1ec3322dd38341e426b4803', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67052, hash: '1824a9e0ad3685386aeef9cd3d82c6c4b631753f8509bd1f164e88bcc4b3c2b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 40569, hash: '83d3d089f016a707daa59be04205a863f2ab54c14d168909cb3a97839204d3b1', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 38033, hash: '49d7765b1f8f9e50906b9389f2da198bb80c0a644d8558b16d37743b4945b523', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37676, hash: '764bf8d0e72b6c8ec07c8e14b5fc88998a44db65c1a12778a39e42e054ad0d1f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-SMJHQKIF.css': {size: 81016, hash: 'kPUs1Yw5fRM', text: () => import('./assets-chunks/styles-SMJHQKIF_css.mjs').then(m => m.default)}
  },
};
