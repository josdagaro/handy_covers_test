FROM php:7.0-apache

RUN apt update -y \
  && echo "deb http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list \
  && echo "deb-src http://packages.dotdeb.org jessie all" >> /etc/apt/sources.list \
  && apt install -y wget \
  && wget https://www.dotdeb.org/dotdeb.gpg \
  && apt-key add dotdeb.gpg \
  && apt update -y

RUN apt install -y php7.0-xml libxml2-dev openssl git zlib1g-dev \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENV COMPOSER_ALLOW_SUPERUSER=1 \
    PATH=~/.composer/vendor/bin:$PATH

RUN docker-php-ext-install xml pdo pdo_mysql mbstring zip \
  && a2enmod rewrite && composer global require "laravel/installer"

#To lauch Laravel development server use: $ php artisan serve --host=0.0.0.0 --port=81
