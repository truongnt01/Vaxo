import axios from 'axios';

const OdooApi = {
  login: function (username, password) {
    return axios.post('https://hub-all-api-odoo.phanmemdoanhnghiep.net/login',
      {
        db: 'gerp-zalo-v12',
        login: username,
        password: password,
        base_url: 'https://gerp-zalo-v12.phanmemdoanhnghiep.net'
      }
    );
  },
  loginUser: function (session_id) {
    return axios.post('https://hub-all-api-odoo.phanmemdoanhnghiep.net/zalo/customers/info',
      {
        session_id: session_id,
        user_id: "2",
        base_url: "https://gerp-zalo-v12.phanmemdoanhnghiep.net"
      }
    );
  },
  check: function (url) {
    return axios.get(url);
  }
  // Các phương thức API khác có thể được định nghĩa ở đây
};

export default OdooApi;