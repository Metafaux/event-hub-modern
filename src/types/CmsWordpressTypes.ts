interface CmsProperty {
  rendered: string;
}

interface WordpressCmsItem {
  id: number;
  // date: string;
  date_gmt: string;
  // guid: CmsProperty;
  // modified: string;
  modified_gmt: string;
  // slug: string;
  // status: string;
  type: string;
  // link: string;
  title: CmsProperty;
  // featured_media: number;
  // template: string;
}

export interface CmsEventItem extends WordpressCmsItem {
  acf: {
    event_address: string;
    event_date_time: string;
    venue_name: string;
    event_description: string;
    // event_image: string;
  };
  meta: {
    _acf_changed: boolean;
  };
}
