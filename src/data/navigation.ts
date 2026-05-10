export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'Tentang',
    href: '/tentang',
    children: [
      { label: 'Profil Gereja', href: '/tentang' },
      { label: 'Sejarah', href: '/tentang/sejarah' },
      { label: 'Visi & Misi', href: '/tentang/visi-misi' },
      { label: 'Pengurus', href: '/tentang/pengurus' },
    ],
  },
  { label: 'Jadwal Ibadah', href: '/ibadah' },
  { label: 'Renungan', href: '/renungan' },
  { label: 'Berita', href: '/berita' },
  { label: 'Media', href: '/media' },
  { label: 'Kontak', href: '/kontak' },
];
