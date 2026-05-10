export interface JadwalIbadah {
  id: string;
  nama: string;
  hari: string;
  waktu: string;
  lokasi: string;
  keterangan?: string;
  isLive?: boolean;
}

export const jadwalIbadah: JadwalIbadah[] = [
  {
    id: 'minggu-pagi',
    nama: 'Ibadah Minggu Pagi',
    hari: 'Minggu',
    waktu: '07.00 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
    isLive: true,
  },
  {
    id: 'minggu-sore',
    nama: 'Ibadah Minggu Sore',
    hari: 'Minggu',
    waktu: '17.00 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
  {
    id: 'pkl',
    nama: 'Persekutuan Kaum Lanjut Usia',
    hari: 'Selasa',
    waktu: '09.00 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
  {
    id: 'pkb',
    nama: 'Persekutuan Kaum Bapak',
    hari: 'Rabu',
    waktu: '18.30 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
  {
    id: 'pki',
    nama: 'Persekutuan Kaum Ibu',
    hari: 'Kamis',
    waktu: '09.00 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
  {
    id: 'pkr',
    nama: 'Persekutuan Kaum Remaja',
    hari: 'Jumat',
    waktu: '18.30 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
  {
    id: 'pka',
    nama: 'Persekutuan Kaum Anak',
    hari: 'Sabtu',
    waktu: '09.00 WIB',
    lokasi: 'Gedung Gereja GPIB Benowo',
  },
];
