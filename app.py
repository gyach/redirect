from flask import Flask, redirect, request
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Словарь с маппингом поддоменов на целевые URL
REDIRECTS = {
    'zoom': 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
    'meet': 'https://meet.google.com/zbq-gnwd-ksh',
    'telemost': 'https://telemost.yandex.ru/j/3170511128',
    # Добавьте здесь свои поддомены и их целевые URL
}

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def redirect_subdomain(path):
    # Получаем поддомен из заголовка Host
    host = request.host.split('.')
    if len(host) > 2:  # Проверяем, что это поддомен
        subdomain = host[0]
        if subdomain in REDIRECTS:
            return redirect(REDIRECTS[subdomain], code=301)
    
    # Если поддомен не найден или это основной домен, 
    # можно перенаправить на главную страницу
    return redirect('https://github.com/gyach', code=301)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000))) 
