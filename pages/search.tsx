import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { Layout } from "@components/common";
import { Container } from "@components/ui";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export default function Search({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <Container>
          <table className="waffle" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th
                  id="0R1"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s1 text-red" dir="ltr">
                  SrNo
                </td>
                <td className="s1 text-red" dir="ltr">
                  State
                </td>
                <td className="s1 text-red" dir="ltr">
                  District
                </td>
                <td className="s1 softmerge text-red" dir="ltr">
                  <div className="softmerge-inner">Sub District / Block</div>
                </td>
                <td className="s1 softmerge text-red" dir="ltr">
                  <div className="softmerge-inner">
                    Soil Test LabName / LabType Name
                  </div>
                </td>
                <td className="s1 text-red" dir="ltr">
                  Address
                </td>
                <td className="s1 softmerge text-red" dir="ltr">
                  <div className="softmerge-inner">Contact Person</div>
                </td>
                <td className="s1 softmerge text-red" dir="ltr">
                  <div className="softmerge-inner">Mobile / TelePhone</div>
                </td>
                <td className="s2 softmerge text-red" dir="ltr">
                  <div className="softmerge-inner">Test Name AND Price</div>
                </td>
              </tr>
              <th
                id="0R2"
                className="row-headers-background row-header-shim"
              ></th>
              <tr>
                <th
                  id="0R3"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  1
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Agra
                </td>
                <td className="s0" dir="ltr">
                  Agra /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB AGRA /</div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">paliwal park agra</div>
                </td>
                <td className="s5"></td>
                <td className="s5" dir="ltr">
                  -
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-0, Phosphorus (P)-0, EC-0, pH-0, Potassium
                    (K)-0, Organic Carbon (OC)-0, Zinc (Zn)-0, Iron (Fe)-0,
                    Copper (Cu)-0, Manganese (Mn)-0, Sulphur (S)-0
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R3"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  2
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Agra
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK AGRA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R4"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  3
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Agra
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  kvk,agra /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R5"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  4
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Agra
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Agra / Achhnera</div>
                </td>
                <td className="s0" dir="ltr">
                  eeeeee /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R6"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  5
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Aligarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB ALIGARH /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R7"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  6
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Aligarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R8"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  7
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Aligarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK ALIGARH /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R9"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  8
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Allahabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB ALLAHABAD /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R10"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  9
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Allahabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK ALLAHABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R11"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  10
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Ambedkar Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK AMBEDKAR NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R12"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  11
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Ambedkar Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB AMBEDKAR NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R13"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  12
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Ambedkar Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  / Bhiti
                </td>
                <td className="s0" dir="ltr">
                  up lab 3 /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R14"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  13
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Amethi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB AMETHI /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  AMETHI
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R15"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  14
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Amroha
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB AMROHA /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  AMROHA
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R16"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  15
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Auraiya
                </td>
                <td className="s0" dir="ltr">
                  Auraiya /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB AURAIYA /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  AURIYA
                </td>
                <td className="s0"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R17"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  16
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Auraiya
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK AURAIYA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R18"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  17
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Azamgarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB AZAMGARH /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R19"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  18
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Azamgarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK AZAMGARH /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R20"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  19
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Baghpat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BAGPAT /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R21"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  20
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Baghpat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    soil and water testing lab. /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R22"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  21
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Baghpat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BAGHPAT /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R23"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  22
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bahraich
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BAHRAICH /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R24"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  23
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bahraich
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R25"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  24
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bahraich
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK BAHRAICH /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R26"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  25
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ballia
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BALLIA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R27"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  26
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ballia
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BALLIA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R28"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  27
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ballia
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R29"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  28
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Balrampur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK BALRAMPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R30"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  29
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Balrampur
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Balrampur / Balrampur</div>
                </td>
                <td className="s0" dir="ltr">
                  BALRAMPUR /
                </td>
                <td className="s0" dir="ltr">
                  --
                </td>
                <td className="s0"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R31"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  30
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Banda
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BANDA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R32"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  31
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Banda
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BANDA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R33"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  32
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Banda
                </td>
                <td className="s0" dir="ltr">
                  / Bisanda
                </td>
                <td className="s0" dir="ltr">
                  up lab 4 /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R34"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  33
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Barabanki
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK BARABANKI /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R35"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  34
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Barabanki
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BARABANKI /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R36"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  35
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bareilly
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BAREILLY /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R37"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  36
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bareilly
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SWTL KVK Bareilly /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R38"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  37
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bareilly
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  up lab 2 /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R39"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  38
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bareilly
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BAREILLY /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R40"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  39
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Basti
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BASTI /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R41"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  40
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Basti
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BASTI /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R42"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  41
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Basti
                </td>
                <td className="s0" dir="ltr">
                  Basti / Basti
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KAMPANI BAG, BASTI</div>
                </td>
                <td className="s5"></td>
                <td className="s5" dir="ltr">
                  -
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-0, Phosphorus (P)-29, EC-0, pH-0, Potassium
                    (K)-0, Organic Carbon (OC)-0, Zinc (Zn)-30, Iron (Fe)-0,
                    Copper (Cu)-43, Manganese (Mn)-0
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R43"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  42
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bijnor
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BIJNOR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R44"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  43
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bijnor
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BIJNOR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R45"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  44
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Budaun
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK BUDAUN /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R46"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  45
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Budaun
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">UP Soil testing lab /</div>
                </td>
                <td className="s0" dir="ltr">
                  addrs
                </td>
                <td className="s0"></td>
                <td className="s3" dir="ltr">
                  5445454
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R47"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  46
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Budaun
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BADAUN /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R48"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  47
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bulandshahr
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Bulandshahr / Bulandshahr
                  </div>
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB BULANDSHAHAR /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  Bulandshahr
                </td>
                <td className="s0"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R49"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  48
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Bulandshahr
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK BULANDSHAHAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R50"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  49
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Chandauli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK CHANDAULI /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R51"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  50
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Chandauli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB CHANDAULI /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R52"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  51
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Chandauli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R53"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  52
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Chitrakoot
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK CHITRAKOOT /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R54"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  53
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Chitrakoot
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB CHITRAKOOT /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R55"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  54
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Deoria
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK DEORIA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R56"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  55
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Deoria
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB DEORIA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R57"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  56
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Etah
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB ETAH /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R58"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  57
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Etah
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB., KVK, AWAGARH, ETAH /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R59"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  58
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Etah
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK ETAH /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R60"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  59
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Etawah
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB ETAWAH /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R61"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  60
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Etawah
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK ETAWAH /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R62"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  61
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Faizabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK FAIZABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R63"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  62
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Faizabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  1 /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R64"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  63
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Faizabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB FAIZABAD /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R65"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  64
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Faizabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R66"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  65
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Farrukhabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK FARUKHABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R67"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  66
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Farrukhabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB FARRUKHABAD /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R68"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  67
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Fatehpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK FATEHPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R69"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  68
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Fatehpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB FATEHPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R70"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  69
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Firozabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB FIROZABAD /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  DABRAI
                </td>
                <td className="s0"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R71"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  70
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Firozabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK FIROZABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R72"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  71
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Gautam Buddha Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB G B NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R73"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  72
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Gautam Buddha Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    KVK GAUTAM BUDDH NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R74"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  73
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ghaziabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB GHAZIABAD /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R75"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  74
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ghaziabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK GHAZIABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R76"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  75
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ghazipur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB GHAZIPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R77"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  76
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ghazipur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Krishi Vigyan Kendra PG College Ghazipur /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R78"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  77
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Ghazipur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK GHAZIPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R79"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  78
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gonda
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK GONDA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R80"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  79
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gonda
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB GONDA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-0, Phosphorus (P)-0, pH-0
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R81"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  80
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gonda
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R82"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  81
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gorakhpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB GORAKHPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R83"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  82
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gorakhpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R84"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  83
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Gorakhpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK GORAKHPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R85"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  84
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hamirpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK HAMIRPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R86"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  85
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hamirpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB HAMIRPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R87"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  86
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB HAPUR /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">Soil Testing Lab Hapur</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R88"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  87
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hardoi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB HARDOI /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R89"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  88
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hardoi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK HARDOI /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R90"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  89
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hathras
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK MAHA MAYA NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R91"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  90
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hathras
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R92"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  91
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Hathras
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB HATHRAS /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R93"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  92
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jalaun
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB JALAUN /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    BAFAR GODAM SUSHIL NAGAR BEHIND COLLECTRATE ORAI
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R94"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  93
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jalaun
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK JALAUN /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R95"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  94
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jaunpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK JAUNPUR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R96"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  95
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jaunpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB JAUNPUR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R97"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  96
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jaunpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R98"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  97
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jhansi
                </td>
                <td className="s0" dir="ltr">
                  Jhansi /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB JHANSI /
                  </div>
                </td>
                <td className="s0" dir="ltr">
                  R S T Lab Jhansi
                </td>
                <td className="s0"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-0, Phosphorus (P)-0, EC-0, pH-0, Potassium
                    (K)-0, Organic Carbon (OC)-0, Zinc (Zn)-0, Iron (Fe)-0,
                    Copper (Cu)-0, Manganese (Mn)-0, Boron (B)-0, Sulphur (S)-0
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R99"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  98
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jhansi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R100"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  99
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jhansi
                </td>
                <td className="s0" dir="ltr">
                  Jhansi /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB, JHANSI /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">CIVIL LINE JHANSI</div>
                </td>
                <td className="s5"></td>
                <td className="s7" dir="ltr">
                  94119435
                </td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R101"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  100
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Jhansi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK JHANSI /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R102"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  101
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kannauj
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK KANNAUJ /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R103"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  102
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kannauj
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KANNAUJ /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R104"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  103
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kanpur Dehat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK KANPUR DEHAT /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R105"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  104
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kanpur Dehat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KANPUR DEHAT /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R106"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  105
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kanpur Dehat
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R107"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  106
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kanpur Nagar
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KANPUR NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R108"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  107
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kasganj
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KASGANJ /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R109"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  108
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kaushambi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK KAUSHAMBHI /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R110"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  109
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kaushambi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KAUSHAMBI /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R111"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  110
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kheri
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KHIRI LAKHIMPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R112"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  111
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kheri
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK LAKHIMPUR-KHERI /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R113"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  112
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kushi Nagar
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB KUSHINAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R114"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  113
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Kushi Nagar
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK KUSHI NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R115"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  114
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Lalitpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB LALITPUR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R116"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  115
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Lalitpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK LALITPUR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R117"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  116
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Lucknow
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Lucknow / Kakori</div>
                </td>
                <td className="s0" dir="ltr">
                  LUCKNOW /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R118"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  117
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Lucknow
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB LUCKNOW /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">Alambagh Lucknow</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R119"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  118
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Lucknow
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK LUCKNOW /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R120"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  119
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Maharajganj
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK MAHARAJGANJ /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R121"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  120
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Maharajganj
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MAHRAJGANJ /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R122"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  121
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mahoba
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MAHOBA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R123"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  122
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mahoba
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK MAHOBA /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R124"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  123
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mainpuri
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK MAINPURI /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R125"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  124
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mainpuri
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MAINPURI /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R126"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  125
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mainpuri
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">Soil Testing Lab /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R127"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  126
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mathura
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MATHURA /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R128"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  127
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mathura
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK MATHURA /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R129"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  128
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mau
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK MAU /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R130"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  129
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mau
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB MAU /</div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Mill Road Pardaha Near Krishi Bhawan
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s0" dir="ltr">
                  0547-2220451
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-37, Phosphorus (P)-37, EC-37, pH-37, Potassium
                    (K)-37
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R131"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  130
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Meerut
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R132"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  131
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Meerut
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MEERUT /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R133"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  132
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Meerut
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK MEERUT /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R134"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  133
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mirzapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Soil Test Lab. Mirzapur /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R135"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  134
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mirzapur
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Mirzapur / Nagar (City)</div>
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MIRZAPUR /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    VILL PIPRA DAND POST NAGAR CITY DISTT MIRZAPUR
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s0" dir="ltr">
                  -
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Phosphorus (P)-0, EC-0, pH-0, Potassium (K)-0, Organic
                    Carbon (OC)-0, Zinc (Zn)-0, Iron (Fe)-0, Copper (Cu)-0,
                    Manganese (Mn)-0, Sulphur (S)-0
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R136"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  135
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mirzapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MIRZAPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R137"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  136
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Mirzapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Soil Testing Lab, Mirzapur /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R138"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  137
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Moradabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK MORADABAD /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R139"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  138
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Moradabad
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MORADABAD /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R140"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  139
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Muzaffarnagar
                </td>
                <td className="s0" dir="ltr">
                  Muzaffarnagar /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    KVK Soil Testing Lab Muzaffarnagar /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R141"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  140
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Muzaffarnagar
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK MUZAFFARNAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R142"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  141
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Muzaffarnagar
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB MUZAFFARNAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R143"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  142
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Pilibhit
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK PILIBHIT /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R144"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  143
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Pilibhit
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB PILIBHIT /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R145"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  144
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Pratapgarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB PRATAPGARH /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R146"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  145
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Pratapgarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL AND WATER TESTING LABORATORY PRATAPGARH-229408 /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s6"></td>
                <td className="s6"></td>
                <td className="s5"></td>
              </tr>
              <tr>
                <th
                  id="0R147"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  146
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Pratapgarh
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK PRATAPGARH /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R148"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  147
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Rae Bareli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R149"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  148
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Rae Bareli
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Rae Bareli / Rahi</div>
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB RAEBARELI /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">Gora Bazar Raebareli</div>
                </td>
                <td className="s5"></td>
                <td className="s5" dir="ltr">
                  0532-2701040
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Phosphorus (P)-8, EC-4, pH-4, Potassium (K)-8, Organic
                    Carbon (OC)-5, Zinc (Zn)-9, Iron (Fe)-9, Copper (Cu)-8,
                    Manganese (Mn)-8, Boron (B)-9, Sulphur (S)-30
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R150"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  149
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Rae Bareli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK RAEBARELI /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R151"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  150
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Rampur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB RAMPUR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R152"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  151
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Rampur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK RAMPUR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R153"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  152
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Saharanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SAHARANPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R154"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  153
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Saharanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SAHARANPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R155"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  154
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sambhal
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SAMBHAL /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R156"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  155
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Sant Kabeer Nagar</div>
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Khalilabad / Khalilabad</div>
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SANT KABIR NAGAR /
                  </div>
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SDAEO KHALILABAD</div>
                </td>
                <td className="s5"></td>
                <td className="s5" dir="ltr">
                  05547-226052
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    Nitrogen (N)-6, Phosphorus (P)-5, EC-2, pH-6, Potassium
                    (K)-5, Organic Carbon (OC)-5
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  id="0R157"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  156
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Sant Kabeer Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SANT KABEER NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R158"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  157
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Sant Ravidas Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SANT RAVIDAS NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R159"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  158
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Sant Ravidas Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    KVK SANT RAVIDAS NAGAR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R160"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  159
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Shahjahanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SAHJAHANPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R161"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  160
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Shahjahanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SHAHJAHANPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R162"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  161
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Shamli
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SHAMLI /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R163"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  162
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Shravasti
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  BALRAMPUR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R164"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  163
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Shravasti
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SHRAVASTI /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R165"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  164
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Siddharth Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SIDDHART NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R166"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  165
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Siddharth Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SIDDHARTH NAGAR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R167"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  166
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0 softmerge" dir="ltr">
                  <div className="softmerge-inner">Siddharth Nagar</div>
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SIDDHARTH NAGAR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R168"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  167
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sitapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SITAPUR /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R169"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  168
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sitapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R170"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  169
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sitapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK SITAPUR /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R171"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  170
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sitapur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SITAPUR-II /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R172"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  171
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sonbhadra
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESTING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R173"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  172
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sonbhadra
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SONBHADRA /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R174"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  173
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sonbhadra
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SONBHADRA /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R175"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  174
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sultanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">KVK SULTANPUR /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R176"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  175
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Sultanpur
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB SULTANPUR /
                  </div>
                </td>
                <td className="s6"></td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R177"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  176
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Unnao
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB UNNAO /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R178"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  177
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Unnao
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s0" dir="ltr">
                  KVK UNNAO /
                </td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R179"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  178
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Varanasi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">SOIL TESING LAB /</div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
              <tr>
                <th
                  id="0R180"
                  className="row-headers-background row-header-shim"
                ></th>
                <td className="s3" dir="ltr">
                  179
                </td>
                <td className="s0" dir="ltr">
                  Uttar Pradesh
                </td>
                <td className="s0" dir="ltr">
                  Varanasi
                </td>
                <td className="s0" dir="ltr">
                  /
                </td>
                <td className="s4 softmerge" dir="ltr">
                  <div className="softmerge-inner">
                    SOIL TESTING LAB VARANASI /
                  </div>
                </td>
                <td className="s5"></td>
                <td className="s5"></td>
                <td className="s0"></td>
                <td className="s0"></td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </div>
  );
}

Search.Layout = Layout;
