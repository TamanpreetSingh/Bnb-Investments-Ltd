// Types for BNB Investments Ltd landing page

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustIndicator {
  icon: string;
  title: string;
  description: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Sector {
  title: string;
  image: string;
  description: string;
}

export interface ApproachCard {
  icon: string;
  title: string;
  description: string;
}

export interface WhyPoint {
  text: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
