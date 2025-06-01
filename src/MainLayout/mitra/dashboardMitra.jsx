import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardMitra = () => {
  const navigate = useNavigate();

  // Data ketersediaan
  const [ketersediaan, setKetersediaan] = useState([
    { id: 1, tipe: 'hotel', nama: 'Hotel Mawar', jumlah: 5 },
    { id: 2, tipe: 'penerbangan', nama: 'Lion Air', jumlah: 3 }
  ]);

  // Data booking
  const [booking, setBooking] = useState([
    { id: 1, user: 'Andi', item: 'Hotel Mawar', tipe: 'hotel', tanggal: '2025-06-01' },
    { id: 2, user: 'Sari', item: 'Lion Air', tipe: 'penerbangan', tanggal: '2025-06-03' }
  ]);

  // Form input tambah ketersediaan
  const [form, setForm] = useState({ tipe: 'hotel', nama: '', jumlah: 0 });

  // Fungsi tambah ketersediaan
  const handleAdd = () => {
    if (!form.nama.trim()) {
      alert('Nama harus diisi!');
      return;
    }
    if (form.jumlah <= 0) {
      alert('Jumlah harus lebih dari 0!');
      return;
    }
    const id = Date.now(); // id unik sederhana
    setKetersediaan([...ketersediaan, { id, ...form }]);
    setForm({ tipe: 'hotel', nama: '', jumlah: 0 }); // reset form
  };

  // Fungsi kurangi jumlah ketersediaan (tidak boleh kurang dari 0)
  const handleReduce = (id) => {
    setKetersediaan(
      ketersediaan.map((item) =>
        item.id === id && item.jumlah > 0 ? { ...item, jumlah: item.jumlah - 1 } : item
      )
    );
  };

  // Fungsi logout, redirect ke /login
  const handleLogout = () => {
    alert('Anda telah logout!');
    navigate('/login');
  };

  // Summary jumlah hotel dan penerbangan
  const totalHotel = ketersediaan
    .filter((item) => item.tipe === 'hotel')
    .reduce((acc, cur) => acc + cur.jumlah, 0);
  const totalPenerbangan = ketersediaan
    .filter((item) => item.tipe === 'penerbangan')
    .reduce((acc, cur) => acc + cur.jumlah, 0);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-gray-100 flex flex-col p-6">
        <h1 className="text-3xl font-bold mb-10 flex items-center space-x-3">
          <span>🚀</span>
          <span>Mitra Panel</span>
        </h1>
        <nav className="flex flex-col space-y-3 flex-grow">
          <Link
            to="/dashboard-mitra"
            className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            <span className="mr-3">📊</span> Dashboard
          </Link>
          {/* Menu lain */}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 transition-colors px-4 py-3 rounded-md text-white font-semibold"
        >
          🔒 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-gray-800">Dashboard Mitra</h2>
          <div className="text-gray-600">Selamat datang, Mitra!</div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
            <div className="bg-blue-600 text-white p-4 rounded-full text-3xl">🏨</div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Ketersediaan Hotel</p>
              <p className="text-3xl font-bold text-gray-900">{totalHotel}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
            <div className="bg-green-600 text-white p-4 rounded-full text-3xl">✈️</div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Ketersediaan Penerbangan</p>
              <p className="text-3xl font-bold text-gray-900">{totalPenerbangan}</p>
            </div>
          </div>
        </section>

        {/* Form tambah ketersediaan */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold mb-6">Tambah Ketersediaan</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <select
              value={form.tipe}
              onChange={(e) => setForm({ ...form, tipe: e.target.value })}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="hotel">Hotel</option>
              <option value="penerbangan">Penerbangan</option>
            </select>
            <input
              type="text"
              placeholder="Nama"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Jumlah"
              value={form.jumlah}
              onChange={(e) =>
                setForm({ ...form, jumlah: parseInt(e.target.value) || 0 })
              }
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={0}
            />
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Tambahkan
            </button>
          </div>
        </section>

        {/* Tabel ketersediaan */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold mb-6">Ketersediaan Saya</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left border border-gray-300">Tipe</th>
                  <th className="py-3 px-6 text-left border border-gray-300">Nama</th>
                  <th className="py-3 px-6 text-left border border-gray-300">Jumlah</th>
                  <th className="py-3 px-6 text-center border border-gray-300">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {ketersediaan.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.tipe}</td>
                    <td className="py-3 px-6 text-left">{item.nama}</td>
                    <td className="py-3 px-6 text-left">{item.jumlah}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleReduce(item.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors"
                        disabled={item.jumlah === 0}
                      >
                        Kurangi
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tabel booking */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Data Pemesan</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left border border-gray-300">Nama User</th>
                  <th className="py-3 px-6 text-left border border-gray-300">Item</th>
                  <th className="py-3 px-6 text-left border border-gray-300">Tipe</th>
                  <th className="py-3 px-6 text-left border border-gray-300">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">{b.user}</td>
                    <td className="py-3 px-6 text-left">{b.item}</td>
                    <td className="py-3 px-6 text-left">{b.tipe}</td>
                    <td className="py-3 px-6 text-left">{b.tanggal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardMitra;
