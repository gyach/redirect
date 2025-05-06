from flask import Flask, redirect, request
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Словарь с маппингом путей на целевые URL
REDIRECTS = {
    'zoom': 'https://us05web.zoom.us/j/81116686762?pwd=yvd6q03psRhRSFELyllk9WSEZ52tpI.1',
    'meet': 'https://meet.google.com/zbq-gnwd-ksh',
    'telemost': 'https://telemost.yandex.ru/j/3170511128',
}

@app.route('/<path:path>')
def redirect_path(path):
    # Получаем первый сегмент пути
    first_segment = path.split('/')[0]
    
    if first_segment in REDIRECTS:
        return redirect(REDIRECTS[first_segment], code=301)
    
    # Если путь не найден, перенаправляем на главную страницу
    return redirect('https://gyach.ru', code=301)

@app.route('/')
def home():
    return redirect('https://gyach.ru', code=301)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000))) 
