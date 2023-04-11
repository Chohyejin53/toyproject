- node -v : 18.12.1
- python -v : 3.11
- pip -v : 내환경 (22.3.1) 강의 (9.0.1)

- 폴더 접근
  https://harumini.tistory.com/78

## BE - tree구조

TEST\*PROJECT01/  
├── myapi/  
│ ├── \*\*\_init**\*.py  
│ ├── urls.py  
│ ├── asgi.py  
│ ├── settings.py  
│ ├── urls.py  
│ └── wsgi.py  
├── project01/  
│ ├── migrations/  
│ ├── **_init_\*\*.py  
│ ├── admin.py  
│ ├── apps.py  
│ ├── models.py  
│ ├── serializers.py  
│ ├── tests.py  
│ ├── urls.py  
│ └── views.py  
├── db.sqlite3  
└── manage.py

## 단축키

ctrl+\ (SIGQUIT) : 사용자가 터미널에서 종료키 누를때

## superuser

username : toyproject
password : (영어로)인컴즈

## 프로젝트 구조

- 프로젝트 워크스페이스로 이동
- 큰 집 안에 backend와 frontend가 있는 구조

**나중에는 BE와 FE로 나누고 각각 작업하기(지금은 be안에 fe있는 구조)**

## python_note

: https://harumini.tistory.com/78 <br>
<br>

1. Django 프로젝트 디렉토리 생성하기
   : 터미널 띄우고 디렉토리 생성  
   : `mkdir projectj01`

2. 가상환경 만들기 <br>
   : 디렉토리가 생성된 후, 생성된 디렉토리로 이동 <br>
   : `cd projectj01`

3. 폴더 확인  
   :`ls`
   <br>
4. 가상환경 이름을 venv로 지정  
   : `python3 -m venv venv`

5. 폴더 확인  
   : `ls`
6. venv 폴더로 이동  
   : `cd venv`

7. 폴더 확인  
   : `ls`

8. 폴더 확인 후 나오는 결과 확인하기  
   : `bin/inclue/lib/pyvenv.cfg`

9. 폴더 나오기  
   : `cd ..`

10. 상위 폴더, 즉 project01로 이동

11. **가상환경 활성화**  
    : **`source venv/bin/activate`**

12. 장고 설치  
    : `pip install django`
13. 장고 웹 프레임워크 로드  
    : `django-admin startproject myapi`
14. 폴더 확인  
    : `ls`
15. 폴더 리스트 일치하는지 확인  
    : `manage.py / venv / myapi`
16. 폴더 이동  
    : `cd myapi`
17. 폴더 확인  
    : `ls`
18. 폴더 리스트 일치하는지 확인  
    : `__init__.py / asgi.py / setting.py / urls.py / wsgi.py`
19. 상위폴더로 이동  
    : `cd ..`
20. 서버 구동  
    : `python3 manage.py runserver`

**이미 셋팅된 Django에서 서버 실행할 때 순서**

1. 가상환경 활성화
   : 5번부터 11번까지 순차적으로 실행

2. 서버구동
   : 20번 실행

## 마이그레이션

`python manage.py makemigrations`
`python manage.py migrate`

### Pillow 패키지가 설치

: 다양한 이미지 파일 형식을 열고 조작하고 저장하기 위한 지원을 제공하는 타사 Python 라이브러리
python -m pip install Pillow

## 서버 배포 (Heroku)

1. pip 활용해서 모듈 설치하기
   : 장고 프로젝트 터미널에서 (venv 활성화상태)
   : `pip install django-cors-headers gunicorn psycopg2-binary whitenoise dj-database-url`

- django-cors-headers : 에러방지
- gunicorn : 배포를 위한 도구
- psycopg2-binary / dj-database-url : Heroku사용하는 DB인 postgresql을 활용하기 위한 패키지
- whitenoise : 정적 파일의 사용을돕는 미들웨어

2. 설치완료 후 `requirements.txt` 파일 생성
   : `pip freeze > requirements.txt`

3. myapi > settings.py 코드 수정

- `import` 수정

```
import dj_database_url
```

- `SECRET_KEY` 수정

  - 기존 코드

  ```
  SECRET_KEY = 'django-insecure-e%541_lw9%2(n@ppr-)4@9ef3f=%)a^!y_#2%zi-hg7&z5#d*4'
  ```

  - 변경 코드

  ```
  SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY','django-insecure-e%541_lw9%2(n@ppr-)4@9ef3f=%)a^!y_#2%zi-hg7&z5#d*4')
  ```

- `DEBUG`옵션 수정
  : true > false
  : `DEBUG = False`

- `MIDDLEWARE` 수정
  : `'whitenoise.middleware.WhiteNoiseMiddleware',`

- `DATABASES`하단에 코드 추가
  ```
  db_from_env = dj_database_url.config(conn_max_age=500)
  DATABASES['default'].update(db_from_env)
  ```

4. Heroku 배포를 위한 파일 생성

- manage.py가 있는 루트 디렉토리에서 `Procfile` 생성
  : 생성된 `Procfile`에 `web: gunicon myapi.wsgi` 입력
- manage.py가 있는 루트 디렉토리에서 `runtime.txt` 생성
  : 파이썬 버전 기록
  : `Python 3.11.3`

- `.gitignore` 생성 및 작성
  : Heroku가 git을 활용한 배포를 하기 때문
  : 반드시 ignore에 포함되어야할 파일

  - `__pycache__/`
  - `*.py[cod]`
  - `.Python`
  - `venv/`
  - `db.sqlite3`
  - `.DS_Store`
  - `.vscode/`

  **배포완료!!**
