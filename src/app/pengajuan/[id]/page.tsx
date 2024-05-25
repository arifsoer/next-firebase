"use client";

import ModalComponent from "@/components/modal";
import { FC, useState } from "react";
import SelectComp from "@/components/select-bt";
import AccordionBtr, { TItemAccordionBtr } from "@/components/accordion-btr";
import Form from "react-bootstrap/esm/Form";
import { useRouter } from "next/navigation";

type TItem = {
  title: string;
  children?: (TParent | TChildItem)[];
};

type TParent = {
  title: string;
  children?: (TParent | TChildItem)[];
};

type TChildItem = {
  title: string;
  hasContent: boolean;
  hasContact: boolean;
  hasContext: boolean;
  isIdp: boolean;
  nilaiJp: string;
};

const formItems: TParent[] = [
  {
    title: "Pembelajaran Formal",
    children: [
      {
        title: "Program Pembelajaran Internal (Inhouse Training)",
        children: [
          {
            title: "Kepemimpinan Dasar",
            hasContact: true,
            hasContent: false,
            hasContext: true,
            isIdp: true,
            nilaiJp: "Sesuai JP",
          },
          {
            title: "Penjenjangan",
            children: [
              {
                title: "Manager Pratama",
                hasContact: true,
                hasContent: true,
                hasContext: true,
                isIdp: true,
                nilaiJp: "Sesuai JP",
              },
              {
                title: "Manager Pratama",
                hasContact: true,
                hasContent: true,
                hasContext: true,
                isIdp: true,
                nilaiJp: "1 hari setara 2 JP, Maksimal 40 JP  dalam 1 tahun",
              },
            ],
          },
        ],
      },
    ],
  },
];

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string[]>([]);
  const [formGenerates, setFormGenerates] = useState(formItems);
  const [selectedPembelajaran, setSelectedPembelajaran] =
    useState<TChildItem | null>(null);
  const [listPembelajaran, setListPembelajaran] = useState<
    (TChildItem & { parentTitle: string[] })[]
  >([]);

  const onTambahkanForm = () => {
    if (selectedPembelajaran && selectedTitle.length > 0) {
      selectedTitle.pop();
      setListPembelajaran((old) => [
        ...old,
        { ...selectedPembelajaran, parentTitle: selectedTitle },
      ]);
    }
    setIsModalOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setSelectedTitle([]);
    setFormGenerates(formItems);
    setSelectedPembelajaran(null);
  };

  const HeaderModal = (
    <>
      <h3>Pilih Pembelajaran</h3>
    </>
  );

  const bodyForm = (
    <div>
      {selectedTitle.map((its) => (
        <div key={its} className="mb-2">
          <SelectComp
            items={[{ title: its, value: its }]}
            disabled
            defaultValue={its}
          />
        </div>
      ))}
      {formGenerates.length > 0 && (
        <div className="mb-2">
          <SelectComp
            onChange={(selectedValue) => {
              setSelectedTitle((old) => [...old, selectedValue]);
              if (selectedValue) {
                const objSelected = formGenerates.find(
                  (it) => it.title === selectedValue
                );
                if (objSelected && Object.hasOwn(objSelected, "children")) {
                  setFormGenerates(objSelected.children ?? []);
                } else if (objSelected) {
                  setFormGenerates([]);
                  setSelectedPembelajaran(objSelected as TChildItem);
                }
              }
            }}
            items={formGenerates.map((fg) => ({
              title: fg.title,
              value: fg.title,
            }))}
          />
        </div>
      )}
      {selectedPembelajaran && (
        <div>
          <p style={{ marginBottom: "0.5rem" }}>Kriteria Pembelajaran :</p>
          <p style={{ marginBottom: "0.5rem" }}>
            {selectedPembelajaran.isIdp ? "IDP" : "non-IDP"}
          </p>
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={`Content`}
            checked={selectedPembelajaran.hasContent}
          />
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={`Contact`}
            checked={selectedPembelajaran.hasContact}
          />
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={`Context`}
            checked={selectedPembelajaran.hasContext}
          />
          <p>Standart Jp : {selectedPembelajaran.nilaiJp}</p>
        </div>
      )}
    </div>
  );

  const footerForm = (
    <div className="d-flex justify-content-end" style={{ gap: "0.5rem" }}>
      <button className="btn btn-secondary" onClick={clearForm}>
        Reset
      </button>
      <button
        className="btn btn-primary"
        disabled={selectedPembelajaran === null}
        onClick={onTambahkanForm}
      >
        Tambahkan
      </button>
    </div>
  );

  const uiItemPembelajaran: TItemAccordionBtr[] = listPembelajaran.map(
    (ite, ind) => {
      return {
        title: `${ind + 1}. ${ite.title} (${ite.parentTitle.join("/")})`,
        content: (
          <div>
            <h5>Masukkan Evidence</h5>
            <h6>Nilai JP : {ite.nilaiJp ?? "-"}</h6>
            {ite.hasContent && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Content Evidence</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            )}
            {ite.hasContact && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Contact Evidence</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            )}
            {ite.hasContext && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Context Evidence</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            )}
          </div>
        ),
      };
    }
  );

  return (
    <>
      <ModalComponent
        isOpen={isModalOpen}
        onChangeOpen={(newState) => setIsModalOpen(newState)}
        header={HeaderModal}
        body={bodyForm}
        footer={footerForm}
      />
      <div className="d-flex justify-content-between mb-2">
        <h2>Pembelajaran</h2>
        <div className="d-flex" style={{ gap: "0.5rem" }}>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setIsModalOpen(true)}
          >
            Add Pembelajaran
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => router.push("/list-pengajuan")}
          >
            Simpan sebagai draft
          </button>
          <button
            className="btn btn-success btn-sm"
            onClick={() => router.push("/list-pengajuan")}
          >
            Simpan dan Kirim
          </button>
        </div>
      </div>
      <div>
        {listPembelajaran.length <= 0 && (
          <p style={{ textAlign: "center" }}>
            -- silahkan tekan tombol &#34;tambah pembelajaran&#34; untuk
            menambahkan pembelajaran --
          </p>
        )}
        {listPembelajaran.length > 0 && (
          <AccordionBtr items={uiItemPembelajaran} />
        )}
      </div>
    </>
  );
};

export default Page;
