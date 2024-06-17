declare module "app" {
  interface CommonStruct {
    id: number;
    remark?: string;
    created_at?: string;
    created_by?: string;
    updated_at?: string;
    updated_by?: string;
  }
  type SiteFooterType = "ABOUT" | "CONTACT" | "NEWS" | "SOCIAL";

  type SiteFooterSubType = "PLATFORM" | "COMPANY" | "PAPER";

  interface FooterInfoItem extends CommonStruct {
    title: string;
    link?: string;
    description?: string;
    type: SiteFooterType;
    sub_type?: SiteFooterSubType;
  }
  interface FooterInfoApiResult {
    about?: FooterInfoItem;
    contacts: FooterInfoItem[];
    socials: FooterInfoItem[];
    news: Array<{ type: SiteFooterSubType; list: FooterInfoItem[] }>;
  }

  interface Category extends CommonStruct {
    name: string;
    identify: string;
    books?: Book[];
  }

  interface Author extends CommonStruct {
    name: string;
    sex: string;
    tel: string;
    status: number;
    avatar?: string;
    books?: Book[];
  }

  interface Book extends CommonStruct {
    name: string;
    category_id: number;
    category?: Category;
    author_id: number;
    author?: Author;
    fetch_url?: string;
    crawl_rule_id?: number;
    cover?: string;
    chapters?: Chapter[];
  }

  interface Chapter extends CommonStruct {
    no: string;
    title: string;
    content?: string;
    book_id?: number;
    book?: Book;
    url?: string;
    prev_chapter_id?: number;
    next_chapter_id?: number;
  }

  interface Advertiser extends CommonStruct {
    name: string;
    tel: string;
    address: string;
  }

  interface Ads extends CommonStruct {
    title: string;
    link: string;
    image?: string;
    description?: string;
    advertiser_id: number;
    advertiser?: Advertiser;
    expired_at: string;
    status: 0 | 1;
  }
}
