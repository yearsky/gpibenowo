export interface Pengurus {
  nama: string;
  jabatan: string;
  foto?: string;
  kategori: 'majelis' | 'diakonia' | 'panitia';
}

export const pengurusGereja: Pengurus[] = [
  {
    nama: 'Pdt. Suryo Wibowo, M.Th.',
    jabatan: 'Pendeta Jemaat',
    foto: '/images/pengurus/pendeta.jpg',
    kategori: 'majelis',
  },
  {
    nama: 'Ev. Maria Susanti',
    jabatan: 'Ketua Majelis',
    foto: '/images/pengurus/ketua-majelis.jpg',
    kategori: 'majelis',
  },
  {
    nama: 'Bpk. Hendra Santoso',
    jabatan: 'Sekretaris Majelis',
    kategori: 'majelis',
  },
  {
    nama: 'Ibu Rini Kusumaningrum',
    jabatan: 'Bendahara Majelis',
    kategori: 'majelis',
  },
  {
    nama: 'Bpk. Yohanes Prasetyo',
    jabatan: 'Ketua Diakonia',
    kategori: 'diakonia',
  },
  {
    nama: 'Ibu Dewi Rahayu',
    jabatan: 'Sekretaris Diakonia',
    kategori: 'diakonia',
  },
];
