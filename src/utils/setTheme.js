export async function setTheme(colors) {
    const promiseResponse = await colors
    Object.entries(promiseResponse.fields).forEach(([name, value]) => {
        document.documentElement.style.setProperty(`--${name}`, `#${value}`);
    })


}