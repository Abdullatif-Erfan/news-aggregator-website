export interface axiosResponseTypes {
  data: {};
  status: 200;
  statusText: "OK";
  headers: {};
  config: {};
  request: {};
}

export interface SliderAxiosResponseType {
  title: string;
  publishedAt?: string;
  url?: string;
  urlToImage?: string;
}
export interface MainSliderPropTypes {
  title: string;
  urlToImage: string;
  url: string;
}

export interface AuthorAxiosResponseType {
  title: string;
  author?: string;
  publishedAt?: string;
  url?: string;
  urlToImage?: string;
}

export interface AuthorListPropType {
  title: string;
  author?: string;
  urlToImage?: string;
  url?: string;
  publishedAt?: string;
}

export type SearchedResultAxiosTypes = AuthorListPropType & {
  description: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
};

export type TopHeadlinePropType = AuthorAxiosResponseType & {
  source: {
    id: string;
    name: string;
  };
}


export type TopHeadlineAxiosResponseType = AuthorAxiosResponseType;

/** * ================ Login Form ================== */
export interface LoginFormInputType {
  email: String;
  password: String;
}

/** * ================ Registaration Form ================== */
export type RegisterFormInputType = LoginFormInputType & {
  name: String;
};


