const assets = import.meta.glob('~/assets/**/*', {
	import: 'default',
	eager: true,
});

export const useAsset = (src: string) => {
	src = src.replace(/^~/i, ''); // Remove '~ at the start of the path'.
	return assets[src]?.toString() || src;
};