export async function setTheme(colors) {
    const promiseResponse = await colors
    Object.entries(promiseResponse.fields).forEach(([name, value]) => {
        if (name === 'fontFamily') return setFontFamilyToBody(value)
        if (name === 'font') return importFontUrl(value)
        document.documentElement.style.setProperty(`--${name}`, `#${value}`);
    })
}

async function setFontFamilyToBody(FontFamily) {
    document.body.style.fontFamily = `${FontFamily}`;
}

async function importFontUrl(fontUrl) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', fontUrl);
    document.head.appendChild(link);
}

