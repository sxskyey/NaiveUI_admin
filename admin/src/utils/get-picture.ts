function getPicture(name: string) {
    return new URL(`../assets/picture/home/${name}`, import.meta.url).href;
}

export default {
	getPicture
}