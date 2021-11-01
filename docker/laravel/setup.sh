set -ea

cd /var/www/api

echo 'Đang chạy laravel npm install ------------------------------------------>'
npm install

echo 'Đang chạy laravel npm php-fpm ------------------------------------------>'
php-fpm