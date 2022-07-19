import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

// font-size: 16px (Desktop)

html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = 16px

html, body, #root{
  height: 100%;
}

body{
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}

.ant-input-number, .ant-picker {
  width: 100% !important;
}

.ant-input-number-handler-wrap {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.painel-table {
  flex-wrap: wrap;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 700px;
  border-radius: 6px 12px 30px 0;
}

.RCM_two_level_table1 {
  border-collapse: collapse;
  flex-wrap: wrap;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 700px;
  border-radius: 6px 12px 30px 0;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.13);
}

.RCM_two_level_table1  tr{
  background-color: rgba(36,36,35,0.04);
  color: #242423;
  font-weight: 430;

  td.ant-table-cell.ant-table-column-sort {
    background-color: rgba(0,0,0,0);
  }
  a {
    color: #04a39c;
    font-weight:450;
  }
}

.RCM_two_level_table1 thead tr th {
  font-size: 14.5px;
  font-weight: 600;
  color: rgba(255,255,255,1);
  background-color: #04a39c!important;
}

.RCM_two_level_table1 tr,
.RCM_two_level_table1 td{
  padding: 12px 15px;
}

.RCM_two_level_table1 .ant-table .ant-table-tbody > tr:hover > td{
  transition: 0.8s;
}

.RCM_two_level_table1 .ant-table .ant-table-tbody > tr:hover > td {
  background-color: rgba(53,79,83,0.25);
  color: rgba(10,5,5,1);

  a {
    color: rgba(10,5,5,1);
  }
}

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(9,30,66,.08);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.15);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,.30);
    width: 12px;
  }
  `;
