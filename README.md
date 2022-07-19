# icgames :video_game:

## Clonar repositório

```bash
git clone https://github.com/felipe-jm/icgames
```

## Rodando o back

```bash
cd icgames/backend

python3 -m venv env
source env/bin/activate

pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install psycopg2
pip install dj_rest_auth
pip install django-cors-headers
pip install django-allauth

python manage.py makemigrations
python manage.py migrate

python manage.py runserver
```

## Acessar admin do django

```bash
# Criar superuser
python manage.py createsuperuser --email admin@admin.com --username admin

# Entrar em http://localhost:8000/admin, loggar no admin e brincar com os cruds
```

## Rodando o front

```bash
cd frontend

npm i

npm run dev
```
