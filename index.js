exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#0a0a0a',  // bg color
    foregroundColor: '#F8F8F2',  // default font color
    cursorColor: '#F8F8F2',  // cursor color
    selectionColor: 'rgba(255, 255, 255, 0.3)',  // selected text bg color
    borderColor: '#282A36',   // border color
    colors: {
      black: '#0a0a0a',      // dark bg
      red: '#ef4444',        // error status
      green: '#22c55e',      // success status
      yellow: '#eab308',     // warning status
      blue: '#8b5cf6',       // link or command
      magenta: '#f43f5e',    // highlight
      cyan: '#06b6d4',       // info
      white: '#fafafa',      // plain text
    },
    css: `
          .tabs_title {
              display: none !important;
          }
          .terms_terms {
              -webkit-font-smoothing: antialiased;
          }
          ${config.css}
        `
  });
}
