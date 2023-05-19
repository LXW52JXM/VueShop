export interface Children {
	id: string;
	name: string;
	picture: string;
	children?: any;
	goods?: any;
}

export interface Good {
	id: string;
	name: string;
	desc: string;
	price: string;
	picture: string;
	orderNum?: any;
}

export interface Result {
	id: string;
	name: string;
	picture: string;
	children: Children[];
	goods: Good[];
}

export interface RootObject {
	code: string;
	msg: string;
	result: Result[];
}


//banner轮播图数据
export interface BannerResult {
	id: string;
	imgUrl: string;
	hrefUrl: string;
	type: string;
}

export interface BannerRoot {
	code: string;
	msg: string;
	result: BannerResult[];
}