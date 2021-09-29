<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div style="width:500px; height:300px; margin:0 auto; overflow:auto;">
    <table style="width:700px;">
      <colgroup>
        <col>
        <col>
        <col>
        <col>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th class="first">first title</th>
          <th>title</th>
          <th>title</th>
          <th>title</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>name</th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<style>
table {
  table-layout: fixed;
  border-collapse: inherit;
  
}
table th, table td {
  border-bottom:1px solid #ddd;
  text-align: center;
  border-left: 1px solid #ddd;
}


table thead th {
  position: sticky;
  top:0;
  z-index: 1;
  height: 50px;
  border-top: 1px solid #ddd;
  border-bottom:1px solid #ddd;
  background-color: #f1f1f1;
}

table thead th.first {
  left: 0;
  z-index: 2;
  color: #fff;
  background-color: blue;
}

table tbody th {
  position: sticky;
  left:0;
  z-index: 1;
  background-color: #fff;
}

table tbody td {
  height: 50px;
  background-color: floralwhite;
}
</style>
