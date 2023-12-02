## Hotel API Endpoints

API ini menyediakan beberapa endpoint untuk mengelola informasi tentang hotel.

### Daftar Isi
1. [Daftar Semua Post](#daftar-semua-post)
2. [Buat Post Baru](#buat-post-baru)
3. [Dapatkan Post Berdasarkan ID](#dapatkan-post-berdasarkan-id)
4. [Perbarui Post Berdasarkan ID](#perbarui-post-berdasarkan-id)
5. [Hapus Post Berdasarkan ID](#hapus-post-berdasarkan-id)

---

### 1. Daftar Semua Post
**Endpoint**: `GET api/posts`

#### Deskripsi
Mengembalikan daftar semua post hotel.

#### Respon Sukses
- Kode Status: 200 OK
- Body:
  ```json
  [
    {
      "_id": "post_id",
      "name": "Nama Hotel",
      "description": "Deskripsi Hotel",
      "facility": ["Fasilitas 1", "Fasilitas 2"],
      "location": "Lokasi Hotel",
      "price": 100.00,
      "images": ["URL_Gambar_1", "URL_Gambar_2"],
      "link": "URL_Website_Hotel"
    },
    // ... post lainnya
  ]
  ```

---

### 2. Buat Post Baru
**Endpoint**: `POST api/posts`

#### Deskripsi
Membuat post baru untuk hotel dengan informasi yang diberikan.

#### Permintaan
- Metode: `POST`
- Body:
  ```json
  {
    "name": "Nama Hotel",
    "description": "Deskripsi Hotel",
    "facility": ["Fasilitas 1", "Fasilitas 2"],
    "location": "Lokasi Hotel",
    "price": 100.00,
    "images": ["Gambar_1", "Gambar_2"],
    "link": "URL_Website_Hotel"
  }
  ```

#### Respon Sukses
- Kode Status: 200 OK
- Body:
  ```json
  {
    "post": {
      "_id": "post_id",
      "name": "Nama Hotel",
      "description": "Deskripsi Hotel",
      "facility": ["Fasilitas 1", "Fasilitas 2"],
      "location": "Lokasi Hotel",
      "price": 100.00,
      "images": ["URL_Gambar_1", "URL_Gambar_2"],
      "link": "URL_Website_Hotel"
    }
  }
  ```

---

### 3. Dapatkan Post Berdasarkan ID
**Endpoint**: `GET api/posts/:id`

#### Deskripsi
Mengambil informasi post hotel berdasarkan ID.

#### Permintaan
- Metode: `GET`

#### Respon Sukses
- Kode Status: 200 OK
- Body:
  ```json
  {
    "_id": "post_id",
    "name": "Nama Hotel",
    "description": "Deskripsi Hotel",
    "facility": ["Fasilitas 1", "Fasilitas 2"],
    "location": "Lokasi Hotel",
    "price": 100.00,
    "images": ["URL_Gambar_1", "URL_Gambar_2"],
    "link": "URL_Website_Hotel"
  }
  ```

---

### 4. Perbarui Post Berdasarkan ID
**Endpoint**: `PUT api/posts/:id`

#### Deskripsi
Memperbarui informasi post hotel berdasarkan ID.

#### Permintaan
- Metode: `PUT`
- Body:
  ```json
  {
    "name": "Nama Hotel Baru",
    "description": "Deskripsi Hotel Baru",
    "facility": ["Fasilitas Baru 1", "Fasilitas Baru 2"],
    "location": "Lokasi Hotel Baru",
    "price": 150.00,
    "images": ["URL_Gambar_Baru_1", "URL_Gambar_Baru_2"],
    "link": "URL_Website_Hotel_Baru"
  }
  ```

#### Respon Sukses
- Kode Status: 200 OK
- Body:
  ```json
  { "message": "Post was updated successfully." }
  ```

---

### 5. Hapus Post Berdasarkan ID
**Endpoint**: `DELETE api/posts/:id`

#### Deskripsi
Menghapus post hotel berdasarkan ID.

#### Permintaan
- Metode: `DELETE`

#### Respon Sukses
- Kode Status: 200 OK
- Body:
  ```json
  { "message": "Post was deleted successfully!" }
  ```

---

Pastikan untuk menggantikan placeholder seperti `post_id`, `Gambar_1`, dan `URL_Website_Hotel` dengan nilai yang sesuai. Juga, pastikan untuk memberikan dokumentasi lebih rinci sesuai kebutuhan aplikasi Anda.
