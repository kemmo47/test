#!/bin/bash
FROM node:12

ENV PATH /var/www/html/node_modules/.bin:$PATH
COPY ./fontend /var/www/html

WORKDIR /usr/bin
COPY ./docker/vue/build.sh /usr/bin/build.sh
RUN chmod +x /usr/bin/build.sh

CMD ["/usr/bin/build.sh"]