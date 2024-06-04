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
}
