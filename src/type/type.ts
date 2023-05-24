// import a from './test.json'

// type result1 = typeof a.result 



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

export interface Result{
	id: string;
	name: string;
	picture: string;
	children: Children[];
	goods: Good[];
}

//banner轮播图数据
export interface BannerResult {
	id: string;
	imgUrl: string;
	hrefUrl: string;
	type: string;
}


//new数据
export interface NewResult {
	id: string;
	name: string;
	desc: string;
	price: string;
	picture: string;
	orderNum: number;
}

//goods数据
export interface GoodsChildren {
	id: string;
	name: string;
	layer: number;
	parent?: any;
}

export interface GoodsResult {
	id: string;
	name: string;
	picture: string;
	saleInfo: string;
	children: GoodsChildren[];
	goods: Good[];
}


//根
export interface RootObject<T> {
	code: string;
	msg: string;
	result: T;
}