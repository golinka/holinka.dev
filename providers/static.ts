import { ImageCTX } from "@nuxt/image-edge";
import { joinURL } from "ufo";

export function getImage(src: string, { modifiers, baseURL } = {} as { modifiers: { [key: string]: string }, baseURL: string }, { options, $img }: ImageCTX) {
	return {
		url: joinURL(baseURL, src),
	};
}
