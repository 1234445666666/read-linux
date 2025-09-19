# 🐱 Node.js Cat Implementation

Простая реализация утилиты `cat` на Node.js, которая работает как нативная команда Linux.

## ✨ Особенности

- 📁 Чтение одного или нескольких файлов
- 🔄 Поддержка стандартного ввода (stdin)
- 🎯 Автодополнение путей к файлам
- 🚀 Быстрый и легкий

## Требования

- Node.js 14+
- Bash shell
- Linux/macOS/WSL (на Windows требуется WSL)

## 🛠️ Установка

## Автоматическая установка (рекомендуется)

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/1234445666666/read-linux
cd read-linux

# 2 Скачайте пакеты
npm install

# 2. Дайте права на выполнение
chmod +x bin/read.sh

# 3. Добавьте алиас в .zshrc
echo 'alias read="'"$(pwd)"'/bin/read.sh"' >> ~/.zshrc

# 4. Обновите конфигурацию
 source ~/.zshrc
```

## Использование

### После установки используйте команду read как аналог cat:

```bash
# Чтение одного файла
read file.txt

# Чтение нескольких файлов
read file1.txt file2.txt file3.txt

# Чтение из стандартного ввода
echo "Hello World" | read

# Комбинирование с другими команды
ls -la | read
find . -name "*.txt" | read
```

## Примеры

```bash
# Просмотр содержимого файла
read document.txt

# Объединение нескольких файлов
read part1.txt part2.txt > combined.txt

# Использование в пайпах
cat largefile.txt | read | grep "searchterm"

# С нумерацией строк (если реализовано)
read -n code.js
```
