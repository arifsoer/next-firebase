"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const MOCK_URL_PENGAJUAN = "/pengajuan/12345";

const Page: FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between mb-3">
        <h2>List Pengajuan</h2>
        <button
          className="btn btn-primary btn-small"
          onClick={() => router.push(MOCK_URL_PENGAJUAN)}
        >
          Tambah Pengajuan
        </button>
      </div>
      <table className="table table-sm table-bordered table-striped">
        <thead className="table-success">
          <tr>
            <th>Tanggal Pengajuan</th>
            <th>Jumlah IDP</th>
            <th>Jumlah non-IDP</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25 Mei 2024</td>
            <td>10</td>
            <td>10</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>10</td>
            <td>10</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>10</td>
            <td>10</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>10</td>
            <td>10</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>10</td>
            <td>10</td>
            <td>Draft</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Page;
