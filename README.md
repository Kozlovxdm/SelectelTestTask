Подготовка тестового окружения JS + Protractor (Ubuntu 16.04) 
=============================================================


УСТАНОВКА NVM И NODEJS 
----------------------
1. Обновите систему, выполнив в терминале:

	$sudo apt-get update
	$sudo apt-get upgrade

2. Для сборки пакетов из исходников выполните в терминале:

	$sudo apt-get install build-essential libssl-dev

3. Установите nvm используя скрипт:

	$sudo wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

4. Что бы принять изменения выполните:

	$source ~/.profile

5. Установите nodejs, используя nvm и создайте ссылку на nodejs:

	$nvm install -g 8.11.1 
	$ln -s ('which node') /usr/local


УСТАНОВКА NPM И PROTRACTOR
--------------------------
1. Установите npm, выполнив в терминале:
	
	$sudo apt-get install npm

2. Установите protractor, используя npm:

	$npm install -g protractor

3. Для установки selenium, выполните:

	$webdriver-manager update


ЗАПУСК ТЕСТОВ
-------------
1. В терминале перейдите в директорию /conf, выполните команду:

	$protractor conf.js

2. Для запуска другого теста, в файле conf.js измените значение 'specs:' на путь к соответствующему тесту.
	
