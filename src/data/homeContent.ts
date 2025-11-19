import type {
  AccountActivity,
  ActionSheet,
  AlertBanner,
  BottomNavItem,
  CashbackProgress,
  HomeShortcut,
  ProductSlide,
  QuickAction,
} from '@/types/home'

export const homeShortcuts: HomeShortcut[] = [
  { id: 1, label: 'Papara Sticker Card', badgeCount: 2, icon: 'sticker-card' },
  { id: 2, label: 'Papara Superman Card', badgeCount: 0, icon: 'superman-card' },
  { id: 3, label: 'e-Şans 150 TL Hediye', badgeCount: 0, icon: 'gift-card' },
  { id: 4, label: 'Yatırım Hesabı', badgeCount: 0, icon: 'investment' },
  { id: 5, label: 'Altın Hediyem', badgeCount: 0, icon: 'gold-gift' },
]

export const productSlides: ProductSlide[] = [
  {
    id: 1,
    title: 'Türk Lirası Hesabı',
    subtitle: 'IBAN • TR05 …',
    cta: 'Yatır / Çek',
    badgeLabel: 'Papara',
    illustration: 'account-tl',
    accentColor: '#2167FF',
    details: ['Tüm varlıkların tek ekranda', 'Türk Lirası, Kıymetli Madenler, Birikim hesabı'],
    primaryCta: 'Yatır / Çek',
    secondaryCta: 'Gönder',
  },
  {
    id: 2,
    title: 'Kıymetli Madenler',
    subtitle: 'Altın, Gümüş, Platin',
    cta: 'Kıymetli Madenler Hesabı Aç',
    illustration: 'precious-metals',
    accentColor: '#FFD60A',
    details: ['Güncel fiyatlarla al / sat', 'Altın, gümüş ve platin hesapları'],
    primaryCta: 'Hesap Aç',
    secondaryCta: 'Detayları Gör',
  },
  {
    id: 3,
    title: 'Birikim Hesabı',
    subtitle: 'Hedef belirle, birikim yap.',
    cta: 'Birikim Hesabı Aç',
    illustration: 'savings-jar',
    accentColor: '#6C63FF',
    details: ['Esnek hedefler belirle', 'Otomatik tasarruf planları'],
    primaryCta: 'Birikim Hesabı Aç',
  },
  {
    id: 4,
    title: 'Yatırım Hesabı',
    subtitle: 'Hisse senedi al / sat',
    cta: 'Yatırım Hesabı Oluştur',
    illustration: 'investment-portfolio',
    accentColor: '#34C759',
    details: ['Borsada işlem yap', 'Ücretsiz hesap açılışı'],
    primaryCta: 'Yatırım Hesabı Oluştur',
    secondaryCta: 'Detayları Gör',
  },
  {
    id: 5,
    title: 'Dolar Hesabı',
    subtitle: 'Yatırım işlemlerin için dolar al/sat.',
    cta: 'Yatırım Hesabı Oluştur',
    illustration: 'dollar-account',
    accentColor: '#0EA5E9',
    details: ['Anında kur ile al/sat', 'Dolar birikimlerini takip et'],
    primaryCta: 'Dolar Hesabı Aç',
  },
  {
    id: 6,
    title: 'Tüm Varlıklarım',
    subtitle: 'Türk Lirası, Kıymetli Madenler, Yatırım, Birikim',
    cta: 'Detayları görüntüle',
    illustration: 'portfolio-overview',
    accentColor: '#9CA3AF',
    details: ['Tüm hesapların özeti', 'Anlık değer güncellemeleri'],
    primaryCta: 'Detayları Görüntüle',
  },
]

export const alertBanners: AlertBanner[] = [
  {
    id: 1,
    time: 'Bugün 06:00',
    title: 'Aylık hesap özetin oluşturuldu.',
    description: 'Eylül ayında neler yaptığını görmek için tıkla',
    badgeCount: 5,
  },
]

export const quickActions: QuickAction[] = [
  { id: 1, label: 'Hesabına Para Yatır', icon: 'arrow-down-circle' },
  { id: 2, label: 'Papara Card İste', icon: 'credit-card' },
  { id: 3, label: 'Para Gönder', icon: 'arrow-up-right' },
  { id: 4, label: 'Para İste', icon: 'hand-coins' },
]

export const accountActivities: AccountActivity[] = [
  {
    id: 1,
    name: 'Hidayet Salt',
    type: 'FAST Para Transferi',
    amount: '-20.000,00',
    isPositive: false,
    timestamp: '14 Eylül 2025 20:14',
    avatarSymbol: 'HS',
  },
  {
    id: 2,
    name: 'Garanti BBVA',
    type: 'FAST Para Transferi',
    amount: '+20.000,00',
    isPositive: true,
    timestamp: '14 Eylül 2025 20:12',
    avatarSymbol: 'GB',
  },
]

export const cashbackProgress: CashbackProgress = {
  id: 1,
  label: 'Cashback',
  description: '₺500 harcama hedefini tamamla, Cashback kazanmaya başla.',
  remainingLabel: '₺500,00 kaldı',
  progress: 0,
  target: 500,
  promoTitle: '₺960 anında nakit kazan',
  promoDescription: 'Ekim 2025 kampanyasını kaçırma',
}

export const bottomNavItems: BottomNavItem[] = [
  { id: 1, label: 'Ana Sayfa', icon: 'home', route: '/' },
  { id: 2, label: 'QR İşlemleri', icon: 'qr-code', route: '/qr' },
  { id: 3, label: 'Para Transferi', icon: 'send', route: '/transfer' },
  { id: 4, label: 'Ödemeler', icon: 'wallet', route: '/payments' },
  { id: 5, label: 'Papara Card', icon: 'credit-card', route: '/card' },
]

export const actionSheets: ActionSheet[] = [
  {
    id: 'transfer',
    title: 'Para Gönder',
    options: [
      { id: 1, label: 'Para Gönder', icon: 'arrow-up-right' },
      { id: 2, label: 'Para İste', icon: 'hand-coins' },
      { id: 3, label: 'Yurt Dışı Para Transferi', icon: 'globe' },
      { id: 4, label: 'Güvenli Ödeme İşlemi', icon: 'shield' },
      { id: 5, label: 'Düzenli Transfer', icon: 'refresh' },
    ],
    cancelLabel: 'Vazgeç',
  },
  {
    id: 'qr',
    title: 'QR İşlemleri',
    options: [
      { id: 1, label: 'QR ile Ödeme Yap', icon: 'qr-code' },
      { id: 2, label: 'QR ile Ödeme Al', icon: 'scan' },
      { id: 3, label: "QR ile ATM'den Para Çek", icon: 'atm-withdraw' },
      { id: 4, label: "QR ile ATM'den Para Yatır", icon: 'atm-deposit' },
    ],
    cancelLabel: 'Vazgeç',
  },
]
