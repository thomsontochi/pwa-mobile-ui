export interface HomeShortcut {
  id: number
  label: string
  badgeCount?: number
  icon: string
}

export interface ProductSlide {
  id: number
  eyebrow?: string
  title: string
  subtitle: string
  cta: string
  badgeLabel?: string
  illustration: string
  accentColor: string
  details?: string[]
  primaryCta?: string
  secondaryCta?: string
}

export interface AlertBanner {
  id: number
  time: string
  title: string
  description: string
  badgeCount?: number
}

export interface QuickAction {
  id: number
  label: string
  icon: string
  route?: string
  sheetId?: string
}

export interface AccountActivity {
  id: number
  name: string
  type: string
  amount: string
  isPositive: boolean
  timestamp: string
  avatarSymbol: string
}

export interface CashbackProgress {
  id: number
  label: string
  description: string
  remainingLabel: string
  progress: number
  target: number
  promoTitle: string
  promoDescription: string
}

export interface BottomNavItem {
  id: number
  label: string
  icon: string
  route: string
}

export interface ActionSheetOption {
  id: number
  label: string
  icon: string
}

export interface ActionSheet {
  id: string
  title: string
  options: ActionSheetOption[]
  cancelLabel?: string
}
