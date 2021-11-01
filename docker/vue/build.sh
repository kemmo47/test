set -ea

echo '--------------------->Đang chạy build vuejs--------------------->'
cd /var/www/html
npm install
npm install -g @vue/cli
npm install vue-router@next
npm install vuex@next --save
npm run build
echo '---------------------> chạy xong build vuejs--------------------->'