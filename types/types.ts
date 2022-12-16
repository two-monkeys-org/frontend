export enum AuthType {
  Login = "login",
  Register = "registration",
}

export interface AuthState {
  shouldDisplayAuthModal: boolean;
  authType?: AuthType;
}

export interface AppListItem {
  id: number;
  name: string;
  slug: string;
  src: string;
}

export interface AppListProps {
  items: AppListItem[];
}

export interface AppListItemProps {
  item: AppListItem;
}

export enum PasswordStrength {
  Weak = "weak",
  Medium = "medium",
  Strong = "strong",
}
