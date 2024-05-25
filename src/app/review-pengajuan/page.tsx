import { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <h2>Review Pengajuan</h2>
      <table className="table table-sm table-bordered table-striped">
        <thead className="table-success">
          <tr>
            <th>Tanggal Pengajuan</th>
            <th>Pemohon</th>
            <th>Jumlah IDP</th>
            <th>Jumlah non-IDP</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25 Mei 2024</td>
            <td>Rizki Saputra</td>
            <td>10</td>
            <td>10</td>
            <td>Need Review</td>
            <td>
              <button className="btn btn-primary btn-sm">Details</button>
            </td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>Ali F</td>
            <td>10</td>
            <td>10</td>
            <td>Need Review</td>
            <td>
              <button className="btn btn-primary btn-sm">Details</button>
            </td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>Ahmad R</td>
            <td>10</td>
            <td>10</td>
            <td>Need Review</td>
            <td>
              <button className="btn btn-primary btn-sm">Details</button>
            </td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>Amalia Ratu</td>
            <td>10</td>
            <td>10</td>
            <td>Need Review</td>
            <td>
              <button className="btn btn-primary btn-sm">Details</button>
            </td>
          </tr>
          <tr>
            <td>25 Mei 2024</td>
            <td>Dani</td>
            <td>10</td>
            <td>10</td>
            <td>Need Review</td>
            <td>
              <button className="btn btn-primary btn-sm">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Page;
