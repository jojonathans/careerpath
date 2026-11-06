export interface InfoFieldProps {
  label: string;
  value: string;
  className?: string;
}

export interface SocialLinks  {
  link_fb: string ;
  link_x: string ;
  link_linkedin: string ;
  link_ig: string ;
  link_github: string ;
}
export interface SocialLinksProps {
  socialLinks: SocialLinks;
  className?: string;
}

export interface ProfileResponse extends SocialLinks { // di extends karena sudah ada sosialLinks, jadi ini dapat semua yang ada di socialLinks
  id: number;
  user_id: number;
  first_name: string ;
  last_name: string ;
  phone: string ;
  address: string ;
  bio: string ;
}